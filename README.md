# Boosta Förlag website

A static-first, mobile-first Next.js rebuild of `boostaforlag.se`. The public website remains in Swedish; code and documentation are in English.

## Pages

- `/`
- `/bocker/`
- `/bocker/rektor-sveriges-viktigaste-chef/`
- `/bocker/skolvalet-rad-till-foraldrar/`
- `/malla-taipale/`
- `/forlaget/`
- `/media/`
- `/media/skolchefen-ger-ut-bok/`
- `/kontakt/`
- `/integritet/`
- `/tillganglighet/`

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run typecheck
npm run build
```

The static export is written to `out/`.

## Source migration

```bash
npx playwright install chromium
npm run migrate:source
```

This crawls the three rendered source pages, downloads local copies of legitimate images and the PDF, generates optimized AVIF/WebP files, and updates the migration inventory and asset manifest.

## Editing content

- Site name, navigation, email and telephone: `src/data/site.ts`
- Books, prices and Stripe checkout links: `src/content/books/books.ts`
- People: `src/content/people/people.ts`
- Media items: `src/content/media/media.ts`
- Page metadata: each route’s `page.tsx`
- Global design tokens and layout: `src/app/globals.css`

### Change a price or Stripe link

Edit `priceSek` or `checkoutUrl` in `src/content/books/books.ts`. The visible price, buttons and structured data use the same source.

### Add a book

1. Add the original cover to `public/assets/originals/` and optimized files to `public/assets/optimized/`.
2. Add a complete entry to `src/content/books/books.ts` without guessing optional facts.
3. Add a route under `src/app/bocker/<slug>/`.
4. Add the route to `public/sitemap.xml`.

### Add a media item

Add its data to `src/content/media/media.ts`, store files in `public/media/`, and create a page when the item needs a readable detail view.

### Replace an image

Replace the original and regenerate derivatives with `npm run fetch:assets`, or update the URLs in `scripts/fetch-assets.mjs` before running the migration script.

## Deployment

### Vercel

Import the repository and deploy with the default Next.js settings. The project uses `output: 'export'` and produces a static site.

### Netlify or Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `out`
- Node: 22

Configure a permanent redirect:

```text
/forfattare  /malla-taipale/  301
```

### GitHub Pages

Deploy the contents of `out/` with a Pages workflow. A custom-domain deployment should keep the root paths used in this site.

## Privacy and third parties

No analytics or contact form is enabled. YouTube is click-to-load through `youtube-nocookie.com`. Purchase links continue to Stripe only after explicit activation.

## Migration documentation

- `MIGRATION_REPORT.md`
- `CONTENT_GAPS.md`
- `migration/content-inventory.md`
- `migration/asset-manifest.json`
