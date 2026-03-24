# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR (Vite)
npm run build      # TypeScript check + production build (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

SoundTrip is a single-page React app for booking music travel experiences (events + transport + accommodation). It is a frontend-only template with hardcoded mock data — no backend or API integration.

**Entry point flow:** `index.html` → `src/main.tsx` → `src/App.tsx`

**App composition:** `App.tsx` wraps the entire app in `CartProvider` and renders a vertical stack of standalone section components in order:
`Navbar → Hero → EventSearch → FeaturedEvents → MusicDestinations → HowItWorks → TravelExperiences → Testimonials → Contact → Footer → CartDrawer`

Each section in `src/sections/` is self-contained. Event data is hardcoded as a local array inside `FeaturedEvents`.

**State management:** React Context API via `src/context/CartContext.tsx`. The `useCart()` hook exposes cart items, add/remove/quantity functions, totals, and drawer open state. No external state library.

**UI layer:** shadcn/ui components (in `src/components/ui/`) built on Radix UI primitives with Tailwind CSS utility classes. Use the `cn()` utility from `src/lib/utils.ts` to merge classNames. Theming uses CSS variables with class-based dark mode. Price formatting uses `es-AR` locale.

**Path alias:** `@/` maps to `src/` — use it for all internal imports.

**Responsive strategy:** Mobile-first with Tailwind breakpoints. Grids go 1 col (mobile) → 2 col (md) → 4 col (xl). Navbar has a hamburger menu for mobile.
