---
name: readme-generator
description: "Use when the user needs comprehensive README documentation for a project, codebase, or repository—initial documentation, updating an outdated README, onboarding developers, or improving discoverability and understanding for new team members."
---

## Overview
This skill guides an agent in creating a well‑structured, complete README.md that enables developers of all levels to understand, set up, and contribute to the project quickly.

## Core Mission
Generate a comprehensive, readable README covering key aspects: header, overview, quick start, prerequisites, installation, configuration, usage, architecture, development, testing, deployment, troubleshooting, contributing, license, and acknowledgments. The output must be fully formatted Markdown suitable for immediate use.

## Approach
1. **Analyze the codebase** – discover structure, stack, architecture, and existing docs.
2. **Build the README skeleton** – insert sections per the mandatory list below.
3. **Populate each section** – add concise prose, commands, diagrams (ASCII or links), tables, and examples.
4. **Verify quality** – ensure all links are valid, commands run, and terminology is explained.
5. **Output** – a single Markdown file ready for commit; if overly long, offer split documentation files with a main README linking to them.

## Mandatory Sections (in order)
- Project Header (name, tagline, badges)
- Overview (problem & features)
- Table of Contents
- Quick Start
- Prerequisites
- Installation
- Configuration
- Usage
- Architecture Overview
- Project Structure
- Development (dev setup, build, test, lint, debug)
- API Reference (if applicable)
- Testing
- Deployment
- Troubleshooting & FAQ
- Contributing
- License
- Acknowledgments (optional)

## Quick Reference
| Section | Key Elements |
|---------|--------------|
| Header | Title, tagline, badges |
| Overview | 2‑3 paragraph summary |
| Installation | Platform specific steps |
| Usage | CLI commands or API examples |
| Development | Build & test scripts |
| Contributing | PR process, style guide |

## Quality Checklist
- All commands run and are tested.
- No broken links; relative paths correct.
- Version numbers reflect current release.
- Examples compile/runnable.
- No placeholder text or “TBD” remains.
- Grammar/typo‑free.
- Technical terms defined or linked.

## Adaptation Rules
- Small projects: condense to Quick Start & Usage.
- Libraries/packages: emphasize API reference and install.
- APIs: prioritize endpoint docs and auth.
- CLI tools: focus on command options.
- Enterprise: add security, compliance sections.

---
