# Real Madrid Website

A React + Vite single-page app for Real Madrid content.

Live: Deployed on Vercel (update with your URL)

## Stack
- React 18, React Router
- Vite
- styled-components
- Axios
- Vitest + Testing Library (jsdom)
- ESLint

## Getting started
Prerequisites: Node.js 20+, npm

Install deps:
```bash
npm i
```

Start dev server:
```bash
npm run dev
```
Vite defaults to http://localhost:5173

## Scripts
- dev: start Vite dev server
- build: production build
- preview: preview production build locally
- lint: run ESLint
- test: run tests once
- test:watch: run tests in watch mode
- coverage: run tests with coverage

## Testing
- Framework: Vitest (jsdom)
- Setup file: `src/test/setup.js`
- Example tests: `src/__tests__/`

Run tests:
```bash
npm run test
```

## CI
GitHub Actions workflow runs lint, tests, and build on push/PR (`.github/workflows/ci.yml`).

## Deployment (Vercel)
- Vercel builds with `npm run build`
- SPA routing is enabled via `vercel.json` rewrite to `index.html`
- GitHub Pages is no longer used

## Project structure (high-level)
- `src/components/` UI components
- `src/pages/` routed pages
- `src/__tests__/` unit/integration tests
- `src/test/setup.js` testing setup
- `public/` static assets

## Notes
- If you change the repo or domain, no Vite `base` is required for Vercel.
- Update the "Live" URL above once confirmed.
 ----