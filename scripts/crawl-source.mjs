import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root = process.cwd();
const pages = ['https://www.boostaforlag.se/', 'https://www.boostaforlag.se/forlaget', 'https://www.boostaforlag.se/forfattare'];
const browser = await chromium.launch({ headless: true });
const results = [];
for (const url of pages) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  const data = await page.evaluate(() => {
    const absolute = (value) => { try { return new URL(value, location.href).href; } catch { return value; } };
    const backgrounds = [...document.querySelectorAll('*')].map((el) => getComputedStyle(el).backgroundImage).filter((value) => value && value !== 'none');
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      text: document.body.innerText.replace(/\n{3,}/g, '\n\n').trim(),
      links: [...document.querySelectorAll('a[href]')].map((a) => ({ text: a.textContent?.trim() || '', href: absolute(a.getAttribute('href')) })),
      images: [...document.querySelectorAll('img')].map((img) => ({ src: absolute(img.currentSrc || img.src), srcset: img.getAttribute('srcset') || '', alt: img.alt || '', loading: img.loading || '' })),
      backgrounds,
      headAssets: [...document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"], meta[property="og:image"]')].map((el) => el.getAttribute('href') || el.getAttribute('content')),
    };
  });
  await page.screenshot({ path: path.join(root, `migration/source-${new URL(url).pathname.replaceAll('/','-') || 'home'}.png`), fullPage: true });
  results.push({ url, ...data });
  await page.close();
}
await browser.close();
await fs.mkdir(path.join(root, 'migration'), { recursive: true });
await fs.writeFile(path.join(root, 'migration/source-crawl.json'), `${JSON.stringify(results, null, 2)}\n`);
const md = ['# Source content inventory', '', `Crawled: ${new Date().toISOString()}`, ''];
for (const item of results) {
  md.push(`## ${item.url}`, '', `**Title:** ${item.title}`, '', `**Description:** ${item.description || 'Not present'}`, '', '### Visible text', '', item.text, '', '### Links', '', ...item.links.map((link) => `- [${link.text || link.href}](${link.href})`), '', '### Images', '', ...item.images.map((image) => `- ${image.src} — alt: ${image.alt || '(empty)'} — srcset: ${image.srcset || '(none)'}`), '');
}
await fs.writeFile(path.join(root, 'migration/content-inventory.md'), `${md.join('\n')}\n`);
