# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

AGENTS.md (imported above) is mandatory: English-only code/docs/commits, and source code and tests are synthesized by the local LLM MCP providers (`pumbastudio`, then `pumbalama`) before the host model writes anything itself.

## Commands

```bash
npm ci                 # install (CI and Docker both use npm ci)
npm run dev            # Vite dev server
npm run build          # tsc -b && vite build  -> dist/
npm run preview        # serve the production build locally
npm test               # vitest run (single pass, no watch)
npm run deploy         # build + firebase-tools deploy --only hosting
docker compose up --build   # nginx-served production build on http://localhost:8080
```

Single test file / single test:

```bash
npx vitest run src/context/contexts.test.tsx
npx vitest run src/components/sections/sections.test.tsx -t "renders HeroSection"
```

There is no lint script. Type checking is the gate: `npm run build` runs `tsc -b` with `strict`, `noUnusedLocals`, and `noUnusedParameters` over everything in `src/` — test files included — so an unused import in a test breaks the build.

## Architecture

Single-page React 19 + Vite + TypeScript + Tailwind 3 app with no router and no backend. It renders one bilingual (es/en) resume as a web page and as a downloadable PDF, both from the same data.

**Data flow — one source of truth:**

- `src/types/cv.ts` defines the shape: `CVContent` (resume content), `UILabels` (interface strings), `BilingualCVData`.
- `src/data/cvData.ts` exports `cvData` (`{ es, en }` resume content) and `uiLabels` (`{ es, en }` UI strings). All resume content and all web UI copy live here; components hold no copy of their own.
- `src/context/LanguageContext.tsx` selects the active slice and exposes `{ language, data, labels, toggleLanguage, setLanguage }` through `useLanguage()`. Initial language: `localStorage["cv_language"]`, else browser language, else `en`. It also syncs `document.documentElement.lang`.
- Every section in `src/components/sections/` and both layout components read from `useLanguage()` rather than receiving props. `App.tsx` only fixes the section order.

Consequence: a content change is an edit to `cvData.ts` in **both** `es` and `en`; a new field starts in `types/cv.ts`, then both locales, then the web section **and** the PDF document.

**PDF path (separate renderer):**

- `src/components/pdf/ResumePDFDocument.tsx` is a `@react-pdf/renderer` tree, not DOM: it uses `Document/Page/View/Text` with its own `StyleSheet`, so Tailwind classes and the web components do not apply. Brand colors are duplicated there as hex literals (matching `brand` in `tailwind.config.js`), and it uses the built-in Helvetica fonts.
- Its section headings are inline `language === 'es' ? … : …` ternaries, not `uiLabels` — the one place UI strings live outside `cvData.ts`.
- `PDFDownloadButton.tsx` builds the document on click with `pdf(doc).toBlob()` and downloads it as `CV_<Name>_<LANG>.pdf`. It takes `data`/`language` from context and passes them as props, since the PDF tree renders outside the React context.

**Tests:** Vitest with `globals: true` and jsdom (configured in `vite.config.ts`), colocated as `*.test.ts(x)`. `src/test/setup.ts` installs an in-memory `localStorage` mock, which language tests rely on. `cvData.test.ts` asserts both locales are complete.

**Not part of the app:** `src/agents/verifyLibraries.agent.ts` is a Node script (uses `fs`/`child_process`) that reports dependencies; nothing imports it, but it sits under `src/` and is therefore type-checked by the build.

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm test` → `npm run build` → deploy to the Firebase Hosting **live** channel (project `curriculum-88377`). A commit on `main` is a production release.
- `firebase.json` serves `dist/` with an SPA rewrite to `/index.html`; the Docker image serves the same build through `nginx.conf`.
- CI builds on Node 20, the Dockerfile on Node 22.

## Repository notes

- `docs/superpowers/` holds the original design spec and implementation plan for the portfolio.
- `AGENTS.md`, `.agents/`, `Agents/`, `skills/`, and `opencode.json` are agent tooling configuration, not application code.
