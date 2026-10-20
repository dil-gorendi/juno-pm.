# Handover

Read this file before you start work in this repo. Update it at the end of each session.

Last update: 20 October 2026, after the first draft of the M3 AI PRD.

## Status

| Module | Artifact | Status |
| :- | :- | :- |
| M1 · Prompting | `01-prompting/skill-file.md` | Done. On `main`. |
| M2 · Prototype | `02-prototype/prototype.md`, `02-prototype/app/` | Done. On `main`. The public link is in `prototype.md`. The debrief is a first draft. The 100-thread demo is on `main`. It has a stored card from a live run. |
| M3 · Harness / AI PRD | `03-harness-prd/prd.md` | First draft. On `main`. The owner reviews it. The Lab 1 sketch is outside the repo. |
| M4 · Agentic workflows | `04-agentic-workflows/agent-control-panel.md` | Not started. Template placeholder. |
| M5 · Evals | `05-evals/human-rubric.md` | Not started. Template placeholder. |
| M6 · Final presentation | `final-presentation.html` | Not started. |

The README has the pitch and the author details. It is on `main`.

## Decisions

- **Juno's M1 job:** the skill file owns one job: draft specs. The other two jobs are insight from signals and risk priority. Later modules can add them.
- **Language:** all text uses ASD-STE100 Simplified Technical English (STE). This rule applies to each skill, each output, each file, and each commit message. Each skill file must have an STE rule in its Constraints section. Refer to `AGENTS.md`.
- **Agent rules file:** use `AGENTS.md`. Do not add a `CLAUDE.md`. If a `CLAUDE.md` is present, Claude Code reads only `CLAUDE.md` and ignores `AGENTS.md`.
- **Data:** this repo is public. Use only the fictional RocketShip scenario. Do not add company data or customer data.
- **Changes:** use a pull request to change the M1 skill file. Commit the first version of a new artifact on `main`. Then improve it in later commits.
- **Author workflow:** the agent writes the first draft. The owner edits it. Commit and push only when the owner tells you to.
- **M2 AI call:** the local server (`npm start`) calls Claude on Amazon Bedrock with the AWS credentials of the computer. The public copy on GitHub Pages cannot call a model, so it shows stored results for the two examples. Do not put credentials or an API key in the app.
- **M2 skill file:** the app uses `risk-radar-skill.md` without changes. The owner decides each change to the skill file. On 16 October 2026, the owner changed 3 rules: each Why line names each signal, Also watch uses the rank sequence, and the maximum length is 160 words.
- **M2 stored cards:** the 3 stored cards in `index.html` come from the first skill file (commit 66f1394). Live runs did not test the changed skill file yet.
- **M2 demo data:** `02-prototype/demo-threads-100.txt` is the only copy of the 100-thread demo. The page loads it with `fetch`, and `server.mjs` serves it. Do not change this file or `demo-answer-key.md`. If one line changes, the answer key becomes wrong. The stored demo card in `index.html` is live run 1, which agrees with section 2 of the answer key. The owner approved it.

- **M3 scope:** the PRD gives the harness for the M2 risk radar only. On 20 October 2026, the owner decided that Juno posts the card each weekday, not each Monday (PRD decision D5).
- **M3 structure:** the PRD uses the section structure of the course tool `M3 - AI PRD Builder.html`. The tool did not make the text. The PRD sets write to blocked, not to the tool default of confirm, because v1 has no write verb.
- **M3 rule changes:** PRD decisions D1 to D4 and D6 change M2 rules. The owner approves each one before `risk-radar-skill.md` or `demo-answer-key.md` changes.

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
7. M3: the owner reviews `03-harness-prd/prd.md` and decides on D1 to D6. The acceptance criteria are the eval of the PRD, so they stay in it.
8. M3: change `risk-radar-skill.md` for each approved decision. D5 changes "on Monday morning" to each weekday.
9. M3: the owner posts the M3 share in #cohort-channel.
