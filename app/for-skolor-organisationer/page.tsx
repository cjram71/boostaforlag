import { JsonLd } from "@/components/Site";
import { PageHero } from "@/components/Site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "För skolor och organisationer – Boosta Förlag",
  description:
    "Böcker, föreläsningar, coaching och redaktionella samarbeten för skolor, kommuner och organisationer som vill göra kunskap användbar.",
  path: "/for-skolor-organisationer",
});

const offers = [
  {
    title: "Böcker i flera exemplar",
    text: "Använd böckerna i ledningsgrupper, rektorsutbildningar, bibliotek, föräldramöten, konferenser eller gemensamma lässatsningar.",
    action: "Fråga om en beställning",
    subject: "Förfrågan om flera böcker",
  },
  {
    title: "Malla Taipale: föreläsning och coaching",
    text: "Kombinera böckerna med erfarenhetsbaserade samtal om skolledarskap, förändringsarbete, skolval och rektorns ansvar.",
    action: "Fråga om Malla",
    subject: "Förfrågan om Malla Taipale",
  },
  {
    title: "Guider, rapporter och arbetsmaterial",
    text: "Boosta kan diskutera redaktionella samarbeten där expertkunskap omvandlas till tydliga texter, guider, rapporter eller material som en målgrupp faktiskt kan använda.",
    action: "Diskutera ett samarbete",
    subject: "Förfrågan om redaktionellt samarbete",
  },
];

const focusAreas = [
  {
    title: "Läsning och läsförståelse",
    text: "Praktiska modeller för daglig läsning, ordförråd, textdiskussioner, ämnesspråk och tidigt stöd till elever som halkar efter.",
  },
  {
    title: "Behörighet och lärarförsörjning",
    text: "Idéer om hur erfarna och utlandsutbildade lärare kan valideras, komplettera sin utbildning och stanna kvar i skolan under vägen mot svensk behörighet.",
  },
  {
    title: "Skolledarskap och arbetsmiljö",
    text: "Kunskap om hur rektorer kan skapa riktning, kontinuitet, arbetsro och gemensamt ansvar i verksamheter med stora utmaningar.",
  },
  {
    title: "Föräldrar och skolval",
    text: "Tydligt stöd som hjälper vårdnadshavare att förstå skolan, ställa bättre frågor och fatta mer genomtänkta beslut.",
  },
];

export default function OrganizationsPage() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kunskap för skolor och organisationer",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Sverige",
    serviceType: "Böcker, föreläsningar, coaching och redaktionella kunskapssamarbeten",
  };

  return (
    <>
      <PageHero
        eyebrow="För skolor, kommuner och organisationer"
        title="Kunskap som går att använda i verkligheten"
        lead="Boosta Förlag kombinerar böcker, erfarenhet och redaktionellt arbete för att hjälpa verksamheter att förstå problem, skapa samtal och ta nästa steg."
      />

      <section className="section section-compact-top">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Möjliga samarbeten</p>
            <h2>Börja med behovet – inte formatet</h2>
            <p className="lead-small">
              En organisation kan behöva böcker till en utbildning, en föreläsare till en studiedag
              eller hjälp att förvandla expertkunskap till ett begripligt material. Vi börjar med målgruppen,
              situationen och vad kunskapen ska leda till.
            </p>
          </div>
          <div className="service-grid">
            {offers.map((offer) => (
              <article key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
                <a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent(offer.subject)}`}>{offer.action} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="utvecklingsomraden" className="section section-white">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Utvecklingsområden</p>
            <h2>Frågor där skolan behöver mer än ännu en allmän rapport</h2>
            <p className="lead">
              Boosta undersöker hur forskning, erfarenhet och tydlig kommunikation kan bli konkreta
              böcker, rapporter, guider, workshops och pilotprojekt inom fyra områden.
            </p>
          </div>
          <div className="focus-grid focus-grid-four">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
          <p className="development-note">
            Områdena beskriver Boosta Förlags utvecklingsriktning. Exakta produkter och projekt tas fram först när målgrupp, samarbetspartner och finansiering är tydliga.
          </p>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Så kan ett samarbete börja</p>
            <h2>Tre enkla steg</h2>
          </div>
          <ol className="process-grid">
            <li><span>1</span><div><h3>Beskriv behovet</h3><p>Vilken målgrupp gäller det, vad fungerar inte i dag och vilket resultat vill ni uppnå?</p></div></li>
            <li><span>2</span><div><h3>Välj rätt insats</h3><p>Vi bedömer om en bok, föreläsning, workshop, guide eller ett redaktionellt projekt passar bäst.</p></div></li>
            <li><span>3</span><div><h3>Bestäm ett tydligt nästa steg</h3><p>Ni får ett konkret förslag på omfattning, ansvar, tidsplan och kostnad innan något arbete startar.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <p className="eyebrow">Baserat i Hedemora – tillgängligt i hela Sverige</p>
            <h2>Har ni ett behov som borde bli en bok, ett samtal eller ett användbart verktyg?</h2>
          </div>
          <a className="button" href={`mailto:${site.email}?subject=${encodeURIComponent("Förfrågan från skola eller organisation")}`}>Kontakta Boosta Förlag</a>
        </div>
      </section>
      <JsonLd data={service} />
    </>
  );
}
