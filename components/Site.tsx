"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { books, site, type Book } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <header className="site-header"><div className="shell header-inner">
    <Link className="wordmark-link" href="/" aria-label="Boosta Förlag, startsida"><img className="wordmark" src="/brand/boosta-wordmark.svg" width="236" height="64" alt="Boosta Förlag" /></Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}><span className="menu-icon" aria-hidden="true" /><span>{open ? "Stäng" : "Meny"}</span></button>
    <nav id="primary-navigation" className={`primary-navigation${open ? " is-open" : ""}`} aria-label="Huvudnavigation">
      {site.nav.map((item) => { const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>; })}
    </nav>
    <Link className="button header-cta" href="/bocker/">Köp böckerna</Link>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid">
    <div><img className="footer-wordmark" src="/brand/boosta-wordmark-light.svg" width="236" height="64" alt="Boosta Förlag" /><p>{site.tagline}</p></div>
    <div><h2 className="footer-heading">Navigera</h2><nav className="footer-nav" aria-label="Sidfotsnavigation">{site.nav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
    <div><h2 className="footer-heading">Kontakt</h2><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><a href={site.founderSite} target="_blank" rel="noopener noreferrer">Text and Web <span aria-hidden="true">↗</span><span className="sr-only"> (extern webbplats)</span></a></div>
  </div><div className="shell footer-bottom"><p>© {new Date().getFullYear()} Boosta Förlag</p><div><Link href="/integritet/">Integritet</Link><Link href="/tillganglighet/">Tillgänglighet</Link></div></div></footer>;
}

export function BookCard({ book }: { book: Book }) {
  return <article className="book-card"><div className="book-card-cover"><img src={book.cover} width={book.coverWidth} height={book.coverHeight} loading="lazy" alt={`Omslag till ${book.title} av ${book.author}`} /></div><div className="book-card-copy">
    <p className="eyebrow">{book.author}</p><h3>{book.title}</h3><p>{book.shortDescription}</p><p className="audience-label">{book.audience}</p><p className="price">{book.priceSek} kr</p>
    <div className="button-row"><Link className="text-link" href={`/bocker/${book.slug}/`}>Läs mer <span aria-hidden="true">→</span></Link><a className="button" href={book.checkoutUrl}>Köp {book.shortTitle} – {book.priceSek} kr<span className="sr-only">. Du fortsätter till extern betalning via Stripe.</span></a></div>
    <p className="checkout-note">Betalningen hanteras på Stripes externa kassasida.</p>
  </div></article>;
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead: string }) {
  return <section className="page-hero"><div className="shell reading-width">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h1>{title}</h1><p className="lead">{lead}</p></div></section>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs" aria-label="Brödsmulor"><ol><li><Link href="/">Hem</Link></li><li><Link href="/bocker/">Böcker</Link></li><li aria-current="page">{current}</li></ol></nav>;
}

export function PurchasePanel({ book }: { book: Book }) {
  return <aside className="purchase-panel" aria-label={`Köp ${book.title}`}><img src={book.cover} width={book.coverWidth} height={book.coverHeight} loading="lazy" alt="" /><div><p className="eyebrow">Köp boken</p><h2>{book.title}</h2><p className="price">{book.priceSek} kr</p><a className="button" href={book.checkoutUrl}>Köp {book.shortTitle} – {book.priceSek} kr<span className="sr-only">. Du fortsätter till extern betalning via Stripe.</span></a><p className="checkout-note">Betalningen hanteras på Stripes externa kassasida.</p></div></aside>;
}

export function VideoPoster() {
  const [active, setActive] = useState(false);
  if (active) return <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/X7Q16ITXozc?autoplay=1" title="Travel in Stockholm – interaktiv mobilguide" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>;
  return <button className="video-poster" type="button" onClick={() => setActive(true)}><img src="/assets/optimized/travel-in-stockholm.webp" width="480" height="360" loading="lazy" alt="Förhandsbild för Travel in Stockholm" /><span className="play-button" aria-hidden="true">▶</span><span className="video-label">Spela Travel in Stockholm</span></button>;
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export { books };
