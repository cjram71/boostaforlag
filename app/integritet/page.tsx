import { PageHero } from "@/components/Site";
import { createMetadata, site } from "@/data/site";

export const metadata = createMetadata({
  title: "Integritet – Boosta Förlag",
  description: "Information om hur Boosta Förlags webbplats hanterar personuppgifter och externa tjänster.",
  path: "/integritet",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Integritet" lead="Den här webbplatsen samlar inte in personuppgifter genom formulär, analysverktyg eller annonsering." />
      <section className="section section-compact-top"><div className="shell prose">
        <h2>Kontakt via e-post och telefon</h2>
        <p>När du själv kontaktar Boosta Förlag via e-post eller telefon behandlas de uppgifter du lämnar för att kunna svara på ditt ärende.</p>
        <h2>Köp via Stripe</h2>
        <p>Köpknapparna leder till en extern kassasida hos Stripe. Stripes egna villkor och integritetsinformation gäller när du lämnar Boosta Förlags webbplats.</p>
        <h2>YouTube</h2>
        <p>Videon laddas inte förrän du aktivt väljer att spela den. Därefter används YouTubes integritetsförbättrade domän.</p>
        <h2>Frågor</h2>
        <p>Kontakta <a href={`mailto:${site.email}`}>{site.email}</a> om du har frågor om hur dina uppgifter hanteras.</p>
      </div></section>
    </>
  );
}
