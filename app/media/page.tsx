import { PageHero } from "@/components/Site";
import { books } from "@/data/site";
import { pressItem } from "@/data/site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Press och media – Boosta Förlag",
  description: "Pressmaterial, bokomslag och artiklar om Boosta Förlag, Malla Taipale och böckerna.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHero eyebrow="Pressrum" title="Press och media" lead="Här finns pressmaterial och artiklar om Boosta Förlag, Malla Taipale och böckerna." />
      <section className="section section-compact-top">
        <div className="shell press-feature">
          <div>
            <p className="eyebrow">Pressklipp</p>
            <h2>{pressItem.headline}</h2>
            <p><strong>{pressItem.publication}</strong><br />{pressItem.date}</p>
            <p className="lead-small">{pressItem.summary}</p>
            <a className="button" href={pressItem.pdf} download>Ladda ned artikeln som PDF</a>
            <p className="checkout-note">PDF, två sidor. Originalmaterial från publiceringen.</p>
          </div>
          <div className="press-pages">
            <a href={pressItem.pageOne} aria-label="Öppna sida ett av pressklippet i full storlek">
              <img src={pressItem.pageOne} width="375" height="520" alt={`Sida ett av pressklippet ${pressItem.headline}`} />
            </a>
            <a href={pressItem.pageTwo} aria-label="Öppna sida två av pressklippet i full storlek">
              <img src={pressItem.pageTwo} width="375" height="520" alt={`Sida två av pressklippet ${pressItem.headline}`} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Bokomslag</p><h2>Aktuella titlar</h2><p>Omlagen visas för redaktionell information. Kontakta förlaget innan de används i annat material.</p></div>
          <div className="media-download-grid">
            {books.map((book) => (
              <article key={book.slug}>
                <img src={book.cover} width={book.coverWidth} height={book.coverHeight} loading="lazy" alt={`Omslag till ${book.title}`} />
                <h3>{book.title}</h3>
                <a className="text-link" href={book.cover} download>Ladda ned omslaget <span aria-hidden="true">↓</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-card">
          <div><p className="eyebrow">Mediekontakt</p><h2>Nadja C Rahmings</h2></div>
          <div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <p>Hör av dig för intervjuförfrågningar, ytterligare information eller tillstånd att använda pressbilder.</p>
          </div>
        </div>
      </section>
    </>
  );
}
