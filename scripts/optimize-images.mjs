/**
 * IMAGE OPTIMISER
 *
 * Turns the original photos in client/image-sources into the small, modern
 * files the website serves:
 *
 *   client/image-sources/fleet/luxury-suv.jpg
 *     -> client/public/images/fleet/luxury-suv-480.avif, -480.webp, -800.avif, ...
 *
 * It also writes client/src/generated/images.json, which records each photo's
 * dimensions so the page can reserve the right space before the photo loads.
 *
 * To replace a photo: overwrite the file in client/image-sources (same name,
 * JPG or PNG, ideally 2000px wide or more) and run `pnpm images`.
 * To add one: drop it in, run `pnpm images`, and refer to it by its path
 * without the extension, e.g. "fleet/my-new-car".
 *
 * Only new or changed photos are processed. Pass --force to redo everything.
 */
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = path.join(root, 'client', 'image-sources');
const OUTPUT_DIR = path.join(root, 'client', 'public', 'images');
const MANIFEST = path.join(root, 'client', 'src', 'generated', 'images.json');

/** Widths generated for every photo (never wider than the original). */
const WIDTHS = [480, 800, 1200, 1600, 2000];

/** AVIF is the smallest; WebP is the fallback for the few browsers without AVIF. */
const FORMATS = {
  avif: (image) => image.avif({ quality: 52, effort: 5 }),
  webp: (image) => image.webp({ quality: 74, effort: 5 }),
};

const force = process.argv.includes('--force');

/** Every JPG and PNG under a directory, as paths relative to it. */
async function listSources(dir, prefix = '') {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) found.push(...(await listSources(path.join(dir, entry.name), relative)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) found.push(relative);
  }
  return found;
}

async function modifiedAt(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

const toHex = ({ r, g, b }) => `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`;

const manifest = {};
let written = 0;

for (const source of (await listSources(SOURCE_DIR)).sort()) {
  const name = source.replace(/\.[^.]+$/, '');
  const sourcePath = path.join(SOURCE_DIR, source);
  const sourceTime = await modifiedAt(sourcePath);

  const { width, height } = await sharp(sourcePath).metadata();
  const widths = WIDTHS.filter((candidate) => candidate <= width);
  if (widths.length === 0) widths.push(width);

  await mkdir(path.dirname(path.join(OUTPUT_DIR, name)), { recursive: true });

  for (const targetWidth of widths) {
    for (const [extension, encode] of Object.entries(FORMATS)) {
      const output = path.join(OUTPUT_DIR, `${name}-${targetWidth}.${extension}`);
      if (!force && (await modifiedAt(output)) >= sourceTime) continue;
      await encode(sharp(sourcePath).resize({ width: targetWidth })).toFile(output);
      written++;
    }
  }

  // The photo's dominant colour fills its space while it loads.
  const { dominant } = await sharp(sourcePath).stats();
  manifest[name] = { width, height, widths, color: toHex(dominant) };
  console.log(`${name}  ${width}x${height}  ->  ${widths.join(', ')}`);
}

await mkdir(path.dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\n${Object.keys(manifest).length} photos, ${written} files written.`);
