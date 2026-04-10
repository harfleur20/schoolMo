import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, basename } from "path";

const ASSETS_DIR = "./Assets";
const QUALITY = 80;
const MAX_WIDTH = 1920;

const targets = [
  "full-shot-friends-with-drinks-paris.jpg",
  "woman-with-mobile-phone-lady-with-documents.jpg",
  "bienvenueenfrance.png",
  "schhollMo_image.png",
  "woman-sofa-making-plan-redecorate-house.jpg",
  "women-traveling-together-paris.jpg",
  "Anicet_nemani.jpg",
];

for (const file of targets) {
  const input = join(ASSETS_DIR, file);
  const ext = extname(file);
  const name = basename(file, ext);
  const output = join(ASSETS_DIR, `${name}.webp`);

  try {
    const before = statSync(input).size;
    await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output);
    const after = statSync(output).size;
    const saved = (((before - after) / before) * 100).toFixed(0);
    console.log(`✓ ${file} → ${name}.webp  ${(before/1024/1024).toFixed(1)}Mo → ${(after/1024).toFixed(0)}Ko  (-${saved}%)`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
