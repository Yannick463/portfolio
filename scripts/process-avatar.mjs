import sharp from "sharp";
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Generates portrait cutouts from public/imagem.png.
 *
 * Background removal:
 * 1. Edge flood-fill for near-black background
 * 2. Foreground mask from high-confidence seeds (skin, highlights, shoes)
 * 3. Glow flood-fill from edges, stopped at the foreground mask
 *
 * For a perfect cutout, replace public/avatar-yannick-cutout.png manually
 * (Photoshop, Canva, remove.bg, etc.).
 */

const root = join(import.meta.dirname, "..");
const input = join(root, "public", "imagem.png");
const backupOutput = join(root, "public", "avatar-yannick.png");
const cutoutOutput = join(root, "public", "avatar-yannick-cutout.png");

if (!existsSync(input)) {
  console.error("Missing input:", input);
  process.exit(1);
}

function idx(x, y, width) {
  return y * width + x;
}

function readRgb(data, i) {
  const o = i * 4;
  return { r: data[o], g: data[o + 1], b: data[o + 2] };
}

function isNearBlack(r, g, b) {
  return Math.max(r, g, b) <= 20;
}

function isGlowBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const spread = max - min;

  if (isNearBlack(r, g, b)) return true;
  if (max <= 105 && r <= 24 && b >= r + 6 && spread >= 10) return true;
  if (r <= 12 && g >= 42 && b >= 65 && max <= 160) return true;

  return false;
}

function isForegroundSeed(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const spread = max - min;

  if (max >= 110) return true;
  if (spread >= 55) return true;
  if (r >= 80 && g >= 55 && b >= 35 && r >= g) return true;
  if (r >= 140 && g >= 130 && b >= 120) return true;
  if (max >= 62 && spread >= 38) return true;

  return false;
}

function neighbors8(x, y) {
  return [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
    [x - 1, y - 1],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
  ];
}

function floodFromEdges(width, height, data, isMatch, blocked) {
  const n = width * height;
  const mask = new Uint8Array(n);
  const queue = [];

  const trySeed = (x, y) => {
    const i = idx(x, y, width);
    if (blocked?.[i]) return;
    const { r, g, b } = readRgb(data, i);
    if (isMatch(r, g, b)) {
      mask[i] = 1;
      queue.push(i);
    }
  };

  for (let x = 0; x < width; x++) {
    trySeed(x, 0);
    trySeed(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    trySeed(0, y);
    trySeed(width - 1, y);
  }

  while (queue.length > 0) {
    const i = queue.pop();
    const x = i % width;
    const y = (i / width) | 0;

    for (const [nx, ny] of neighbors8(x, y)) {
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const ni = idx(nx, ny, width);
      if (mask[ni] || blocked?.[ni]) continue;
      const { r, g, b } = readRgb(data, ni);
      if (isMatch(r, g, b)) {
        mask[ni] = 1;
        queue.push(ni);
      }
    }
  }

  return mask;
}

function buildForegroundMask(width, height, data) {
  const n = width * height;
  let fg = new Uint8Array(n);

  for (let i = 0; i < n; i++) {
    const { r, g, b } = readRgb(data, i);
    if (isForegroundSeed(r, g, b)) fg[i] = 1;
  }

  for (let pass = 0; pass < 56; pass++) {
    const next = new Uint8Array(fg);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = idx(x, y, width);
        if (fg[i]) continue;

        let touchesFg = false;
        for (const [nx, ny] of neighbors8(x, y)) {
          if (fg[idx(nx, ny, width)]) {
            touchesFg = true;
            break;
          }
        }
        if (!touchesFg) continue;

        const { r, g, b } = readRgb(data, i);
        if (isNearBlack(r, g, b) || isGlowBackground(r, g, b)) continue;
        next[i] = 1;
      }
    }
    fg = next;
  }

  return fg;
}

function featherAlpha(data, width, height, fgMask) {
  const n = width * height;
  const alpha = new Float32Array(n);

  for (let i = 0; i < n; i++) {
    alpha[i] = fgMask[i] ? 1 : 0;
  }

  const blurred = new Float32Array(n);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = idx(x, y, width);
      let sum = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          sum += alpha[idx(x + dx, y + dy, width)];
        }
      }
      blurred[i] = sum / 9;
    }
  }

  for (let i = 0; i < n; i++) {
    const o = i * 4;
    if (fgMask[i]) {
      const edge = blurred[i] < 0.98;
      data[o + 3] = edge ? Math.round(Math.min(1, blurred[i] + 0.06) * 255) : 255;
    } else {
      data[o + 3] = 0;
    }
  }
}

function applyCutout(data, width, height) {
  const fgMask = buildForegroundMask(width, height, data);
  const removeMask = floodFromEdges(width, height, data, isGlowBackground, fgMask);

  const n = width * height;
  for (let i = 0; i < n; i++) {
    if (removeMask[i]) fgMask[i] = 0;
  }

  featherAlpha(data, width, height, fgMask);
}

async function writePng(data, info, target) {
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(target);
}

const rotated = await sharp(input).rotate(-90).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { data, info } = rotated;

applyCutout(data, info.width, info.height);

await writePng(data, info, backupOutput);
await writePng(data, info, cutoutOutput);

const meta = await sharp(cutoutOutput).metadata();
const stats = await sharp(cutoutOutput).stats();

console.log(`Created ${cutoutOutput} (${meta.width}x${meta.height})`);
console.log(`Backup ${backupOutput}`);
console.log(`Alpha channel: ${meta.hasAlpha ? "yes" : "no"}`);
console.log(`Transparent pixels present: ${stats.channels[3]?.min === 0 ? "yes" : "no"}`);
