# AGENTS.md

## Purpose
This file gives agents a concise, high‑signal guide for interacting with the **Curriculum Vitae** repository.

Agents should read this before doing anything – it contains the *exact* commands they will need and any quirks that are not obvious from filenames alone.

---

## Development Environment

| Task | Command | Notes |
|------|---------|-------|
| Start dev server (hot reload) | `npm run dev` | Runs Vite – serves at http://localhost:5173 by default. |
| Compile TypeScript & bundle for production | `npm run build` | Invokes `tsc -b && vite build`. Produces a `dist/` directory and a `vite-ssg.manifest.json` if needed. |
| Preview the production build locally | `npm run preview` | Starts Vite in preview mode, useful for inspecting the bundle before deployment. |
| Run all unit tests | `npm test` | Equivalent to `vitest run`. Uses globals and jsdom environment defined in `vite.config.ts`; setup file at `src/test/setup.ts` mocks `localStorage` & `matchMedia`. |
| Run a single test file | `vitest run path/to/file.test.ts` or `npx vitest run ...` | Useful when debugging failing tests. |
|

## Testing Details

- **Framework**: Vitest (configured in `vite.config.ts`).
- **Environment**: jsdom with global imports from Jest DOM.
- **Setup file**: `src/test/setup.ts` provides:
  - A mock of `localStorage` that persists for the test run.
  - A stubbed `window.matchMedia` returning `{ matches: false }`.
- **Test files** are located next to the code they exercise (e.g. `src/data/cvData.test.ts`).
- If a test fails, you can debug with:
  ```bash
  vitest run src/data/cvData.test.ts --inspect-brk
  ```
  which attaches the Node debugger.

## Deployment Pipeline

| Step | Command | Context |
|------|---------|---------|
| Local deployment (manual) | `npm run deploy` | Builds and runs `firebase-tools deploy --only hosting`. Requires Firebase CLI authentication (`firebase login`) or a service‑account JSON set in the environment under `FIREBASE_SERVICE_ACCOUNT_CURRICULUM_88377` for CI. |
| GitHub Actions | See `.github/workflows/deploy.yml` – triggers on pushes to `main`, runs `npm ci`, `npm test`, `npm run build`, then deploys via Firebase CLI using the secret mentioned above. |
|

> **Important**: The repository is configured for *single‑package* usage; there are no workspaces or monorepo boundaries.

---

## Quick Reference

- **Start dev**: `npm run dev`
- **Install dependencies** (once): `npm install` or `npm ci` if you prefer a clean install
- **Login to Firebase CLI** (only once for local deploy): `npx firebase login`
- **Run tests**: `npm test` | `vitest run <file>`
- **Build**: `npm run build`
- **Deploy locally**: `npm run deploy`
    - Requires Firebase CLI authentication (`firebase login`) or the environment variable `FIREBASE_SERVICE_ACCOUNT_CURRICULUM_88377`. The command builds the app and deploys to Firebase Hosting.
- **Preview built app**: `npm run preview`
   - Serves the compiled bundle locally for inspection.

These commands are the only ones that agents should need to invoke.  All other scripts or tools are internal details.

---

## Context Constraints & Ignored Paths (Local LLM Performance)

When working on this repository, strictly avoid reading or loading context from the following noisy directories and files:
- `node_modules/`, `dist/`, `dist-ssr/`, `.firebase/`, `.git/`
- `package-lock.json` (inspect `package.json` instead)
- `public/` (static binary assets, icons, fonts)
- Any `*.tsbuildinfo`, `*.docx`, image, or bundle artifact

Focus your attention strictly on `src/` and relevant configuration files (`package.json`, `tsconfig*.json`, `vite.config.ts`, `tailwind.config.js`). Keep prompt context concise to ensure fast local inference.
