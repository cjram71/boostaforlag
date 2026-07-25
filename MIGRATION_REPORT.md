# Migration report

## Source pages reviewed

- `https://www.boostaforlag.se/`
- `https://www.boostaforlag.se/forlaget`
- `https://www.boostaforlag.se/forfattare`

The rendered text, navigation, footer, book covers, portraits, press images, PDF, Stripe links and Travel in Stockholm video reference were inventoried.

## Old-to-new URL mapping

| Old URL | New URL | Handling |
|---|---|---|
| `/` | `/` | Rebuilt homepage |
| `/forlaget` | `/forlaget/` | Rebuilt publisher page |
| `/forfattare` | `/malla-taipale/` | Static redirect page; configure 301 when supported |

New routes:

- `/bocker/`
- `/bocker/rektor-sveriges-viktigaste-chef/`
- `/bocker/skolvalet-rad-till-foraldrar/`
- `/media/`
- `/kontakt/`
- `/integritet/`
- `/tillganglighet/`

## Assets migrated

The automated migration script archives:

- 2 book covers
- 2 portraits
- 2 press clipping images
- 1 two-page press PDF
- 1 Travel in Stockholm poster
- 1 original logo asset

Each downloaded file is checksum-recorded in `migration/asset-manifest.json` during the asset/build step. WebP derivatives are generated for website use. The exported website is checked for old Zyro CDN hotlinks before deployment.

## Logo

The transformed source logo renders as an indistinct orange block and is not usable as a visible header mark. It is still archived unchanged. A clean typographic SVG recreation is used for the live header and footer, preserving the orange identity and Boosta Förlag wording.

## Stripe mapping

The source page places the first checkout link with `Rektor – Sveriges viktigaste chef` and the second with `Skolvalet – Råd till föräldrar`. The build uses:

- Rektor: `https://buy.stripe.com/eVq6oA2Wn4TE3wY8Kfb3q02`
- Skolvalet: `https://buy.stripe.com/bJe5kw0Ofcm62sU2lRb3q00`

Stripe’s checkout application requires JavaScript and did not expose the item name to the crawler, so final owner confirmation remains requested in `CONTENT_GAPS.md`.

## Content rewritten

Existing facts and quotations were preserved while the presentation was reorganized into clearer product, author, publisher, media and contact pages. Stigmatizing wording was replaced with the more precise phrase “skolor med stora utmaningar” without changing the underlying claim.

## Content deliberately omitted

- The current “one million pupils per day” figure is omitted because it was not independently verified as current.
- No ISBN, page count, binding, delivery time, stock status, shipping cost, return conditions or manuscript policy was invented.
- Full newspaper article text was not republished as HTML; the site provides an original summary and access to the clipping/PDF.

## Quality controls built into CI

The GitHub Actions workflow runs type-checking, a production static build, required-route checks, required-asset checks and a scan that fails when old Zyro CDN hotlinks appear in exported HTML, CSS or JavaScript.
