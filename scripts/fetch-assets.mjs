import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root = process.cwd();
const assets = [
  { id: 'rektor', sourcePage: '/', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/rektor-500-pcrPVnk0unBlOiLa.jpg', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1500/Yle47j8JbqFvKKJz/rektor-500-pcrPVnk0unBlOiLa.jpg', original: 'public/assets/originals/rektor-original.jpg', optimizedBase: 'public/assets/optimized/rektor-750', altText: 'Omslag till Rektor – Sveriges viktigaste chef av Malla Taipale', usage: 'Book cover and hero' },
  { id: 'skolvalet', sourcePage: '/', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-omslag-jHGTmp0jwjv5WFyk.jpg', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1500/Yle47j8JbqFvKKJz/skolvalet-omslag-jHGTmp0jwjv5WFyk.jpg', original: 'public/assets/originals/skolvalet-original.jpg', optimizedBase: 'public/assets/optimized/skolvalet-750', altText: 'Omslag till Skolvalet – Råd till föräldrar av Malla Taipale', usage: 'Book cover and hero' },
  { id: 'malla-taipale', sourcePage: '/forfattare', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/malla-taipale-c6B6btJEZjPvxAhq.JPG', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1800/Yle47j8JbqFvKKJz/malla-taipale-c6B6btJEZjPvxAhq.JPG', original: 'public/assets/originals/malla-taipale-original.jpg', optimizedBase: 'public/assets/optimized/malla-taipale-900', altText: 'Porträtt av Malla Taipale', usage: 'Author portrait' },
  { id: 'nadja', sourcePage: '/forlaget', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/nadja-aVlocycjchwJZndz.JPG', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1800/Yle47j8JbqFvKKJz/nadja-aVlocycjchwJZndz.JPG', original: 'public/assets/originals/nadja-original.jpg', optimizedBase: 'public/assets/optimized/nadja-900', altText: 'Porträtt av Boosta Förlags grundare Nadja C Rahmings', usage: 'Founder portrait' },
  { id: 'logo-original', sourcePage: 'all', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/boosta_logo_liggande_orange-L8feMQcqQK5kUXRo.png', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=png,w=1500/Yle47j8JbqFvKKJz/boosta_logo_liggande_orange-L8feMQcqQK5kUXRo.png', original: 'public/brand/boosta-logo-original.png', altText: 'Boosta Förlag', usage: 'Archived original logo' },
  { id: 'press-page-1', sourcePage: '/forfattare', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-1-zRDO3fHYPMsXSD8W.jpg', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1500/Yle47j8JbqFvKKJz/skolvalet-1-zRDO3fHYPMsXSD8W.jpg', original: 'public/media/skolvalet-press-page-1.jpg', altText: 'Första sidan av pressklippet Skolchefen ger ut bok – med råd till föräldrar', usage: 'Press clipping' },
  { id: 'press-page-2', sourcePage: '/forfattare', sourceUrl: 'https://assets.zyrosite.com/Yle47j8JbqFvKKJz/skolvalet-2-CYNvBW4sWKrwY97R.jpg', fallbackUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=jpeg,w=1500/Yle47j8JbqFvKKJz/skolvalet-2-CYNvBW4sWKrwY97R.jpg', original: 'public/media/skolvalet-press-page-2.jpg', altText: 'Andra sidan av pressklippet Skolchefen ger ut bok – med råd till föräldrar', usage: 'Press clipping' },
  { id: 'video-poster', sourcePage: '/', sourceUrl: 'https://i.ytimg.com/vi/X7Q16ITXozc/maxresdefault.jpg', fallbackUrl: 'https://i.ytimg.com/vi/X7Q16ITXozc/hqdefault.jpg', original: 'public/media/travel-in-stockholm-poster.jpg', altText: 'Travel in Stockholm, interaktiv mobilguide', usage: 'Click-to-load video poster' }
];

async function download(urls) {
  let lastError;
  for (const url of urls) {
    try {
      const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Boosta-Forlag-Migration/1.0' } });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 100) throw new Error('Downloaded file was unexpectedly small');
      return { buffer, finalUrl: response.url, mimeType: response.headers.get('content-type') || 'application/octet-stream' };
    } catch (error) { lastError = error; }
  }
  throw lastError;
}

await Promise.all(['public/assets/originals','public/assets/optimized','public/media','public/brand','migration'].map((dir) => fs.mkdir(path.join(root, dir), { recursive: true })));
const manifest = [];
for (const asset of assets) {
  const { buffer, finalUrl, mimeType } = await download([asset.sourceUrl, asset.fallbackUrl]);
  const originalPath = path.join(root, asset.original);
  await fs.writeFile(originalPath, buffer);
  let metadata = {};
  let optimizedPaths = [];
  if (mimeType.startsWith('image/')) {
    const image = sharp(buffer).rotate();
    metadata = await image.metadata();
    if (asset.optimizedBase) {
      const avifPath = `${asset.optimizedBase}.avif`;
      const webpPath = `${asset.optimizedBase}.webp`;
      await image.clone().resize({ width: Number(asset.optimizedBase.match(/-(\d+)$/)?.[1] || 900), withoutEnlargement: true }).avif({ quality: 62 }).toFile(path.join(root, avifPath));
      await image.clone().resize({ width: Number(asset.optimizedBase.match(/-(\d+)$/)?.[1] || 900), withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(root, webpPath));
      optimizedPaths = [avifPath, webpPath];
    }
  }
  manifest.push({ sourcePage: asset.sourcePage, sourceUrl: finalUrl, originalFilename: path.basename(new URL(asset.sourceUrl).pathname), localOriginalPath: `/${asset.original.replace(/^public\//,'')}`, localOptimizedPath: optimizedPaths.map((value) => `/${value.replace(/^public\//,'')}`).join(', '), mimeType, width: metadata.width || 0, height: metadata.height || 0, altText: asset.altText, usage: asset.usage, checksum: crypto.createHash('sha256').update(buffer).digest('hex') });
}
const pdf = await download(['https://assets.zyrosite.com/Yle47j8JbqFvKKJz/intervju-med-malla-taipale-iEanB33Ls8OGE85C.pdf']);
const pdfPath = 'public/media/intervju-med-malla-taipale.pdf';
await fs.writeFile(path.join(root, pdfPath), pdf.buffer);
manifest.push({ sourcePage: '/forfattare', sourceUrl: pdf.finalUrl, originalFilename: 'intervju-med-malla-taipale-iEanB33Ls8OGE85C.pdf', localOriginalPath: '/media/intervju-med-malla-taipale.pdf', localOptimizedPath: '', mimeType: pdf.mimeType, width: 0, height: 0, altText: 'Pressklipp i PDF-format, två sidor', usage: 'Press PDF', checksum: crypto.createHash('sha256').update(pdf.buffer).digest('hex') });
await fs.writeFile(path.join(root, 'migration/asset-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Migrated ${manifest.length} source assets.`);
