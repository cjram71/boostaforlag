import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const originals = path.join(root, "public", "assets", "originals");
const optimized = path.join(root, "public", "assets", "optimized");
const media = path.join(root, "public", "media");
const brand = path.join(root, "public", "brand");
const migration = path.join(root, "migration");

for (const directory of [originals, optimized, media, brand, migration]) {
  await mkdir(directory, { recursive: true });
}

const assets = [
  {
    sourcePage: "/",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/rektor-500-pcrPVnk0unBlOiLa.jpg",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D607%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/rektor-500-pcrPVnk0unBlOiLa.jpg",
    originalFilename: "rektor-500-pcrPVnk0unBlOiLa.jpg",
    optimizedFilename: "rektor.webp",
    mimeType: "image/jpeg",
    altText: "Omslag till Rektor – Sveriges viktigaste chef av Malla Taipale",
    usage: "Book cover",
  },
  {
    sourcePage: "/",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-omslag-jHGTmp0jwjv5WFyk.jpg",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D607%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/skolvalet-omslag-jHGTmp0jwjv5WFyk.jpg",
    originalFilename: "skolvalet-omslag-jHGTmp0jwjv5WFyk.jpg",
    optimizedFilename: "skolvalet.webp",
    mimeType: "image/jpeg",
    altText: "Omslag till Skolvalet – Råd till föräldrar av Malla Taipale",
    usage: "Book cover",
  },
  {
    sourcePage: "/forfattare",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/malla-taipale-c6B6btJEZjPvxAhq.JPG",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D768%2Ch%3D943%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/malla-taipale-c6B6btJEZjPvxAhq.JPG",
    originalFilename: "malla-taipale-c6B6btJEZjPvxAhq.JPG",
    optimizedFilename: "malla-taipale.webp",
    mimeType: "image/jpeg",
    altText: "Porträtt av Malla Taipale",
    usage: "Author portrait",
  },
  {
    sourcePage: "/forlaget",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/nadja-aVlocycjchwJZndz.JPG",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D531%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/nadja-aVlocycjchwJZndz.JPG",
    originalFilename: "nadja-aVlocycjchwJZndz.JPG",
    optimizedFilename: "nadja-rahmings.webp",
    mimeType: "image/jpeg",
    altText: "Porträtt av Boosta Förlags grundare Nadja C Rahmings",
    usage: "Founder portrait",
  },
  {
    sourcePage: "/forfattare",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-1-zRDO3fHYPMsXSD8W.jpg",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D520%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/skolvalet-1-zRDO3fHYPMsXSD8W.jpg",
    originalFilename: "skolvalet-1-zRDO3fHYPMsXSD8W.jpg",
    optimizedFilename: "skolvalet-press-1.webp",
    mimeType: "image/jpeg",
    altText: "Sida ett av pressklippet Skolchefen ger ut bok – med råd till föräldrar",
    usage: "Press clipping",
  },
  {
    sourcePage: "/forfattare",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-2-CYNvBW4sWKrwY97R.jpg",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D520%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/skolvalet-2-CYNvBW4sWKrwY97R.jpg",
    originalFilename: "skolvalet-2-CYNvBW4sWKrwY97R.jpg",
    optimizedFilename: "skolvalet-press-2.webp",
    mimeType: "image/jpeg",
    altText: "Sida två av pressklippet Skolchefen ger ut bok – med råd till föräldrar",
    usage: "Press clipping",
  },
  {
    sourcePage: "/",
    sourceUrl: "https://i.ytimg.com/vi/X7Q16ITXozc/maxresdefault.jpg",
    fallbackUrl: "https://i.ytimg.com/vi/X7Q16ITXozc/hqdefault.jpg",
    originalFilename: "travel-in-stockholm-poster.jpg",
    optimizedFilename: "travel-in-stockholm.webp",
    mimeType: "image/jpeg",
    altText: "Förhandsbild för Travel in Stockholm",
    usage: "Click-to-load video poster",
  },
  {
    sourcePage: "/",
    sourceUrl: "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/boosta_logo_liggande_orange-L8feMQcqQK5kUXRo.png",
    fallbackUrl: "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D375%2Ch%3D251%2Cfit%3Dcrop/Yle47j8JbqFvKKJz/boosta_logo_liggande_orange-L8feMQcqQK5kUXRo.png",
    originalFilename: "boosta_logo_liggande_orange-L8feMQcqQK5kUXRo.png",
    optimizedFilename: "boosta-logo-original.webp",
    mimeType: "image/png",
    altText: "Boosta Förlag",
    usage: "Archived original logo asset; reconstructed wordmark is used because the transformed source is visually unusable",
  },
];

async function download(primary, fallback) {
  let lastError;
  for (const url of [primary, fallback]) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return { buffer: Buffer.from(await response.arrayBuffer()), resolvedUrl: url };
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const manifest = [];
for (const asset of assets) {
  const { buffer, resolvedUrl } = await download(asset.sourceUrl, asset.fallbackUrl);
  const originalPath = path.join(originals, asset.originalFilename);
  const optimizedPath = path.join(optimized, asset.optimizedFilename);
  await writeFile(originalPath, buffer);

  const image = sharp(buffer).rotate();
  const metadata = await image.metadata();
  await image.webp({ quality: asset.usage === "Press clipping" ? 88 : 84, effort: 5 }).toFile(optimizedPath);

  manifest.push({
    sourcePage: asset.sourcePage,
    sourceUrl: resolvedUrl,
    originalFilename: asset.originalFilename,
    localOriginalPath: `/assets/originals/${asset.originalFilename}`,
    localOptimizedPath: `/assets/optimized/${asset.optimizedFilename}`,
    mimeType: asset.mimeType,
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    altText: asset.altText,
    usage: asset.usage,
    checksum: createHash("sha256").update(buffer).digest("hex"),
  });
}

const pdfUrl = "https://assets.zyrosite.com/Yle47j8JbqFvKKJz/intervju-med-malla-taipale-iEanB33Ls8OGE85C.pdf";
const pdfResponse = await fetch(pdfUrl, { redirect: "follow" });
if (!pdfResponse.ok) throw new Error(`Unable to download press PDF: ${pdfResponse.status}`);
const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
await writeFile(path.join(media, "intervju-med-malla-taipale.pdf"), pdfBuffer);
manifest.push({
  sourcePage: "/forfattare",
  sourceUrl: pdfUrl,
  originalFilename: "intervju-med-malla-taipale-iEanB33Ls8OGE85C.pdf",
  localOriginalPath: "/media/intervju-med-malla-taipale.pdf",
  localOptimizedPath: "/media/intervju-med-malla-taipale.pdf",
  mimeType: "application/pdf",
  width: 0,
  height: 0,
  altText: "Tvåsidigt pressklipp om Malla Taipale och boken Skolvalet",
  usage: "Press PDF",
  checksum: createHash("sha256").update(pdfBuffer).digest("hex"),
});

const socialSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f1e7"/>
  <rect x="0" y="0" width="46" height="630" fill="#cf4728"/>
  <text x="110" y="230" font-family="Georgia, serif" font-size="92" font-weight="700" fill="#191919">Kunskap som går att förstå</text>
  <text x="110" y="330" font-family="Georgia, serif" font-size="92" font-weight="700" fill="#191919">– och använda.</text>
  <text x="115" y="470" font-family="Arial, sans-serif" font-size="48" font-weight="900" letter-spacing="4" fill="#cf4728">BOOSTA FÖRLAG</text>
  <text x="115" y="530" font-family="Arial, sans-serif" font-size="28" fill="#625e57">Personliga och praktiska faktaböcker</text>
</svg>`);
await sharp(socialSvg).png().toFile(path.join(brand, "boosta-social.png"));
await writeFile(path.join(migration, "asset-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Migrated ${manifest.length} assets.`);
