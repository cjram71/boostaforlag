import { PageHero } from "@/components/Site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Kontakta Boosta Förlag",
  description: "Kontakta Boosta Förlag om böcker, beställningar, pressmaterial, föreläsningar eller samarbeten.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Kontakta Boosta Förlag" lead="Har du frågor om böckerna, en beställning, pressmaterial, föreläsningar eller ett möjligt samarbete? Hör gärna av dig." />
      <section className="section section-compact-top">
        <div className="shell contact-grid">
          <article>
            <p className="eyebrow">E-post</p>
            <h2>Skriv till oss</h2>
            <p>E-post är det bästa sättet att beskriva ditt ärende och bifoga relevanta uppgifter.</p>
            <a className="button" href={`mailto:${site.email}`}>{site.email}</a>
          </article>
          <article>
            <p className="eyebrow">Telefon</p>
            <h2>Ring förlaget</h2>
            <p>För kortare frågor går det bra att ringa direkt.</p>
            <a className="text-link contact-phone" href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          </article>
          <article id="malla">
            <p className="eyebrow">Malla Taipale</p>
            <h2>Föreläsning eller coaching</h2>
            <p>Beskriv organisation, målgrupp och vad ni vill få hjälp med så återkommer förlaget.</p>
            <a className="button button-secondary" href={`mailto:${site.email}?subject=Förfrågan om Malla Taipale`}>Skicka en förfrågan</a>
          </article>
        </div>
      </section>
      <section className="section section-white">
        <div className="shell reading-width">
          <h2>Text and Web</h2>
          <p>Nadja C Rahmings övriga journalistiska, strategiska och kommunikativa arbete finns på Text and Web.</p>
          <a className="text-link" href={site.founderSite} target="_blank" rel="noopener noreferrer">Besök Text and Web <span aria-hidden="true">↗</span><span className="sr-only"> (extern webbplats)</span></a>
        </div>
      </section>
    </>
  );
}
