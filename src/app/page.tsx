import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ButtonLink } from '@/components/ButtonLink';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { BookCard } from '@/components/BookCard';
import { SectionHeading } from '@/components/SectionHeading';
import { QuoteBlock } from '@/components/QuoteBlock';
import { VideoPoster } from '@/components/VideoPoster';
import { JsonLd } from '@/components/JsonLd';
import { books } from '@/content/books/books';
import { malla, nadja } from '@/content/people/people';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Boosta Förlag – Praktiska böcker om skola och ledarskap',
  description: 'Boosta Förlag ger ut praktiska faktaböcker om skola, skolledarskap och skolval. Läs om Malla Taipales böcker och köp dem direkt online.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Boosta Förlag – Praktiska böcker om skola och ledarskap', description: 'Kunskap som går att förstå – och använda.', url: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.domain, inLanguage: 'sv-SE' },
        { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.domain, email: site.email, telephone: site.telephoneDisplay, founder: { '@type': 'Person', name: 'Nadja C Rahmings' } },
      ]} />
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Boosta Förlag</p>
            <h1>Kunskap som går att förstå – och använda</h1>
            <p className="lead">Vi ger ut personliga och praktiska faktaböcker för människor som vill förstå mer, fatta bättre beslut och skapa förändring. Våra aktuella titlar handlar om skolans värld – om att leda en skola och om att välja rätt skola för sitt barn.</p>
            <div className="button-row">
              <ButtonLink href="/bocker/">Se våra böcker</ButtonLink>
              <ButtonLink href="/forlaget/" variant="secondary">Om Boosta Förlag</ButtonLink>
            </div>
          </div>
          <div className="hero-books" aria-label="Boosta Förlags två aktuella böcker">
            <span className="hero-orbit" aria-hidden="true" />
            <ResponsiveImage className="hero-book hero-book--one" avif={books[0].coverAvif} webp={books[0].coverWebp} fallback={books[0].coverOriginal} alt={`Omslag till ${books[0].title} av Malla Taipale`} width={750} height={1214} sizes="(min-width: 68rem) 336px, 62vw" priority />
            <ResponsiveImage className="hero-book hero-book--two" avif={books[1].coverAvif} webp={books[1].coverWebp} fallback={books[1].coverOriginal} alt={`Omslag till ${books[1].title} av Malla Taipale`} width={750} height={1214} sizes="(min-width: 68rem) 336px, 62vw" priority />
          </div>
        </Container>
      </section>
      <div className="trust-strip">
        <Container>
          <ul className="trust-list">
            <li>Nära 20 år som rektor</li>
            <li>2,5 miljoner elever har läst Nadjas läromedel</li>
            <li>Praktiska böcker för rektorer och föräldrar</li>
          </ul>
        </Container>
      </div>
      <section className="section--surface">
        <Container>
          <SectionHeading eyebrow="Aktuella titlar" title="Böcker om skolans värld" intro="Två böcker byggda på verklig erfarenhet – för dig som leder en skola eller står inför ett viktigt skolval." />
          <div className="books-grid">{books.map((book) => <BookCard key={book.slug} book={book} />)}</div>
        </Container>
      </section>
      <section className="section--ink">
        <Container className="feature-grid">
          <div className="portrait-frame">
            <ResponsiveImage avif={malla.imageAvif} webp={malla.imageWebp} fallback={malla.imageOriginal} alt="Porträtt av Malla Taipale" width={malla.width} height={malla.height} sizes="(min-width: 48rem) 45vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow">Författare, skolledare och föreläsare</p>
            <h2>Rektorn som vände skolor</h2>
            <p className="lead">Under nära två decennier som grundskolerektor arbetade Malla Taipale med skolor som stod inför stora utmaningar. Hon blev känd för sitt raka, engagerade och lösningsinriktade ledarskap. I dag delar hon sina erfarenheter genom böcker, coaching och föreläsningar.</p>
            <QuoteBlock quote={malla.quote} attribution="Malla Taipale" />
            <ButtonLink href="/malla-taipale/" variant="secondary">Läs mer om Malla</ButtonLink>
          </div>
        </Container>
      </section>
      <section className="section--paper-deep">
        <Container className="feature-grid feature-grid--reverse">
          <div className="portrait-frame">
            <ResponsiveImage avif={nadja.imageAvif} webp={nadja.imageWebp} fallback={nadja.imageOriginal} alt="Porträtt av Boosta Förlags grundare Nadja C Rahmings" width={nadja.width} height={nadja.height} sizes="(min-width: 48rem) 45vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow">Boosta Förlag</p>
            <h2>Ett förlag för användbar kunskap</h2>
            <p className="lead">Boosta Förlag grundades av författaren och journalisten Nadja C Rahmings. Hennes arbete har under mer än 25 år handlat om att göra komplex kunskap begriplig, relevant och möjlig att använda.</p>
            <div className="proof-card"><strong>Läromedelsserien Natur &amp; Miljöpärmen har lästs av cirka 2,5 miljoner elever.</strong></div>
            <div style={{ marginTop: '1.5rem' }}><ButtonLink href="/forlaget/">Om förlaget</ButtonLink></div>
          </div>
        </Container>
      </section>
      <section className="section--teal">
        <Container className="lab-grid">
          <div>
            <p className="eyebrow">Boosta Lab</p>
            <h2>Nya sätt att berätta</h2>
            <p className="lead">En bok behöver inte stanna vid tryckt text. Boosta utforskar interaktiva och mobilanpassade format där text kan kombineras med bild, ljud, video och länkar.</p>
            <h3>Travel in Stockholm</h3>
            <p>En mobil guide till Stockholms kollektivtrafik visar hur ett interaktivt bokformat kan hjälpa resenären i rätt ögonblick.</p>
            <ButtonLink href="#travel-video" variant="secondary">Se exemplet</ButtonLink>
          </div>
          <div id="travel-video"><VideoPoster /></div>
        </Container>
      </section>
      <section className="final-cta">
        <Container>
          <h2>Kunskap blir värdefull först när den går att använda.</h2>
          <div className="button-row">
            <ButtonLink href="/bocker/">Utforska böckerna</ButtonLink>
            <ButtonLink href="/kontakt/" variant="secondary">Kontakta Boosta Förlag</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
