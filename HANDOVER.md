# Handover

Read this file before you start work in this repo. Update it at the end of each session.

Last update: 15 October 2026, after Module 2.

## Status

| Module | Artifact | Status |
| :- | :- | :- |
| M1 · Prompting | `01-prompting/skill-file.md` | Done. On `main`. |
| M2 · Prototype | `02-prototype/prototype.md`, `02-prototype/app/` | Done. On `main`. The public link is in `prototype.md`. The debrief is a first draft. |
| M3 · Harness / AI PRD | `03-harness-prd/prd.md` | Not started. Template placeholder. |
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
- **M2 skill file:** the app uses `risk-radar-skill.md` without changes. The owner decides each change to the skill file.

## Repo setup

- GitHub repo: `dil-gorendi/juno-pm.` The name ends with a dot. The local folder name has no dot.
- Remote `origin`: this repo. Push to it.
- Remote `upstream`: the course template, `Product-School-Platform/ai-product-management-template`. Use `git pull upstream main` to get changes from the instructor.
- The fork `dil-gorendi/ai-product-management-template` is only a reference. Do not do course work in it.
- GitHub Pages: on, from `main`, root folder. The site is `https://dil-gorendi.github.io/juno-pm./`.

## Next tasks

1. Post the M1 debrief guardrail in #cohort-channel. The owner does this task. The proposed guardrail is: "Use only the ticket IDs, metrics, customer names, dates, and estimates that are in the inputs."
2. Edit the M2 debrief in `02-prototype/prototype.md`. Then decide if the Why rule in `risk-radar-skill.md` changes. The debrief gives the reason.
3. When the course gives the official cohort name, put it in the README byline.
4. Optional: add one few-shot example to the skill file for a Given / When / Then acceptance criterion.
