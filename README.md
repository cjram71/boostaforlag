# Boosta Förlag

A production-ready, static-first rebuild of `www.boostaforlag.se` using Next.js App Router, TypeScript and a small custom CSS system.

## Requirements

- Node.js 22
- npm
- Internet access during the first asset migration/build

## Install and run

```bash
npm install
npm run assets
npm run dev
```

The asset step downloads the legitimate source covers, portraits, press material, video poster and original logo into `public/`, then creates optimized WebP derivatives and a checksum manifest.

## Type-check and build

```bash
npm run typecheck
npm run build
```

The static export is generated in `out/`.

## Deployment

The repository includes `.github/workflows/deploy-pages.yml`. On every push to `main`, GitHub Actions:

1. installs dependencies;
2. type-checks the project;
3. downloads and optimizes the source assets;
4. builds the static export;
5. verifies that exported pages contain no Zyro CDN hotlinks;
6. verifies the required routes and assets;
7. runs Lighthouse audits on the homepage, both book pages, the Malla page and the publisher page;
8. commits the migrated originals, optimized files and checksum manifest when they change;
9. deploys `out/` to GitHub Pages.

### Activate GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter `www.boostaforlag.se` and save it.
4. At the DNS provider, point the `www` CNAME record to `cjram71.github.io` without the repository name.
5. Enable **Enforce HTTPS** when GitHub makes the option available.

The `public/CNAME` file is retained for portability, but GitHub ignores it when publishing with a custom Actions workflow. The custom domain must therefore also be entered in the repository's Pages settings.

## Quality gates

The Lighthouse configuration is stored in `lighthouserc.json`. The workflow enforces these minimum scores:

- Performance: 90
- Accessibility: 95
- Best Practices: 95
- SEO: 95

Full reports are uploaded as a workflow artifact and the measured scores are posted on pull requests.

## Editing content

- Site identity, contact details, navigation and metadata helper: `data/site.ts`
- Books, prices and Stripe checkout links: `data/site.ts`
- Press item: `data/site.ts`
- Page copy: `app/**/page.tsx`
- Design tokens and layout: `app/globals.css`

## Change a price or Stripe link

Edit the corresponding entry in `data/site.ts`:

```ts
priceSek: 134,
checkoutUrl: "https://buy.stripe.com/...",
```

The price and checkout destination are reused across cards, product pages and structured data.

## Add a book

1. Add a new entry to `data/site.ts`.
2. Add a route in `app/bocker/<slug>/page.tsx`.
3. Add the cover source to `scripts/fetch-assets.mjs`.
4. Add the route to `app/sitemap.ts`.
5. Run `npm run build`.

## Add a media item

1. Add the source files to `scripts/fetch-assets.mjs`.
2. Add metadata in `data/site.ts`.
3. Render the item in `app/media/page.tsx`.

## Replace an image

Update its source URL in `scripts/fetch-assets.mjs`, remove the previously downloaded local file if testing locally, and rerun:

```bash
npm run assets
```

## SEO

- Shared metadata base: `app/layout.tsx`
- Page-specific metadata: each `app/**/page.tsx`
- Sitemap: `app/sitemap.ts`
- Robots rules: `app/robots.ts`
- JSON-LD: `components/Site.tsx` and the relevant pages
- Social image: generated during `npm run assets`

## Redirect

`/forfattare/` is retained as a static redirect page pointing to `/malla-taipale/`. On a host that supports server-side redirects, configure a permanent 301 redirect instead.
