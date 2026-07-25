import Link from "next/link";
import { Breadcrumbs } from "@/components/Site";
import { JsonLd } from "@/components/Site";
import { PurchasePanel } from "@/components/Site";
import { getBook } from "@/data/site";
import { createMetadata, site } from "@/data/site";

const book = getBook("rektor-sveriges-viktigaste-chef");

export const metadata = createMetadata({
  title: "Rektor – Sveriges viktigaste chef | Malla Taipale",
  description:
    "Malla Taipales personliga och praktiska bok om rektorns vardag, skolledarskap och hur en skola kan bryta en negativ utveckling.",
  path: "/bocker/rektor-sveriges-viktigaste-chef",
});

export default function RektorPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: book.title,
      author: { "@type": "Person", name: book.author },
      illustrator: { "@type": "Person", name: book.illustrator },
      image: `${site.url}${book.cover}`,
      url: `${site.url}/bocker/${book.slug}/`,
      inLanguage: "sv",
      offers: {
        "@type": "Offer",
        price: book.priceSek,
        priceCurrency: "SEK",
        url: book.checkoutUrl,
      },
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
              <img
                src={book.cover}
                width={book.coverWidth}
                height={book.coverHeight}
                alt={`Omslag till ${book.title} av ${book.author}`}
              />
            </div>
            <div className="product-summary">
              <p className="eyebrow">{book.author}</p>
              <h1>{book.title}</h1>
              <p className="lead">{book.shortDescription}</p>
              <p className="price price-large">{book.priceSek} kr</p>
              <a className="button" href={book.checkoutUrl}>
                Köp Rektor – 134 kr
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
            <h2>Om boken</h2>
            <p>
              Malla Taipale blev känd som rektorn som vände skolor med stora utmaningar i
              Stockholm. I boken berättar hon om vardagen, ansvaret och de svåra beslut hon
              mötte under nära två decennier som rektor.
            </p>
            <p>
              Åren rymde allt från brandkårsutryckningar, vapenbeslag och personliga hot till
              det långsiktiga arbetet med att få lärare och elever att bryta en negativ spiral
              tillsammans.
            </p>
            <p>
              Berättelsen är tydlig, modig, personlig och lösningsinriktad. Anekdoter blandas
              med handfasta råd och tydliga ställningstaganden.
            </p>
            <h2>Du får bland annat</h2>
            <ul>{book.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>För vem?</h2>
            <p>{book.audience}</p>
            <blockquote>
              <p>Boken tar avstamp i skolans vardag och lyfter rektorn som Sveriges viktigaste chef – en ledare som påverkar framtiden långt efter sitt eget yrkesliv.</p>
            </blockquote>
          </article>
          <aside className="author-teaser">
            <img
              src="/assets/optimized/malla-taipale.webp"
              width="768"
              height="943"
              loading="lazy"
              alt="Porträtt av Malla Taipale"
            />
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
