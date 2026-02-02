# AGENTS

This file is for agentic coding tools working in this repo.
It summarizes how to build, lint, test, and follow local style.

## Project summary

- Stack: Nuxt 4, Vue 3, Tailwind CSS, Nuxt Content, Vite.
- Language: TypeScript in Vue SFCs (`<script setup lang="ts">`).
- Tests: Vitest with Nuxt test utils.
- Lint: ESLint + Stylelint + Prettier.
- Node: >= 24 (`package.json` engines).

## Key directories

- `app/` Nuxt app source (components, pages, assets).
- `content/` content entries for Nuxt Content.
- `public/` static assets.
- `test/` unit tests (Vitest).
- `dist/` generated output (do not edit manually).

## Install

- `npm install`

## Dev / build / preview

- `npm run dev` starts Nuxt dev server (default localhost:3000).
- `npm run build` builds server output.
- `npm run generate` builds static output in `dist/`.
- `npm run preview` previews a production build.

## Linting and formatting

- `npm run lint` runs ESLint + Stylelint + Prettier check.
- `npm run lint:js` runs ESLint on `.js,.vue,.ts`.
- `npm run lint:style` runs Stylelint on CSS/SCSS/Sass/HTML/Vue.
- `npm run lint:prettier` runs Prettier check.
- `npm run lintfix` runs Prettier write, ESLint fix, Stylelint fix.

### Linting a single file

- ESLint: `ESLINT_USE_FLAT_CONFIG=false npx eslint --ext ".js,.vue,.ts" path/to/file.vue`
- Stylelint: `npx stylelint "path/to/file.vue"`
- Prettier: `npx prettier --check "path/to/file.vue"`

## Tests

- `npm run test` runs `vitest run`.
- Coverage uses v8 and includes `components/**/*.vue` and `pages/**/*.vue`.

### Run a single test

- By file: `npm run test -- path/to/file.test.ts`
- By file (direct): `npx vitest run path/to/file.test.ts`
- By name: `npx vitest run -t "test name"`
- Watch mode: `npx vitest`

## Lighthouse CI

- `npm run lhci:mobile`
- `npm run lhci:desktop`

## Git hooks and commit messages

- Husky runs `lint-staged` on pre-commit (`.husky/pre-commit`).
- Lint-staged runs ESLint on staged `.js/.ts/.vue` files.
- Lint-staged runs Stylelint on staged styles and Vue files.
- Lint-staged runs Prettier check on all staged files.
- Commit messages follow Conventional Commits via `commitlint.config.js`.

## Cursor/Copilot rules

- None found in `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md`.

## Code style and conventions

- Prettier: no semicolons, single quotes, print width 120.
- ESLint: Vue parser, multi-word component names allowed.
- Stylelint: standard + recommended-vue defaults.
- Use `<script setup lang="ts">` in Vue SFCs.
- Keep templates and script blocks compact and readable.
- Prefer Tailwind utilities over custom CSS.

### Imports

- Use path aliases from `jsconfig.json`: `@/` and `~/` (also `@@/`, `~~/`).
- Import order (recommended): external deps, Nuxt/Vue, internal aliases, assets.
- For SVGs, use the Vite SVG loader pattern: `import Icon from '@/assets/icons/x.svg?component'`.

### Naming

- Vue component files use PascalCase (e.g., `ProfileCard.vue`).
- Components in templates are PascalCase (auto-imported by Nuxt).
- Composables use `useX` naming (`useAsyncData`, `useHead`).
- CSS class names are Tailwind utilities; custom selectors should be minimal.

### Types

- Prefer explicit types for props and functions.
- Avoid `any` where possible; narrow types and use `Record` or interfaces.
- When using `useAsyncData`, treat `data` as a ref and handle `undefined`.

### Error handling and null safety

- Guard async content and optional fields (`page.value?.title`).
- Avoid assuming content exists; use `v-if` or default values.
- Keep error handling close to async boundaries (loaders, fetches).

### Vue/Nuxt patterns

- Use `useHead` for page metadata.
- Use `@nuxt/content` queries for content data (`queryContent`).
- Components are auto-imported; avoid manual registration unless needed.
- Global CSS is `@/assets/css/tailwind.scss` (see `nuxt.config.ts`).

### Tailwind and styles

- Tailwind is configured in `tailwind.config.ts` with `darkMode: 'media'`.
- SCSS is allowed; use `@apply` sparingly for repeated patterns.
- Keep component `<style>` blocks scoped to component concerns.

## Testing guidelines

- Prefer small, focused tests and deterministic selectors.
- For Vue components, use `@vue/test-utils` and Nuxt test utils.
- Keep tests colocated in `test/` unless convention changes.

## Build/CI notes

- Netlify build uses `npm run generate` (`netlify.toml`).
- Lighthouse CI uses `npm run generate && npm run preview` (`lighthouserc.json`).

## When editing

- Do not reformat unrelated files.
- Follow existing patterns in the file you touch.
- Keep changes minimal and consistent with current styling.

## Helpful commands

- List scripts: `npm run`
- Clean install: `rm -rf node_modules package-lock.json && npm install`
- Rebuild Nuxt artifacts: `npm run build`

## Notes for agents

- This repo is a Nuxt app; avoid direct DOM manipulation.
- Prefer composition API and `script setup`.
- Use `defineProps` and `defineEmits` for component contracts.
- Keep server-only logic out of client components unless required.
- If you add new config or tooling, update this file.

## File locations

- ESLint config: `.eslintrc.js`
- Prettier config: `.prettierrc`
- Stylelint config: `stylelint.config.js`
- Vitest config: `vitest.config.mts`
- Nuxt config: `nuxt.config.ts`
- Tailwind config: `tailwind.config.ts`
- Husky hooks: `.husky/`
- Lint-staged: `.lintstagedrc.js`
- Commitlint: `commitlint.config.js`
- Aliases: `jsconfig.json`

## If something is unclear

- Prefer the shortest change that matches existing usage.
- Ask for clarification only if a decision changes public behavior.
- Document new conventions in `AGENTS.md`.
