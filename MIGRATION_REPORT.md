# Migration report

## Source pages

- `https://www.boostaforlag.se/`
- `https://www.boostaforlag.se/forlaget`
- `https://www.boostaforlag.se/forfattare`

The source crawl script uses a rendered Chromium browser and inventories visible text, navigation, links, image sources, `srcset`, lazy-loading values, CSS background images, metadata, favicons and Open Graph images.

## Old-to-new URL mapping

| Old URL | New URL | Handling |
|---|---|---|
| `/` | `/` | Preserved |
| `/forlaget` | `/forlaget/` | Preserved |
| `/forfattare` | `/malla-taipale/` | Static redirect page included; configure a platform 301 where possible |

## New routes

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

## Assets

The migration workflow downloads first-party originals when available, uses large transformed fallbacks only when necessary, generates AVIF and WebP derivatives, records checksums and dimensions, and stores the result in `migration/asset-manifest.json`.

Expected migrated source assets: nine — two book covers, two portraits, the archived logo, two press images, one press PDF and one YouTube poster.

The visible logo asset from the source can be technically unclear against some backgrounds. Its original is archived. A carefully matched, text-based SVG recreation is used for reliable display, without altering the archived source file.

## Links and checkout mapping

The two purchase URLs were preserved from the live homepage and mapped by their order and adjacent product content:

- Rektor – Sveriges viktigaste chef → `https://buy.stripe.com/eVq6oA2Wn4TE3wY8Kfb3q02`
- Skolvalet – Råd till föräldrar → `https://buy.stripe.com/bJe5kw0Ofcm62sU2lRb3q00`

Stripe product names should still be checked manually before production launch because the checkout application requires JavaScript and may change independently of this repository.

## Content changes

- Reorganized the old single-page product presentation into individual SEO-friendly book pages.
- Replaced vague navigation labels with clear routes and a dedicated Malla Taipale page.
- Strengthened Boosta’s positioning around understandable and useful knowledge.
- Reframed interactive publishing as an innovation area without claiming unfinished capabilities.
- Added accessible summaries for copyrighted press clippings rather than republishing article text.
- Omitted unsupported ISBN, format, delivery, stock and returns claims.

## Redirect requirements

For static hosting, configure a permanent redirect from `/forfattare` to `/malla-taipale/`. A static redirect page is included as a fallback.
