# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

- Install deps: npm install
- Start dev server: npm run dev
- Build production bundle: npm run build
- Preview local production build: npm run preview
- Lint JS/JSX: npm run lint
- Deploy to GitHub Pages: npm run deploy
  - Note: Vite’s default output directory is dist, while the deploy script publishes build. Either set build.outDir to "build" in vite.config.js or change the deploy script to gh-pages -d dist.
- Tests: no test runner is configured in this repo.

## Architecture overview

- Tooling: React 18 + Vite with @vitejs/plugin-react. Minimal Vite setup with HMR and ESLint (see README.md).
- Entry points:
  - index.html mounts the app at #root and loads /src/main.jsx.
  - src/main.jsx wraps <App/> in <BrowserRouter/>.
- App shell and routing:
  - src/App.jsx defines all routes using react-router-dom v6. The fixed NavBar renders above route content; Footer renders below. Many routes point to feature pages under src/pages and news posts.
- UI composition:
  - Components live under src/components (e.g., NavBar, Footer, PostNews, Tour). Styles are plain CSS files colocated with components plus global styles in src/index.css.
  - Shared templates under src/Templates (e.g., RealLogoTopSection) provide reusable layout sections.
- Data-driven navigation and content:
  - Static data (menu items, posts, sponsors) resides in top-level data/* and is consumed by components (e.g., NavBar/Modal uses data/NavBar/NavData.js; home and first-team sections use data/PostNews/* and data/FirstTeam/*).
- Assets:
  - src/assets aggregates images/video in assets.js and other subfolders (e.g., HomePageImages, footerImages). Components import from these modules rather than referencing files directly.
- Build/config:
  - vite.config.js enables the React plugin. package.json sets homepage for GitHub Pages and defines scripts for dev/build/lint/preview/deploy.
