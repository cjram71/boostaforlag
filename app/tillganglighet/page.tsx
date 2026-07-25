import { PageHero } from "@/components/Site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Tillgänglighet – Boosta Förlag",
  description: "Boosta Förlags arbete med en tydlig, tangentbordsanvändbar och tillgänglig webbplats.",
  path: "/tillganglighet",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="Tillgänglighet" lead="Boosta Förlag vill att webbplatsen ska vara tydlig och användbar oavsett enhet eller hjälpmedel." />
      <section className="section section-compact-top"><div className="shell prose">
        <h2>Det här har vi gjort</h2>
        <ul>
          <li>Semantisk struktur och tydliga rubriker</li>
          <li>Tangentbordsanvändbar navigation och synliga fokusmarkeringar</li>
          <li>Textalternativ för betydelsebärande bilder</li>
          <li>Responsiv layout och stöd för textförstoring</li>
          <li>Ingen automatisk video eller rörelse</li>
        </ul>
        <h2>Rapportera ett problem</h2>
        <p>Upptäcker du ett tillgänglighetsproblem, kontakta <a href={`mailto:${site.email}`}>{site.email}</a> och beskriv sidan och problemet så tydligt som möjligt.</p>
      </div></section>
    </>
  );
}
