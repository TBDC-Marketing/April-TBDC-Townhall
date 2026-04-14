# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### April Town Hall (`artifacts/april-town-hall`)
- **Kind**: Slides (React + Vite + Tailwind CSS)
- **Preview path**: `/` (root)
- **Stack**: React, Vite, lucide-react, Google Fonts (Plus Jakarta Sans, Instrument Serif, Inter, JetBrains Mono)
- **Slides**: 12 slides covering April Town Hall content for TBDC
  1. Context & Purpose (navy)
  2. Workversaries (warm white) — 5 team members with profile photos, names, and year counts
  3. Operating Principles (sand)
  4. How We Show Up as a Team (navy)
  5. Raising the Bar (sand)
  6. Open Office Hours with Ange (navy)
  7. Space Audit (navy)
  8. Sprint Week Retro (warm white)
  9. Scout Reports (sand)
  10. Next 60–90 Day Focus (warm white)
  11. Lunch & Learn (navy)
  12. Closing Q&A (warm white)
- **Navigation**: SPA-style — state-driven (no routing), keyboard shortcuts (arrows, space, F, T, Home/End, 1-9), progress bar, TOC overlay, fullscreen toggle
- **Manifest**: `src/data/slides-manifest.json`
- **Profile photos**: Imported via `@assets` Vite alias (bundled into build output for GitHub Pages compatibility)
- **GitHub Pages**: Deployed via `.github/workflows/deploy.yml` — triggers on push to `main`
