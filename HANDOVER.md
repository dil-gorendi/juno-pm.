# Handover

Read this file before you start work in this repo. Update it at the end of each session.

Last update: 14 October 2026, after Module 1.

## Status

| Module | Artifact | Status |
| :- | :- | :- |
| M1 · Prompting | `01-prompting/skill-file.md` | Done. On `main`. |
| M2 · Prototype | `02-prototype/prototype.md` | Not started. Template placeholder. |
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

## Repo setup

- GitHub repo: `dil-gorendi/juno-pm.` The name ends with a dot. The local folder name has no dot.
- Remote `origin`: this repo. Push to it.
- Remote `upstream`: the course template, `Product-School-Platform/ai-product-management-template`. Use `git pull upstream main` to get changes from the instructor.
- The fork `dil-gorendi/ai-product-management-template` is only a reference. Do not do course work in it.

## Next tasks

1. Post the M1 debrief guardrail in #cohort-channel. The owner does this task. The proposed guardrail is: "Use only the ticket IDs, metrics, customer names, dates, and estimates that are in the inputs."
2. Read the Module 2 pre-read. Then make the M2 prototype.
3. When the course gives the official cohort name, put it in the README byline.
4. Optional: add one few-shot example to the skill file for a Given / When / Then acceptance criterion.
