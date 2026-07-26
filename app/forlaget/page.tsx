import { JsonLd } from "@/components/Site";
import { PageHero } from "@/components/Site";
import { VideoPoster } from "@/components/Site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Om Boosta Förlag och Nadja C Rahmings",
  description:
    "Boosta Förlag är ett fristående specialistförlag i Hedemora, grundat av journalisten och författaren Nadja C Rahmings.",
  path: "/forlaget",
});

export default function PublisherPage() {
  const founder = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nadja C Rahmings",
    url: `${site.url}/forlaget/`,
    image: `${site.url}/assets/optimized/nadja-rahmings.webp`,
    jobTitle: "Journalist, författare och strategisk kommunikatör",
    founder: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero eyebrow="Om förlaget" title="Vi gör kunskap begriplig och användbar." lead="Boosta Förlag är ett fristående specialistförlag i Hedemora. Vi ger ut personliga och praktiska faktaböcker och utvecklar kunskap som hjälper människor och organisationer att fatta bättre beslut." />
      <section className="section section-compact-top">
        <div className="shell feature-grid feature-grid-reverse">
          <div>
            <p className="eyebrow">Grundare</p>
            <h2>Grundat av Nadja C Rahmings</h2>
            <p className="lead-small">
              Nadja C Rahmings är journalist, författare och strategisk kommunikatör. Under mer
              än 25 år har hon arbetat med att förklara komplexa frågor och göra kunskap
              relevant i människors vardag.
            </p>
            <p>
              Hon har skrivit faktaböcker, bland annat en rasbok om Chihuahua och en vinguide,
              samt läromedelsserien Natur &amp; Miljöpärmen. Serien behandlar miljö, klimat och
              hållbarhet och har hittills lästs av cirka 2,5 miljoner elever.
            </p>
            <a className="button" href={site.founderSite} target="_blank" rel="noopener noreferrer">
              Läs mer om Nadja på Text and Web <span aria-hidden="true">↗</span>
              <span className="sr-only"> (extern webbplats)</span>
            </a>
          </div>
          <div className="portrait-frame">
            <img src="/assets/optimized/nadja-rahmings.webp" width="375" height="531" loading="lazy" alt="Porträtt av Boosta Förlags grundare Nadja C Rahmings" />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Vår riktning</p><h2>Vad vi vill åstadkomma</h2></div>
          <div className="principles-grid">
            <article><span>01</span><h3>Verklig erfarenhet</h3><p>Verklig erfarenhet framför tomma teorier.</p></article>
            <article><span>02</span><h3>Tydligt språk</h3><p>Tydligt språk utan att förenkla bort det viktiga.</p></article>
            <article><span>03</span><h3>Handling</h3><p>Kunskap som leder till beslut och handling.</p></article>
            <article><span>04</span><h3>Nya format</h3><p>Nya format när de gör berättelsen mer användbar.</p></article>
          </div>
        </div>
      </section>

      <section className="section growth-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Så bygger vi Boosta</p>
            <h2>Ett förlag med flera vägar till nytta och tillväxt</h2>
            <p className="lead">
              Kärnan är böckerna. Runt dem kan Boosta bygga föreläsningar, coaching, arbetsmaterial,
              redaktionella samarbeten och interaktiva format – utan att förlora den tydliga profilen.
            </p>
          </div>
          <div className="growth-grid">
            <article><h3>En fokuserad utgivning</h3><p>Praktiska titlar inom skola, ledarskap, föräldrakunskap och andra områden där erfarenhet behöver bli begriplig och användbar.</p></article>
            <article><h3>Kunskap för verksamheter</h3><p>Böcker i flera exemplar, föreläsningar, coaching, workshops och material för skolor, kommuner och organisationer.</p></article>
            <article><h3>Utveckling och partnerskap</h3><p>Nya guider, rapporter och digitala format som tas fram tillsammans med experter, finansiärer och relevanta samarbetspartner.</p></article>
          </div>
          <a className="button" href="/for-skolor-organisationer/">För skolor och organisationer</a>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell location-band">
          <div>
            <p className="eyebrow">Hedemora, Dalarna</p>
            <h2>Lokal förankring, nationell räckvidd</h2>
          </div>
          <p className="lead-small">
            Boosta Förlag har sin bas i Hedemora. Därifrån kan förlaget utveckla böcker och projekt
            med lokal närvaro, samtidigt som försäljning, samarbeten och digitala format riktas till
            läsare och organisationer i hela Sverige.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell lab-grid">
          <div>
            <p className="eyebrow">Interaktiva format</p>
            <h2>Framtidens bok kan vara mer än text</h2>
            <p className="lead-small">
              EPUB3 och mobilanpassade böcker kan kombinera text med bild, ljud, video, länkar
              och interaktiv navigering. Formatet är intressant när det hjälper läsaren att
              förstå, hitta och använda information i rätt ögonblick.
            </p>
            <p>Travel in Stockholm visar hur en interaktiv mobilguide kan fungera i praktiken.</p>
          </div>
          <VideoPoster />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <h2>Har du en fråga om böcker, föreläsningar, pressmaterial eller ett möjligt samarbete?</h2>
          <a className="button" href="/kontakt/">Kontakta Boosta Förlag</a>
        </div>
      </section>
      <JsonLd data={founder} />
    </>
  );
}
