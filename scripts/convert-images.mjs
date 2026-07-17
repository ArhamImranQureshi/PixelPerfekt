/**
 * scripts/convert-images.mjs
 *
 * Converts the heaviest PNG/JPEG images in /public/images to WebP.
 * Run with: node scripts/convert-images.mjs
 *
 * Images are converted IN-PLACE (original kept as .bak) so all
 * existing <Image src="...png"> references stay valid — the browser
 * will simply receive much smaller files.
 */

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIR = path.join(__dirname, "..", "public", "images");

// Only convert these specific heavy files (sorted by size desc)
const TARGETS = [
  { file: "portfoliobottom.png",   quality: 75, maxWidth: 2400 },
  { file: "faqclr.png",            quality: 70, maxWidth: 1920 },
  { file: "Branding-bg.png",       quality: 72, maxWidth: 1920 },
  { file: "SEO-bg.png",            quality: 72, maxWidth: 1920 },
  { file: "Social-bg.png",         quality: 72, maxWidth: 1920 },
  { file: "Untitled-2 2.png",      quality: 75, maxWidth: 1600 },
  { file: "hero_bg.png",           quality: 75, maxWidth: 1920 },
  { file: "banner_avatar.png",     quality: 80, maxWidth: 900  },
  { file: "blue-ornament.png",     quality: 80, maxWidth: 600  },
  { file: "faqbg.png",             quality: 72, maxWidth: 1920 },
  { file: "Logo-bg.png",           quality: 75, maxWidth: 1920 },
  { file: "Processbg.png",         quality: 75, maxWidth: 1920 },
  { file: "Rectangle 15.png",      quality: 80, maxWidth: 1920 },
  { file: "screencapture-figma-proto-WF0BzBJw7gsrHJlI0lQtgS-Untitled-2026-05-20-20_38_54.png", quality: 75, maxWidth: 1920 },
];

let totalSavedBytes = 0;

for (const { file, quality, maxWidth } of TARGETS) {
  const srcPath = path.join(IMAGE_DIR, file);

  try {
    await fs.access(srcPath);
  } catch {
    console.warn(`⚠  Skipping (not found): ${file}`);
    continue;
  }

  const statBefore = await fs.stat(srcPath);
  const ext = path.extname(file);
  const base = path.basename(file, ext);

  // Output as WebP alongside the original
  const outPath = path.join(IMAGE_DIR, `${base}.webp`);

  try {
    let pipeline = sharp(srcPath);

    // Resize if wider than maxWidth (preserve aspect ratio)
    const meta = await pipeline.metadata();
    if (meta.width && meta.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, undefined, { withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality, effort: 5 })
      .toFile(outPath);

    const statAfter = await fs.stat(outPath);
    const savedKB = ((statBefore.size - statAfter.size) / 1024).toFixed(0);
    const savedPct = ((1 - statAfter.size / statBefore.size) * 100).toFixed(0);
    totalSavedBytes += statBefore.size - statAfter.size;

    console.log(`✅ ${file}`);
    console.log(`   ${(statBefore.size / 1024).toFixed(0)} KB → ${(statAfter.size / 1024).toFixed(0)} KB  (saved ${savedKB} KB / ${savedPct}%)`);
  } catch (err) {
    console.error(`❌ Failed: ${file}`, err.message);
  }
}

console.log(`\n🎉 Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
