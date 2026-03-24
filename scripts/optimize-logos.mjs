// scripts/optimize-logos.mjs
import sharp    from 'sharp';
import { statSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// ─── CONFIG ────────────────────────────────────────────────────────────────
// soundtrip_logo*.png. Displayed at h-8 (32px CSS) in Navbar/Footer.
const logos = [
  {
    src:  'public/original/soundtrip_logo.png',
    webp: 'public/images/soundtrip_logo.webp',
    png:  'public/images/soundtrip_logo.png',
    cssH: 40,
  },
  {
    src:  'public/original/soundtrip_logo_white.png',
    webp: 'public/images/soundtrip_logo_white.webp',
    png:  'public/images/soundtrip_logo_white.png',
    cssH: 32,
  },
];
// ─── END CONFIG ─────────────────────────────────────────────────────────────

for (const logo of logos) {
  const meta    = await sharp(logo.src).metadata();
  const targetH = logo.cssH * 2;
  const targetW = Math.round(targetH * (meta.width / meta.height));

  mkdirSync(dirname(logo.webp), { recursive: true });

  const hasAlpha = meta.channels === 4;

  await sharp(logo.src)
    .resize(targetW, targetH)
    .webp(hasAlpha ? { lossless: true } : { quality: 85 })
    .toFile(logo.webp);

  await sharp(logo.src)
    .resize(targetW, targetH)
    .png({ compressionLevel: 9 })
    .toFile(logo.png);

  const origKB = Math.round(statSync(logo.src).size / 1024);
  const webpKB = Math.round(statSync(logo.webp).size / 1024 * 10) / 10;
  const pngKB  = Math.round(statSync(logo.png).size  / 1024 * 10) / 10;
  const saving = Math.round((1 - webpKB / origKB) * 100);

  console.log(`${logo.src}`);
  console.log(`  original : ${origKB} KB  (${meta.width}×${meta.height})`);
  console.log(`  webp     : ${webpKB} KB  (${targetW}×${targetH})  −${saving}%`);
  console.log(`  png      : ${pngKB} KB`);
}
