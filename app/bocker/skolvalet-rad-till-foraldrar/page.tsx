import Link from "next/link";
import { Breadcrumbs } from "@/components/Site";
import { JsonLd } from "@/components/Site";
import { PurchasePanel } from "@/components/Site";
import { getBook } from "@/data/site";
import { createMetadata, site } from "@/data/site";

const book = getBook("skolvalet-rad-till-foraldrar");

export const metadata = createMetadata({
  title: "Skolvalet – Råd till föräldrar | Malla Taipale",
  description:
    "En tydlig guide av Malla Taipale för föräldrar och vårdnadshavare som ska välja eller byta grundskola.",
  path: "/bocker/skolvalet-rad-till-foraldrar",
});

export default function SkolvaletPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: book.title,
      author: { "@type": "Person", name: book.author },
      image: `${site.url}${book.cover}`,
      url: `${site.url}/bocker/${book.slug}/`,
      inLanguage: "sv",
      offers: { "@type": "Offer", price: book.priceSek, priceCurrency: "SEK", url: book.checkoutUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: site.url },
        { "@type": "ListItem", position: 2, name: "Böcker", item: `${site.url}/bocker/` },
        { "@type": "ListItem", position: 3, name: book.title, item: `${site.url}/bocker/${book.slug}/` },
      ],
    },
  ];

  return (
    <>
      <section className="product-hero">
        <div className="shell">
          <Breadcrumbs current={book.title} />
          <div className="product-grid">
            <div className="product-cover-wrap">
              <img src={book.cover} width={book.coverWidth} height={book.coverHeight} alt={`Omslag till ${book.title} av ${book.author}`} />
            </div>
            <div className="product-summary">
              <p className="eyebrow">{book.author}</p>
              <h1>{book.title}</h1>
              <p className="lead">{book.shortDescription}</p>
              <p className="price price-large">{book.priceSek} kr</p>
              <a className="button" href={book.checkoutUrl}>
                Köp Skolvalet – 146 kr
                <span className="sr-only">. Du fortsätter till extern betalning via Stripe.</span>
              </a>
              <p className="checkout-note">Betalningen hanteras på Stripes externa kassasida.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell article-layout">
          <article className="prose">
            <h2>När ditt barn ska välja eller byta skola</h2>
            <p>
              När det är dags att välja eller byta skola uppstår många frågor: Vad får familjen
              välja? Hur bedömer man om en skola är bra? Och vad bör man fråga rektorn?
            </p>
            <p>
              Malla Taipale arbetade som grundskolerektor i nära två decennier. I boken
              förklarar hon hur processen går till och vad föräldrar kan titta efter innan de
              fattar sitt beslut.
            </p>
            <h2>Boken tar upp</h2>
            <ul>{book.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>För vem?</h2>
            <p>{book.audience}</p>
          </article>
          <aside className="author-teaser">
            <img src="/assets/optimized/malla-taipale.webp" width="768" height="943" loading="lazy" alt="Porträtt av Malla Taipale" />
            <p className="eyebrow">Om författaren</p>
            <h2>Malla Taipale</h2>
            <p>Författare, tidigare rektor, coach och föreläsare med nära två decenniers erfarenhet av skolledarskap.</p>
            <Link className="text-link" href="/malla-taipale/">Läs om Malla <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>
      <section className="section"><div className="shell"><PurchasePanel book={book} /></div></section>
      <JsonLd data={structuredData} />
    </>
  );
}
