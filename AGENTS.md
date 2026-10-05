# Everlight Homes — Base44 Dev Environment

## Overview
Modern real estate platform (React + Vite + TypeScript + Tailwind CSS). Frontend-only app with mock data — no backend or database.

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Vite dev server on port 3000 (hot reload enabled)
- Node 22 slim image, deps installed on container startup via `npm install`
- Source bind-mounted at `/app`; edits appear via HMR

## Key details
- **Vite host restriction**: `allowedHosts: true` is set in `vite.config.ts` — required for the preview proxy. Do not remove.
- **Images**: All property/section images use verified Unsplash photo IDs. If an image 404s, replace the photo ID in `src/data/properties.ts` or the relevant section file.
- **Favorites**: Stored in `localStorage` under key `everlight-favorites`. No backend persistence.
- **Routing**: React Router v6 with 7 routes (Home, Properties, Property Details, About, Services, Contact, Favorites) + 404.

## Project structure
- `src/components/` — Reusable UI components (Header, Footer, PropertyCard, FilterPanel, etc.)
- `src/sections/` — Home page sections (Hero, TrustFeatures, FeaturedProperties, WhyChooseUs)
- `src/pages/` — Route pages
- `src/data/properties.ts` — 15 mock properties with valid Unsplash images
- `src/context/FavoritesContext.tsx` — Favorites state with localStorage persistence
- `src/components/icons.tsx` — Custom SVG icon set (no icon library dependency)

## Tech stack
- React 18, React Router 6, Vite 5, Tailwind CSS 3, TypeScript 5
- No external API dependencies — all data is mock/local
