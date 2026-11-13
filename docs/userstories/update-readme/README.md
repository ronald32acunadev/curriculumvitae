# Backlog: Update and Bootstrap Project README Documentation

Feature Name: `update-readme`  
Path: `docs/userstories/update-readme/README.md`  
Status: Pending Approval  

---

## Executive Summary

The repository currently lacks any root `README.md` or companion language files. The application is a bilingual (English / Spanish) single-page Curriculum Vitae and portfolio built with React 19, TypeScript, Vite, Tailwind CSS, and `@react-pdf/renderer`, deployed to Firebase Hosting and containerized with Docker/Nginx.

This backlog defines the creation of a comprehensive, verified `README.md` (English) following Archetype C (Web Application), along with a companion `README.es.md` (Spanish) synchronized with cross-language navigation.

---

## User Stories

### US-01: Bootstrap English `README.md`

- **Statement**: As a developer or contributor exploring or onboarding to `curriculumvitae`, I want a clear, comprehensive, and grounded English `README.md`, so that I understand the application architecture, data flow, setup instructions, testing commands, and deployment workflows without ambiguity.
- **Scope**:
  - Web Application Archetype blueprint from `.agents/skills/update-readme/references/archetypes-and-checklists.md`.
  - Core overview and value proposition.
  - Architecture breakdown: single source of truth (`src/data/cvData.ts`, `src/types/cv.ts`), React Context (`LanguageContext`), client-side PDF rendering (`@react-pdf/renderer`), and UI sections.
  - Verified local development commands (`npm ci`, `npm run dev`, `npm run build`, `npm run preview`, `npm test`, `npm run deploy`).
  - Containerization via Docker (`docker compose up --build`) on port 8080.
  - CI/CD and deployment documentation (GitHub Actions, Firebase Hosting `curriculum-88377`).
  - License reference (`LICENSE`).
- **Exclusions**:
  - No hallucinated commands (e.g. no lint script, as type-checking is enforced via `tsc -b`).
  - No backend/database sections since the application is strictly client-side.
- **Dependencies**: None.
- **Status**: Pending

#### Acceptance Criteria

- **US-01 / AC-01 (Header & Navigation)**: `README.md` begins with `# Curriculum Vitae`, a language switcher linking `[English](README.md) · [Español](README.es.md)`, and accurate metadata badges (license, React, Vite, TypeScript, Tailwind CSS).
- **US-01 / AC-02 (Architecture & Ground Truth)**: Accurately documents the dual-format architecture (Web DOM + React-PDF canvas) sourced from `src/data/cvData.ts` and managed via `LanguageContext`, referencing actual repository paths.
- **US-01 / AC-03 (Verified Commands)**: Documents strictly the scripts defined in `package.json` (`dev`, `build`, `preview`, `test`, `deploy`) and Docker Compose configuration (`docker compose up --build` mapping port 8080:80).
- **US-01 / AC-04 (Link & File Validity)**: All markdown file links (`LICENSE`, `docker-compose.yml`, `package.json`, source references) point to existing files with zero broken anchors or dead paths.

---

### US-02: Create Companion Spanish `README.es.md`

- **Statement**: As a Spanish-speaking developer or reviewer, I want a complete Spanish translation (`README.es.md`) synchronized with `README.md`, so that I can understand and operate the project in my native language.
- **Scope**:
  - Full natural Spanish translation of `README.md` content following professional neutral Spanish for technical documentation.
  - Language switcher linking `[English](README.md) · [Español](README.es.md)`.
  - Identical section hierarchy, code snippets, file paths, and command signatures.
- **Dependencies**: US-01.
- **Status**: Pending

#### Acceptance Criteria

- **US-02 / AC-01 (Structural Parity)**: `README.es.md` contains the exact same sections, code snippets, commands, and links as `README.md`.
- **US-02 / AC-02 (Language Switcher Synchronization)**: Both `README.md` and `README.es.md` link to each other symmetrically at the top.
- **US-02 / AC-03 (Accurate Technical Terminology)**: Uses standard Spanish technical terms while preserving verbatim CLI commands, environment variables, and code paths in English.

---

## QA Evidence and Traceability Matrix

| Story / criterion or change-related regression risk | Test file and test name, or reproducible manual procedure | Observed result and evidence |
| :--- | :--- | :--- |
| `US-01 / AC-01` | Verify file existence, H1 header, and language switch anchor in `README.md` | Pending approval and execution |
| `US-01 / AC-02` | File inspection against `src/data/cvData.ts`, `src/types/cv.ts`, and `src/components/pdf/ResumePDFDocument.tsx` | Pending approval and execution |
| `US-01 / AC-03` | Script validation against `package.json` and `docker-compose.yml` | Pending approval and execution |
| `US-01 / AC-04` | Link checking script / verification of referenced relative paths | Pending approval and execution |
| `US-02 / AC-01` | Structural heading comparison between `README.md` and `README.es.md` | Pending approval and execution |
| `US-02 / AC-02` | Symmetrical language switcher verification across both files | Pending approval and execution |
| `US-02 / AC-03` | Verification of untranslated code blocks and paths in `README.es.md` | Pending approval and execution |
