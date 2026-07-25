import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { ButtonLink } from '@/components/ButtonLink';
import { VideoPoster } from '@/components/VideoPoster';
import { JsonLd } from '@/components/JsonLd';
import { nadja } from '@/content/people/people';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Om Boosta Förlag och Nadja C Rahmings', description: 'Boosta Förlag ger ut personliga och praktiska faktaböcker som gör kunskap begriplig och användbar.', alternates: { canonical: '/forlaget/' }, openGraph: { title: 'Om Boosta Förlag', description: 'Vi gör kunskap begriplig och användbar.', url: '/forlaget/' } };

export default function PublisherPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Person', name: nadja.name, jobTitle: 'Journalist, författare och strategisk kommunikatör', url: site.founderWebsite, image: `${site.domain}${nadja.imageOriginal}`, founder: { '@type': 'Organization', name: site.name } }} />
      <header className="page-hero"><Container><p className="eyebrow">Boosta Förlag</p><h1>Om Boosta Förlag</h1><p className="lead">Vi gör kunskap begriplig och användbar.</p><p className="reading">Boosta Förlag ger ut personliga och praktiska faktaböcker som hjälper människor att förstå mer, fatta bättre beslut och omsätta kunskap i handling.</p></Container></header>
      <section className="section--surface"><Container className="feature-grid"><div className="portrait-frame"><ResponsiveImage avif={nadja.imageAvif} webp={nadja.imageWebp} fallback={nadja.imageOriginal} alt="Porträtt av Boosta Förlags grundare Nadja C Rahmings" width={nadja.width} height={nadja.height} priority sizes="(min-width: 48rem) 45vw, 100vw" /></div><div><p className="eyebrow">Grundare</p><h2>Grundat av Nadja C Rahmings</h2><p>Nadja C Rahmings är journalist, författare och strategisk kommunikatör. Under mer än 25 år har hon arbetat med att förklara komplexa frågor och göra kunskap relevant i människors vardag.</p><p>Hon har skrivit faktaböcker, bland annat en rasbok om Chihuahua och en vinguide, samt läromedelsserien Natur &amp; Miljöpärmen. Serien behandlar miljö, klimat och hållbarhet och har hittills lästs av cirka 2,5 miljoner elever.</p><ButtonLink href={site.founderWebsite} external>Läs mer om Nadja på Text and Web</ButtonLink></div></Container></section>
      <section><Container><p className="eyebrow">Vår riktning</p><h2>Vad vi vill åstadkomma</h2><div className="values-grid"><article className="value-item"><h3>Verklig erfarenhet</h3><p>Praktisk kunskap och levda erfarenheter framför tomma teorier.</p></article><article className="value-item"><h3>Tydligt språk</h3><p>Begripligt utan att förenkla bort det som faktiskt är viktigt.</p></article><article className="value-item"><h3>Handling</h3><p>Kunskap ska hjälpa människor att fatta beslut och åstadkomma förändring.</p></article><article className="value-item"><h3>Nya format</h3><p>Vi använder nya berättarformat när de gör innehållet mer användbart.</p></article></div></Container></section>
      <section className="section--teal"><Container className="lab-grid"><div><p className="eyebrow">Interaktiv publicering</p><h2>Framtidens bok kan vara mer än text</h2><p className="lead">Interaktiva EPUB3- och mobilformat kan kombinera text, bilder, ljud, video, länkar och tydlig navigation. Poängen är inte tekniken i sig, utan att ge läsaren rätt information i rätt ögonblick.</p><p><strong>Travel in Stockholm</strong> är ett konkret exempel: en mobil guide som hjälper resenärer att förstå Stockholms kollektivtrafik.</p></div><VideoPoster /></Container></section>
      <section><Container className="reading"><h2>Har du en fråga?</h2><p className="lead">Har du en fråga om våra böcker, pressmaterial, föreläsningar eller ett möjligt samarbete? Hör gärna av dig.</p><ButtonLink href="/kontakt/">Kontakta Boosta Förlag</ButtonLink></Container></section>
    </>
  );
}
