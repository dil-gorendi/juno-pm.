// Local server for Juno · Risk radar.
// It serves the app page and sends the open threads to Claude on Amazon Bedrock.
// The system prompt is the skill file ../risk-radar-skill.md, without changes.
// Start the server with "npm start". Then open http://localhost:8787.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { AnthropicBedrock } from '@anthropic-ai/bedrock-sdk';

const PORT = Number(process.env.PORT ?? 8787);
const MODEL = process.env.JUNO_MODEL ?? 'us.anthropic.claude-opus-5-5';
const EFFORT = process.env.JUNO_EFFORT ?? 'medium';
const MAX_INPUT_CHARS = 20000;
const MAX_BODY_BYTES = 200000;
const PAGE = new URL('./index.html', import.meta.url);
const SKILL_FILE = new URL('../risk-radar-skill.md', import.meta.url);
const LOCAL_HOSTS = new Set([`localhost:${PORT}`, `127.0.0.1:${PORT}`]);

// The client gets the region from AWS_REGION and the credentials from the AWS profile.
// The page stops after 120 seconds, so the server stops first, after 110 seconds.
const client = new AnthropicBedrock({ timeout: 110000, maxRetries: 1 });

class ClientError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function runRadar(threads, signal) {
  // Read the skill file for each request. Then an edit to the file applies without a restart.
  const system = await readFile(SKILL_FILE, 'utf8');
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    system,
    output_config: { effort: EFFORT },
    messages: [{ role: 'user', content: threads }],
  }, { signal });
  const text = response.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
    .trim();
  return { text, stopReason: response.stop_reason, model: MODEL };
}

function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(body);
}

function sendJson(res, status, value) {
  send(res, status, 'application/json', JSON.stringify(value));
}

async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) throw new ClientError('The request is too large.', 413);
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function readThreads(req) {
  // Accept only JSON from the app page. Then other web pages cannot start a billed call.
  const origin = req.headers.origin;
  if (origin && origin !== `http://localhost:${PORT}` && origin !== `http://127.0.0.1:${PORT}`) {
    throw new ClientError('The request must come from the app page.', 403);
  }
  if (!String(req.headers['content-type'] ?? '').startsWith('application/json')) {
    throw new ClientError('Send the request as JSON.', 415);
  }
  const body = await readBody(req);
  let data;
  try {
    data = JSON.parse(body);
  } catch {
    throw new ClientError('Send JSON in this format: {"threads": "..."}.', 400);
  }
  const threads = data?.threads;
  if (typeof threads !== 'string' || !threads.trim() || threads.length > MAX_INPUT_CHARS) {
    throw new ClientError(`Send 1 to ${MAX_INPUT_CHARS} characters of open threads.`, 400);
  }
  return threads;
}

const server = createServer(async (req, res) => {
  // Accept only requests to this computer by name. This stops DNS rebinding.
  if (!LOCAL_HOSTS.has(req.headers.host)) return send(res, 403, 'text/plain', 'Forbidden');
  const { pathname } = new URL(req.url, 'http://localhost');
  const controller = new AbortController();
  // If the page closes the request, stop the model call.
  res.on('close', () => { if (!res.writableEnded) controller.abort(); });
  try {
    if ((req.method === 'GET' || req.method === 'HEAD') && (pathname === '/' || pathname === '/index.html')) {
      const page = await readFile(PAGE);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(req.method === 'HEAD' ? undefined : page);
    }
    if (req.method === 'POST' && pathname === '/api/radar') {
      const threads = await readThreads(req);
      const result = await runRadar(threads, controller.signal);
      console.log(`radar: ${result.stopReason}, ${result.text.length} characters`);
      return sendJson(res, 200, result);
    }
    return send(res, 404, 'text/plain', 'Not found');
  } catch (error) {
    if (controller.signal.aborted) return console.log('radar: the page closed the request');
    if (error instanceof ClientError) return sendJson(res, error.status, { error: error.message });
    console.error('radar error:', error.message);
    return sendJson(res, 502, { error: error.message });
  }
});

// Listen on this computer only. The server does not accept requests from the network.
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Juno · Risk radar: http://localhost:${PORT} (model ${MODEL}, effort ${EFFORT})`);
});
