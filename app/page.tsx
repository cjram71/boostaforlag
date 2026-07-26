import { BookCard } from "@/components/Site";
import { JsonLd } from "@/components/Site";
import { VideoPoster } from "@/components/Site";
import { books } from "@/data/site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Boosta Förlag – Praktiska böcker och kunskap för skolan",
  description:
    "Boosta Förlag i Hedemora ger ut praktiska faktaböcker om skola, skolledarskap och skolval och utvecklar kunskap för skolor och organisationer.",
  path: "/",
});

const offers = [
  {
    number: "01",
    title: "Böcker för hela verksamheten",
    text: "Beställ flera exemplar till ledningsgrupper, utbildningar, bibliotek, föräldramöten eller andra gemensamma satsningar.",
  },
  {
    number: "02",
    title: "Föreläsning och coaching",
    text: "Kombinera Malla Taipales böcker med ett samtal, en föreläsning eller coaching för skolledare och organisationer.",
  },
  {
    number: "03",
    title: "Kunskap som blir ett verktyg",
    text: "Prata med oss om rapporter, guider, arbetsmaterial och redaktionella samarbeten som gör expertkunskap lättare att använda.",
  },
];

const developmentAreas = [
  {
    title: "Läsning och läsförståelse",
    text: "Hur skolor kan bygga läsvana, ordförråd, samtal om text och förståelse i alla ämnen.",
  },
  {
    title: "Behöriga lärare som stannar",
    text: "Hur erfarna och utlandsutbildade lärare kan nå svensk behörighet och samtidigt fortsätta bidra i skolan.",
  },
  {
    title: "Ledarskap och skolval",
    text: "Hur rektorer, lärare och föräldrar kan få tydligare stöd inför svåra beslut och långsiktig förändring.",
  },
];

export default function HomePage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/bocker/${book.slug}/`,
      name: book.title,
    })),
  };

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Boosta Förlag · Hedemora, Dalarna</p>
            <h1>Kunskap som går att förstå – och använda</h1>
            <p className="lead">
              Vi ger ut personliga och praktiska faktaböcker och utvecklar kunskap för människor,
              skolor och organisationer som vill förstå mer, fatta bättre beslut och skapa förändring.
            </p>
            <div className="button-row">
              <a className="button" href="/bocker/">Se våra böcker</a>
              <a className="button button-secondary" href="/for-skolor-organisationer/">För skolor och organisationer</a>
            </div>
          </div>
          <div className="hero-covers" aria-label="Aktuella böcker från Boosta Förlag">
            <img
              className="cover-rektor"
              src={books[0].cover}
              srcSet={books[0].coverSrcSet}
              sizes="(max-width: 620px) 47vw, (max-width: 860px) 235px, 275px"
              width={books[0].coverWidth}
              height={books[0].coverHeight}
              decoding="async"
              alt={`Omslag till ${books[0].title}`}
            />
            <img
              className="cover-skolvalet"
              src={books[1].cover}
              srcSet={books[1].coverSrcSet}
              sizes="(max-width: 620px) 47vw, (max-width: 860px) 235px, 275px"
              width={books[1].coverWidth}
              height={books[1].coverHeight}
              decoding="async"
              alt={`Omslag till ${books[1].title}`}
            />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Erfarenhet och inriktning">
        <div className="shell trust-grid">
          <p><strong>Nära 20 år</strong><span>som rektor</span></p>
          <p><strong>2,5 miljoner elever</strong><span>har läst Nadjas läromedel</span></p>
          <p><strong>Hedemora, Dalarna</strong><span>lokal bas och nationell ambition</span></p>
          <p><strong>Praktisk kunskap</strong><span>för skola, ledarskap och vardag</span></p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Aktuella titlar</p>
            <h2>Böcker om skolans värld</h2>
            <p className="lead">
              Två böcker byggda på verklig erfarenhet – för dig som leder en skola eller står
              inför ett viktigt skolval.
            </p>
          </div>
          <div className="book-grid">
            {books.map((book) => <BookCard key={book.slug} book={book} />)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell feature-grid">
          <div className="portrait-frame">
            <img src="/assets/optimized/malla-taipale.webp" width="720" height="960" loading="lazy" decoding="async" alt="Porträtt av Malla Taipale" />
          </div>
          <div>
            <p className="eyebrow">Författare, skolledare och föreläsare</p>
            <h2>Rektorn som vände skolor</h2>
            <p className="lead-small">
              Under nära två decennier som grundskolerektor arbetade Malla Taipale med skolor
              som stod inför stora utmaningar. Hon blev känd för sitt raka, engagerade och
              lösningsinriktade ledarskap. I dag delar hon sina erfarenheter genom böcker,
              coaching och föreläsningar.
            </p>
            <blockquote>
              <p>Jag har varit rak och ganska sträng i mitt arbete men alltid gjort jobbet med stor kärlek och aldrig någonsin nedvärderat mina elever.</p>
              <cite>– Malla Taipale</cite>
            </blockquote>
            <a className="text-link" href="/malla-taipale/">Läs mer om Malla <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="section collaboration-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">För skolor och organisationer</p>
            <h2>Från en bok till verklig förändring</h2>
            <p className="lead">
              Boosta ska inte bara sälja böcker. Vi vill hjälpa verksamheter att använda kunskapen
              i samtal, utbildning, ledarskap och praktiskt utvecklingsarbete.
            </p>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article key={offer.number}>
                <span>{offer.number}</span>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
          <a className="button" href="/for-skolor-organisationer/">Se möjligheterna</a>
        </div>
      </section>

      <section className="section publisher-band">
        <div className="shell publisher-grid">
          <div><p className="eyebrow eyebrow-light">Förlaget</p><h2>Ett förlag för användbar kunskap</h2></div>
          <div>
            <p className="lead-small">
              Boosta Förlag är ett fristående specialistförlag med bas i Hedemora. Förlaget
              grundades av författaren och journalisten Nadja C Rahmings, vars arbete under mer än
              25 år har handlat om att göra komplex kunskap begriplig, relevant och möjlig att använda.
            </p>
            <p>Läromedelsserien Natur &amp; Miljöpärmen har lästs av cirka 2,5 miljoner elever.</p>
            <a className="button button-light" href="/forlaget/">Om förlaget</a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Nästa utvecklingsområden</p>
            <h2>Frågor vi vill hjälpa skolan att lösa</h2>
            <p className="lead">
              Boosta undersöker nya böcker, rapporter, samtal och verktyg inom områden där skolor,
              lärare, elever och föräldrar behöver konkret stöd.
            </p>
          </div>
          <div className="focus-grid">
            {developmentAreas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/for-skolor-organisationer/#utvecklingsomraden">Läs om vår riktning <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section">
        <div className="shell lab-grid">
          <div>
            <p className="eyebrow">Boosta Lab</p>
            <h2>Nya sätt att berätta</h2>
            <p className="lead-small">
              En bok behöver inte stanna vid tryckt text. Boosta utforskar interaktiva och
              mobilanpassade format där text kan kombineras med bild, ljud, video och länkar.
            </p>
            <h3>Travel in Stockholm</h3>
            <p>En mobil guide till Stockholms kollektivtrafik visar hur ett interaktivt bokformat kan hjälpa resenären i rätt ögonblick.</p>
          </div>
          <VideoPoster />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <h2>Kunskap blir värdefull först när den går att använda.</h2>
          <div className="button-row">
            <a className="button" href="/bocker/">Utforska böckerna</a>
            <a className="button button-secondary" href="/kontakt/">Kontakta Boosta Förlag</a>
          </div>
        </div>
      </section>
      <JsonLd data={itemList} />
    </>
  );
}
