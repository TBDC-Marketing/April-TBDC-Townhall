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
- **Slides**: 9 slides covering April Town Hall content for TBDC
  1. Context & Purpose (navy)
  2. Workversaries (warm white)
  3. Budgeting Process (navy)
  4. Operating Principles (sand)
  5. Space Audit (navy)
  6. Sprint Week Retro (warm white)
  7. Scout Reports (sand)
  8. Lunch & Learn (navy)
  9. Closing Q&A (warm white)
- **Navigation**: Arrow keys, click, touch swipe — managed by slides artifact routing system
- **Manifest**: `src/data/slides-manifest.json`
