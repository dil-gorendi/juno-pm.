# Juno PM

> Juno is an AI Associate PM that turns signals into insight, writes draft specs, and finds the risks that need attention first.

_Gary Orendi · AI Product Management Certification, October 2026 cohort · started 13 October 2026_

This repo is my final project for the **AI Product Management Certification** of Product School. Each module has a folder for its artifact. The scenario is fictional: I am the PM at RocketShip, and I build Juno to do part of my work.

## Rules for AI tools

The file [`AGENTS.md`](AGENTS.md) gives the rules for each AI tool that works in this repo. All text in this repo uses ASD-STE100 Simplified Technical English (STE). This rule also applies to the output of each skill.

## Module artifacts

### M1 · Prompting
- **Skill file**: [`01-prompting/skill-file.md`](01-prompting/skill-file.md). Juno writes a draft spec from a problem statement and its inputs.

### M2 · Prototype
- **Prototype**: [`02-prototype/prototype.md`](02-prototype/prototype.md). The link, what the prototype shows, and the debrief.
- **Skill file**: [`02-prototype/risk-radar-skill.md`](02-prototype/risk-radar-skill.md). Juno finds the 3 open threads with the highest risk and writes a Monday card.

### M3 · Harness / AI PRD
- **AI PRD**: [`03-harness-prd/prd.md`](03-harness-prd/prd.md).

### M4 · Deploy Agentic Systems and Workflows
- **Agent Control Panel**: [`04-agentic-workflows/agent-control-panel.md`](04-agentic-workflows/agent-control-panel.md).

### M5 · Evals & Guardrails
- **Human eval rubric**: [`05-evals/human-rubric.md`](05-evals/human-rubric.md).

### M6 · Prove AI Impact with Ongoing Metrics
- **Final presentation**: [`final-presentation.html`](final-presentation.html). The Final Project Deliverables Builder makes this file from the files above.

## Repo structure

```
juno-pm/
├── README.md                    # this overview
├── AGENTS.md                    # rules for all AI tools (STE)
├── HANDOVER.md                  # status, decisions, and next tasks
├── final-presentation.html      # M6: final presentation
├── 01-prompting/
│   └── skill-file.md            # M1: Juno's skill file (Role/Task/Constraints/Format)
├── 02-prototype/
│   ├── prototype.md             # M2: prototype link and debrief
│   ├── risk-radar-skill.md      # M2: Juno's skill file for the risk radar
│   └── app/                     # M2: the prototype app (one page and a local server)
├── 03-harness-prd/
│   └── prd.md                   # M3: AI PRD for the six harness surfaces
├── 04-agentic-workflows/
│   └── agent-control-panel.md   # M4: Agent Control Panel
└── 05-evals/
    └── human-rubric.md          # M5: human eval rubric
```

_Certification submission, AI Product Management Certification._
