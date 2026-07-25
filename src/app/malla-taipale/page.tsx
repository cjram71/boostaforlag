import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { QuoteBlock } from '@/components/QuoteBlock';
import { BookCard } from '@/components/BookCard';
import { ButtonLink } from '@/components/ButtonLink';
import { PressCard } from '@/components/PressCard';
import { JsonLd } from '@/components/JsonLd';
import { malla } from '@/content/people/people';
import { books } from '@/content/books/books';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Malla Taipale – Författare och tidigare rektor', description: 'Läs om Malla Taipale, rektorn som vände skolor och nu skriver böcker, coachar rektorer och föreläser.', alternates: { canonical: '/malla-taipale/' }, openGraph: { title: 'Malla Taipale – Författare och tidigare rektor', description: 'Rektorn som vände skolor.', url: '/malla-taipale/' } };

export default function MallaPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Person', name: malla.name, jobTitle: 'Författare och tidigare grundskolerektor', url: `${site.domain}/malla-taipale/`, image: `${site.domain}${malla.imageOriginal}`, worksFor: { '@type': 'Organization', name: site.name } }} />
      <header className="page-hero"><Container className="feature-grid"><div><p className="eyebrow">Författare, skolledare och föreläsare</p><h1>Malla Taipale</h1><p className="lead">Rektorn som vände skolor</p><p>Under sina nära två decennier som grundskolerektor lyckades Malla Taipale vända utvecklingen på skolor med stora utmaningar. Hon blev en efterfrågad föreläsare och uppmärksammades även i finska riksmedier.</p></div><div className="portrait-frame"><ResponsiveImage avif={malla.imageAvif} webp={malla.imageWebp} fallback={malla.imageOriginal} alt="Porträtt av Malla Taipale" width={malla.width} height={malla.height} priority sizes="(min-width: 48rem) 45vw, 100vw" /></div></Container></header>
      <section className="section--surface"><Container className="reading"><p className="eyebrow">Bakgrund</p><h2>Ett långt liv i skolans värld</h2><p>Malla var med och startade Sverigefinska skolan i Upplands Väsby. Skolan blev uppskattad och framgångsrik. Därefter arbetade hon som rektor i kommunala skolor, däribland skolor som stod inför stora problem och utmaningar.</p><p>Hennes ledarskap var rakt, strukturerat och omtänksamt. Målet var att samla lärare och elever kring en gemensam riktning och skapa förutsättningar för förändring.</p><QuoteBlock quote={malla.quote} attribution="Malla Taipale" /></Container></section>
      <section><Container><p className="eyebrow">Författarskap</p><h2>Böcker av Malla Taipale</h2><div className="books-grid">{books.map((book) => <BookCard key={book.slug} book={book} />)}</div></Container></section>
      <section className="section--ink"><Container className="reading"><p className="eyebrow">Erfarenhet som gör skillnad</p><h2>Coaching och föreläsningar</h2><p className="lead">I dag skriver Malla böcker, coachar andra rektorer och föreläser om skolledarskap, skolutveckling och skolval.</p><ButtonLink href="/kontakt/?amne=forelasning" variant="secondary">Fråga om föreläsning eller coaching</ButtonLink></Container></section>
      <section className="section--surface"><Container><p className="eyebrow">Press</p><h2>Malla i media</h2><PressCard /></Container></section>
    </>
  );
}
