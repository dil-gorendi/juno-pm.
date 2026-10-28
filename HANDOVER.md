# Handover

Read this file before you start work in this repo. Update it at the end of each session.

Last update: 28 October 2026, before class 6.

## Status

| Module | Artifact | Status |
| :- | :- | :- |
| M1 · Prompting | `01-prompting/skill-file.md` | Done. On `main`. |
| M2 · Prototype | `02-prototype/prototype.md`, `02-prototype/app/` | Done. On `main`. The public link is in `prototype.md`. The debrief is a first draft. The 100-thread demo is on `main`. It has a stored card from a live run. |
| M3 · Harness / AI PRD | `03-harness-prd/prd.md` | First draft. On `main`. The owner reviews it. D7 adds the M4 controls. The Lab 1 sketch is outside the repo. |
| M4 · Agentic workflows | `04-agentic-workflows/agent-control-panel.md` | Done. On `main`. The text comes from the course tool `M4 - Agent Control Panel.html`. |
| M5 · Evals | `05-evals/human-rubric.md` | Done. On `main`. The text comes from the course tool `M5 - Human Evaluation Rubric.html`. |
| M6 · Final presentation | `final-presentation.html` | Not started. The builder inputs are ready outside the repo, in the class 6 folder. The class is on 29 October 2026. |

The README has the pitch and the author details. It is on `main`.

## Decisions

- **Juno's M1 job:** the skill file owns one job: draft specs. The other two jobs are insight from signals and risk priority. Later modules can add them.
- **Language:** all text uses ASD-STE100 Simplified Technical English (STE). This rule applies to each skill, each output, each file, and each commit message. Each skill file must have an STE rule in its Constraints section. Refer to `AGENTS.md`.
- **Agent rules file:** use `AGENTS.md`. Do not add a `CLAUDE.md`. If a `CLAUDE.md` is present, Claude Code reads only `CLAUDE.md` and ignores `AGENTS.md`.
- **Data:** this repo is public. Use only the fictional RocketShip scenario. Do not add company data or customer data.
- **Changes:** use a pull request to change the M1 skill file. Commit the first version of a new artifact on `main`. Then improve it in later commits.
- **Author workflow:** the agent writes the first draft. The owner edits it. Commit and push only when the owner tells you to.
- **M2 AI call:** the local server (`npm start`) calls Claude on Amazon Bedrock with the AWS credentials of the computer. The public copy on GitHub Pages cannot call a model, so it shows stored results for the two examples and the 100-thread demo. Do not put credentials or an API key in the app.
- **M2 skill file:** the app uses `risk-radar-skill.md` without changes. The owner decides each change to the skill file. On 16 October 2026, the owner changed 3 rules: each Why line names each signal, Also watch uses the rank sequence, and the maximum length is 160 words.
- **M2 stored cards:** the 3 stored cards in `index.html` come from the first skill file (commit 66f1394). Live runs did not test the changed skill file yet.
- **M2 demo data:** `02-prototype/demo-threads-100.txt` is the only copy of the 100-thread demo. The page loads it with `fetch`, and `server.mjs` serves it. Do not change this file or `demo-answer-key.md`. If one line changes, the answer key becomes wrong. The stored demo card in `index.html` is live run 1, which agrees with section 2 of the answer key. The owner approved it.

- **M3 scope:** the PRD gives the harness for the M2 risk radar only. On 20 October 2026, the owner decided that Juno posts the card each weekday, not each Monday (PRD decision D5).
- **M3 structure:** the PRD uses the section structure of the course tool `M3 - AI PRD Builder.html`. The tool did not make the text. The PRD sets write to blocked, not to the tool default of confirm, because v1 has no write verb.
- **M3 rule changes:** PRD decisions D1 to D6 and D8 change M2 rules. The owner approves each one before `risk-radar-skill.md` or `demo-answer-key.md` changes. The answer key changes only through its generator script outside the repo.
- **M4 pillar:** risk flagging, the Risk radar. Level 2, semi-autonomous, in Phase 3 only. The pattern is ReAct as a fixed prompt chain: the model has no tools, so code runs the loop. The failure mode to watch is silent failure.
- **Harness lines:** on 22 October 2026, the owner put the New tag, the Not verified line, and the Data as of line in the skill file. The harness writes them, not the model, because the model does not know the previous card, the check results, or the read time.
- **M4 format:** each field of the tool output is 1 plain paragraph, without bullets, tables, or code blocks. The tool copies the text without changes.
- **M5 rubric:** on 26 October 2026, the owner approved 4 choices. The rubric scores the whole Risk radar card, not only the next steps. The support team lead is the second eval reviewer. A set of 10 cards passes when 9 or more cards have Yes on Escalation correct. The average on the two scales must also be 4 or more. The style test in the PRD fixture set is the check for unfair treatment. It replaced a name test, because model call 1 does not see the owner name.
- **M5 tool output:** on 27 October 2026, the owner approved 3 changes from the course tool. No hallucination has the deal-breaker mark in the table. The pass bar paragraph does not give the deal-breakers. A list under it gives them. The tool has 1 field for the other deal-breakers, so the last 3 deal-breakers are 1 item of the list. The style test name is "PRD fixture set", the same as in the PRD. After a cold review, the owner approved 5 more changes. The pass rule refers to the list. The pass bar gives the unit of each average and says "a failed set". The list defines a key string as in the PRD, and says when the style test runs.
- **M5 tool:** the course tools are in the LMS, not in the repo. The class 5 notes give the link to the M5 tools. The tool has more fields than the draft: a deal-breaker check box for each question, and a separate field for the other deal-breakers.
- **Consistency check:** on 27 October 2026, a full-repo check compared each file with the others. The owner approved 8 fixes. The control panel now gives the V2 repair result of the PRD. The PRD North Star input is the paragraph without its last sentence. The PRD regression cadence has the stop rule of the rubric. The decision lists include D5 and D8.
- **D5 in the repo:** on 28 October 2026, the owner told the agent to make the weekday card the same in all files. The skill file, `prototype.md`, `README.md`, `package.json`, and the channel topic in `index.html` now say each weekday. The mockup channel name `#pm-monday` does not change, because PRD question Q1 is open. The date "Monday 19 October 2026" in the demo is a date, not a schedule.
- **M6 baseline:** on 28 October 2026, the owner told the agent to suggest a baseline and put it in the PRD. The goal metric is the number of new Escalation threads in 4 weeks. The baseline is 12. Today, the PM uses about 45 minutes each weekday and reads about 30 of the 100 open threads. The agent proposed the numbers, and the PRD marks them as an `ASSUMPTION`. The target, the review date, and the stop line are only in the M6 builder inputs.
- **M5 links:** the PRD Eval plan links to the rubric and gives the regression cadence. The rubric pass bar on the 10 shadow runs is a Phase 3 gate in the PRD and in the control panel. The M5 pre-read says that the work of Modules 1 to 4 does not change. So only the PRD and the control panel changed, for the links and the gate.

## Repo setup

- GitHub repo: `dil-gorendi/juno-pm.` The name ends with a dot. The local folder name has no dot.
- Remote `origin`: this repo. Push to it.
- Remote `upstream`: the course template, `Product-School-Platform/ai-product-management-template`. Use `git pull upstream main` to get changes from the instructor.
- The fork `dil-gorendi/ai-product-management-template` is only a reference. Do not do course work in it.
- GitHub Pages: on, from `main`, root folder. The site is `https://dil-gorendi.github.io/juno-pm./`.

## Next tasks

1. Post the M1 debrief guardrail in #cohort-channel. The owner does this task. The proposed guardrail is: "Use only the ticket IDs, metrics, customer names, dates, and estimates that are in the inputs."
2. Edit the M2 debrief in `02-prototype/prototype.md`.
3. Test the changed skill file with live runs of the 2 examples and the demo. The owner must approve each live run, because the company pays for it. If the cards agree with the CHECK rules and the answer key, make the 3 stored cards again.
4. Line 158 of `demo-answer-key.md` says that the Format section does not give the Also watch sequence. This is not true after the change on 16 October 2026. The owner decides if the line changes.
5. When the course gives the official cohort name, put it in the README byline.
6. Optional: add one few-shot example to the skill file for a Given / When / Then acceptance criterion.
7. M3: the owner reviews `03-harness-prd/prd.md` and decides on D2, D3, D4, and D6. The owner decided D5 on 20 October 2026, and D1, D7, and D8 on 22 October 2026. The acceptance criteria are the eval of the PRD, so they stay in it.
8. M3: change `risk-radar-skill.md` for each approved decision. D8 adds the Silent rule for a thread with no reply. D5 is done.
9. M3: the owner posts the M3 share in #cohort-channel.
10. M3, optional: 4 blind evaluators gave the PRD 8 of 10. Readability is the gap. To get 9, move the build detail to a linked build spec. The build detail is the schemas, the card template, the settings, the parse rules, and the phases. The acceptance criteria stay in the PRD.
11. M4: the owner posts the M4 share in #cohort-channel. The share names the lever that was hardest to specify.
12. M4: on 22 October 2026, the owner approved the 7 PRD changes from the control panel. They are PRD decision D7, with criteria 20 to 26 and a change to criterion 17. Criteria 21 to 24 and 26 use stubs before Phase 2. Criteria 20 and 25 run in the Phase 3 test environment.
13. M5: the owner posts the M5 share in #cohort-channel. The share names the part of the rubric that was hardest to describe.
14. M5: a score of 5 for Next step useful needs whom to ask. The skill file does not ask the model for this. Decide after the first scored set, because the prompt is the first lever to change.
15. M5: the owner decides if the PRD decisions table gets a D9 for the M5 changes.
16. M2: the comment on line 20 of `02-prototype/app/server.mjs` says that the server stops first. This is not true. With `maxRetries: 1`, the SDK retries a timeout, so the page stops first, after 120 seconds. The owner decides if the comment changes or if `maxRetries` becomes 0.
17. M6: in class, use the copy sheet for the builder. Commit `final-presentation.html` at the repo root. Then submit the repo link and the presentation within 7 days of the cohort end.
