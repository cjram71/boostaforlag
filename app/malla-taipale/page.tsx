import Link from "next/link";
import { BookCard } from "@/components/Site";
import { JsonLd } from "@/components/Site";
import { PageHero } from "@/components/Site";
import { books } from "@/data/site";
import { pressItem } from "@/data/site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Malla Taipale – Författare och tidigare rektor",
  description:
    "Läs om Malla Taipale, tidigare rektor, författare, coach och föreläsare med nära två decenniers erfarenhet av skolledarskap.",
  path: "/malla-taipale",
});

export default function MallaPage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malla Taipale",
    url: `${site.url}/malla-taipale/`,
    image: `${site.url}/assets/optimized/malla-taipale.webp`,
    jobTitle: "Författare, coach och föreläsare",
    worksFor: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero eyebrow="Författare, skolledare och föreläsare" title="Malla Taipale" lead="Rektorn som vände skolor" />
      <section className="section section-compact-top">
        <div className="shell feature-grid">
          <div className="portrait-frame portrait-frame-tall">
            <img src="/assets/optimized/malla-taipale.webp" width="768" height="943" alt="Porträtt av Malla Taipale" />
          </div>
          <div>
            <h2>Ett långt liv i skolans värld</h2>
            <p className="lead-small">
              Under sina nära två decennier som grundskolerektor lyckades Malla Taipale vända
              utvecklingen på skolor med stora utmaningar. Hon blev en efterfrågad föreläsare
              och uppmärksammades även i finska riksmedier.
            </p>
            <p>
              Malla var med och startade Sverigefinska skolan i Upplands Väsby. Skolan blev
              uppskattad och framgångsrik. Senare arbetade hon som rektor i kommunala skolor,
              varav flera stod inför stora utmaningar. Hennes ledarskap var rakt, strukturerat
              och omtänksamt.
            </p>
            <blockquote>
              <p>Jag har varit rak och ganska sträng i mitt arbete men alltid gjort jobbet med stor kärlek och aldrig någonsin nedvärderat mina elever.</p>
              <cite>– Malla Taipale</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Utgivning</p><h2>Mallas böcker</h2></div>
          <div className="book-grid">{books.map((book) => <BookCard key={book.slug} book={book} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column-text">
          <div><p className="eyebrow">Erfarenhet som gör skillnad</p><h2>Coaching och föreläsningar</h2></div>
          <div>
            <p className="lead-small">I dag skriver Malla böcker, coachar andra rektorer och föreläser om skolledarskap, skolutveckling och skolval.</p>
            <Link className="button" href="/kontakt/#malla">Fråga om föreläsning eller coaching</Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell media-teaser-grid">
          <div>
            <p className="eyebrow">Malla i media</p>
            <h2>{pressItem.headline}</h2>
            <p><strong>{pressItem.publication}</strong><br />{pressItem.date}</p>
            <p>{pressItem.summary}</p>
            <div className="button-row">
              <Link className="button" href="/media/">Visa pressklippet</Link>
              <a className="button button-secondary" href={pressItem.pdf} download>Ladda ned PDF</a>
            </div>
          </div>
          <img src={pressItem.pageOne} width="375" height="520" loading="lazy" alt={`Pressklipp med rubriken ${pressItem.headline}`} />
        </div>
      </section>
      <JsonLd data={person} />
    </>
  );
}
