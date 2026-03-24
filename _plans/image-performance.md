# Plan: Image Performance — Lazy Loading, WebP, and Skeleton Placeholders

## Context
The project has 29 JPG images served from `/public/` with no WebP alternatives, no lazy loading, no skeleton states, and no `<picture>` elements. Every image loads eagerly at page init, hurting LCP and bandwidth. This plan adds WebP conversion, a reusable `LazyImage` component with skeleton UI, and applies it across all 5 image sites in the codebase.

---

## Step 1 — Install `sharp` and write conversion script

Install `sharp` as a devDependency:
```bash
npm install -D sharp
```

Create `app/scripts/convert-to-webp.mjs`:
- Read all `.jpg` / `.jpeg` / `.png` files from `public/`
- Use `sharp` to convert each to `.webp` (quality 82, effort 6) alongside the original
- Output: `/public/producto-remera.webp`, `/public/galeria-01.webp`, etc.
- Skip if `.webp` already exists (idempotent)

Add script to `package.json`:
```json
"webp": "node scripts/convert-to-webp.mjs"
```

Run once: `npm run webp`

---

## Step 2 — Create `LazyImage` component

**File:** `src/components/LazyImage.tsx`

Props:
```ts
{ src: string; alt: string; className?: string; eager?: boolean }
```

Behavior:
- Derives WebP path by replacing extension: `/foo.jpg` → `/foo.webp`
- Renders `<picture>` with `<source srcSet="{webp}" type="image/webp">` + `<img>` fallback
- Adds `loading="lazy"` unless `eager={true}` (Hero uses eager)
- Adds `fetchPriority="high"` when `eager={true}` (LCP optimization)
- Manages `loaded` state via `onLoad`; shows skeleton overlay until image loads
- Skeleton: `absolute inset-0 bg-[#1a1a1e] animate-pulse` — hidden after load via opacity transition

---

## Step 3 — Apply `LazyImage` in each component

### `HeroSection.tsx` (line 121)
- Replace `<img>` with `<LazyImage ... eager={true} />`
- No skeleton (LCP element, above the fold)

### `ProductsSection.tsx` (line 117)
- Replace `<img>` with `<LazyImage src={product.image} alt={product.name} className="..." />`
- Skeleton fits naturally inside the existing `aspect-square bg-[#1a1a1e]` container

### `CollectionSection.tsx` (line 126)
- Replace `<img>` with `<LazyImage src={item.image} alt={item.title} className="..." />`

### `GallerySection.tsx` (line 102)
- Replace `<img>` with `<LazyImage src={item.image} alt={item.alt} className="..." />`

### `CartDrawer.tsx` (line 80)
- Replace `<img>` with `<LazyImage ... />` — lazy, no skeleton (small thumbnail)

---

## Critical Files

| File | Change |
|------|--------|
| `app/scripts/convert-to-webp.mjs` | New — conversion script |
| `app/package.json` | Add `sharp` devDep + `webp` script |
| `app/src/components/LazyImage.tsx` | New — reusable component |
| `app/src/sections/HeroSection.tsx` | Use LazyImage (eager) |
| `app/src/sections/ProductsSection.tsx` | Use LazyImage (lazy) |
| `app/src/sections/CollectionSection.tsx` | Use LazyImage (lazy) |
| `app/src/sections/GallerySection.tsx` | Use LazyImage (lazy) |
| `app/src/components/CartDrawer.tsx` | Use LazyImage (lazy) |

---

## Verification

1. Run `npm run webp` — confirm `.webp` files appear in `public/` alongside JPGs
2. Run `npm run dev` — open DevTools → Network tab, filter by Img
   - Verify browser fetches `.webp` (not `.jpg`) in Chrome/Edge
   - Scroll down → confirm gallery/product images load on demand (lazy)
3. Throttle to Slow 3G → confirm skeleton appears while images load
4. Run `npm run build` — confirm no TypeScript errors
