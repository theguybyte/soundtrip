/**
 * Generates public/og-image.jpg — 1200×630 branded OG card.
 * Run: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;
const PRIMARY = '#8249df';
const DARK_STRIP = '#5c2fa0';

// 1. Resize white logo to fit inside 520×128
const logoPath = join(root, 'public/original/soundtrip_logo_white.png');
const logoResized = await sharp(logoPath)
  .resize({ width: 520, height: 128, fit: 'inside' })
  .png()
  .toBuffer();

const logoMeta = await sharp(logoResized).metadata();
const logoW = logoMeta.width;
const logoH = logoMeta.height;

// Center logo horizontally, ~38% from top
const logoLeft = Math.round((WIDTH - logoW) / 2);
const logoTop = Math.round(HEIGHT * 0.28 - logoH / 2);

const taglineY = logoTop + logoH + 52;
const stripH = 72;

// 2. SVG: background + bottom strip + text
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#9b6ae8"/>
      <stop offset="100%" stop-color="${PRIMARY}"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="${HEIGHT - stripH}" width="${WIDTH}" height="${stripH}" fill="${DARK_STRIP}"/>
  <text
    x="${WIDTH / 2}" y="${taglineY}"
    font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="600"
    fill="white" fill-opacity="0.92" text-anchor="middle" dominant-baseline="hanging"
  >Viaja. Escucha. Vive.</text>
  <text
    x="${WIDTH / 2}" y="${taglineY + 58}"
    font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="400"
    fill="white" fill-opacity="0.72" text-anchor="middle" dominant-baseline="hanging"
  >Paquetes de viaje a conciertos y festivales</text>
  <text
    x="${WIDTH / 2}" y="${HEIGHT - stripH / 2}"
    font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="500"
    fill="white" fill-opacity="0.85" text-anchor="middle" dominant-baseline="middle"
    letter-spacing="2"
  >soundtrip.com.ar</text>
</svg>
`.trim();

// 3. Composite SVG + logo → JPEG
await sharp(Buffer.from(svg))
  .composite([{ input: logoResized, top: logoTop, left: logoLeft }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(join(root, 'public/og-image.jpg'));

console.log(`✓ OG image generated: public/og-image.jpg (${WIDTH}×${HEIGHT})`);
