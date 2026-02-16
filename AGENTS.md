# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro theme workspace. Main app code lives in `src/`: routes in `src/pages/`, reusable UI in `src/components/`, shared shells in `src/layouts/`, and content collections in `src/content/` (`blog/` and `docs/`). Static files that ship directly are in `public/`. The reusable package source is in `packages/pure/` (components, plugins, schemas, utilities). Deployment automation is in `.github/workflows/deploy.yml`.

## Build, Test, and Development Commands
Use Bun for local workflows.

- `bun install`: install dependencies.
- `bun dev`: start local Astro dev server.
- `bun run build`: run `astro-pure check`, `astro check`, then production build.
- `bun preview`: preview the built site locally.
- `bun run check`: run Astro type/content checks.
- `bun run lint`: lint `src/**/*.{js,ts,jsx,tsx,astro}` with ESLint.
- `bun run format`: format JS/TS/MD/MDX/Astro files with Prettier.
- `bun pure new`: scaffold a new post/content entry.

## Coding Style & Naming Conventions
Formatting is enforced with Prettier and linting with ESLint (`eslint-plugin-astro`). Follow: 2-space indentation, single quotes, no semicolons, max line width 100, UTF-8, and LF line endings. Keep Astro components/layouts in PascalCase (for example, `BaseLayout.astro`), and prefer descriptive, lowercase/kebab-case names for content folders (for example, `src/content/blog/my-post/index.md`).

## Testing Guidelines
There is no dedicated unit-test framework in this repo yet. Treat checks as required quality gates: run `bun run check`, `bun run lint`, and `bun run build` before opening a PR. For route/content changes, smoke-test in `bun dev` and verify affected dynamic routes (for example, blog pagination and tag pages) render correctly.

## Commit & Pull Request Guidelines
Use Conventional Commits going forward: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`. Example: `feat: add sponsor section to projects page`. Keep commits focused and atomic. PRs should include a clear summary, linked issue(s) when relevant, screenshots for UI/content changes, and confirmation that check/lint/build commands passed locally.

## Security & Configuration Tips
Do not commit secrets or tokens; use environment variables for integration keys. Keep deployment-facing changes compatible with `.github/workflows/deploy.yml` (GitHub Pages via Astro action).
