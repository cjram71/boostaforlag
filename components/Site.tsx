import { books, site, type Book } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark-link" href="/" aria-label="Boosta Förlag, startsida">
          <img className="wordmark" src="/brand/boosta-wordmark.svg" width="236" height="64" alt="Boosta Förlag" />
        </a>
        <nav className="primary-navigation" aria-label="Huvudnavigation">
          {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <details className="mobile-navigation">
          <summary className="menu-button"><span className="menu-icon" aria-hidden="true" /><span>Meny</span></summary>
          <nav className="mobile-navigation-panel" aria-label="Mobilnavigation">
            {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a className="button" href="/bocker/">Köp böckerna</a>
          </nav>
        </details>
        <a className="button header-cta" href="/bocker/">Köp böckerna</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><img className="footer-wordmark" src="/brand/boosta-wordmark-light.svg" width="236" height="64" alt="Boosta Förlag" /><p>{site.tagline}</p></div>
        <div><h2 className="footer-heading">Navigera</h2><nav className="footer-nav" aria-label="Sidfotsnavigation">{site.nav.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div>
        <div><h2 className="footer-heading">Kontakt</h2><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><a href={site.founderSite} target="_blank" rel="noopener noreferrer">Text and Web <span aria-hidden="true">↗</span><span className="sr-only"> (extern webbplats)</span></a></div>
      </div>
      <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Boosta Förlag</p><div><a href="/integritet/">Integritet</a><a href="/tillganglighet/">Tillgänglighet</a></div></div>
    </footer>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="book-card">
      <div className="book-card-cover">
        <img src={book.cover} srcSet={book.coverSrcSet} sizes="(max-width: 620px) 220px, 190px" width={book.coverWidth} height={book.coverHeight} loading="lazy" decoding="async" alt={`Omslag till ${book.title} av ${book.author}`} />
      </div>
      <div className="book-card-copy">
        <p className="eyebrow">{book.author}</p><h3>{book.title}</h3><p>{book.shortDescription}</p><p className="audience-label">{book.audience}</p><p className="price">{book.priceSek} kr</p>
        <div className="button-row"><a className="text-link" href={`/bocker/${book.slug}/`}>Läs mer <span aria-hidden="true">→</span></a><a className="button" href={book.checkoutUrl}>Köp {book.shortTitle} – {book.priceSek} kr<span className="sr-only">. Du fortsätter till extern betalning via Stripe.</span></a></div>
        <p className="checkout-note">Betalningen hanteras på Stripes externa kassasida.</p>
      </div>
    </article>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead: string }) {
  return <section className="page-hero"><div className="shell reading-width">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h1>{title}</h1><p className="lead">{lead}</p></div></section>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs" aria-label="Brödsmulor"><ol><li><a href="/">Hem</a></li><li><a href="/bocker/">Böcker</a></li><li aria-current="page">{current}</li></ol></nav>;
}

export function PurchasePanel({ book }: { book: Book }) {
  return (
    <aside className="purchase-panel" aria-label={`Köp ${book.title}`}>
      <img src={book.cover} srcSet={book.coverSrcSet} sizes="120px" width={book.coverWidth} height={book.coverHeight} loading="lazy" decoding="async" alt="" />
      <div><p className="eyebrow">Köp boken</p><h2>{book.title}</h2><p className="price">{book.priceSek} kr</p><a className="button" href={book.checkoutUrl}>Köp {book.shortTitle} – {book.priceSek} kr<span className="sr-only">. Du fortsätter till extern betalning via Stripe.</span></a><p className="checkout-note">Betalningen hanteras på Stripes externa kassasida.</p></div>
    </aside>
  );
}

export function VideoPoster() {
  const activationScript = `(function(){var button=document.currentScript.previousElementSibling;if(!button)return;button.addEventListener('click',function(){var frame=document.createElement('div');frame.className='video-frame';frame.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/X7Q16ITXozc?autoplay=1" title="Travel in Stockholm – interaktiv mobilguide" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';button.replaceWith(frame);},{once:true});})();`;
  return (
    <div className="video-shell">
      <button className="video-poster" type="button"><img src="/assets/optimized/travel-in-stockholm.webp" width="960" height="540" loading="lazy" decoding="async" alt="Förhandsbild för Travel in Stockholm" /><span className="play-button" aria-hidden="true">▶</span><span className="video-label">Spela Travel in Stockholm</span></button>
      <script dangerouslySetInnerHTML={{ __html: activationScript }} />
      <noscript><a href="https://www.youtube.com/watch?v=X7Q16ITXozc">Se Travel in Stockholm på YouTube</a></noscript>
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export { books };
