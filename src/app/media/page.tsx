import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PressCard } from '@/components/PressCard';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { books } from '@/content/books/books';
import { malla } from '@/content/people/people';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Press och media', description: 'Pressmaterial och artiklar om Boosta Förlag, Malla Taipale och böckerna.', alternates: { canonical: '/media/' }, openGraph: { title: 'Press och media – Boosta Förlag', description: 'Pressmaterial om Boosta Förlag och Malla Taipale.', url: '/media/' } };

export default function MediaPage() {
  return (
    <><header className="page-hero"><Container><p className="eyebrow">Pressrum</p><h1>Press och media</h1><p className="lead">Här finns pressmaterial och artiklar om Boosta Förlag, Malla Taipale och böckerna.</p></Container></header><section className="section--surface"><Container><PressCard /></Container></section><section><Container><p className="eyebrow">Bildmaterial</p><h2>Bokomslag och porträtt</h2><p className="lead">Bilderna visas för orientering. Användnings- och nedladdningsrättigheter för högupplösta pressbilder behöver bekräftas med förlaget.</p><div className="values-grid"><article className="value-item"><ResponsiveImage avif={books[0].coverAvif} webp={books[0].coverWebp} fallback={books[0].coverOriginal} alt={`Omslag till ${books[0].title}`} width={750} height={1214} sizes="280px" /><h3>{books[0].title}</h3></article><article className="value-item"><ResponsiveImage avif={books[1].coverAvif} webp={books[1].coverWebp} fallback={books[1].coverOriginal} alt={`Omslag till ${books[1].title}`} width={750} height={1214} sizes="280px" /><h3>{books[1].title}</h3></article><article className="value-item"><ResponsiveImage avif={malla.imageAvif} webp={malla.imageWebp} fallback={malla.imageOriginal} alt="Porträtt av Malla Taipale" width={malla.width} height={malla.height} sizes="280px" /><h3>Malla Taipale</h3></article></div></Container></section><section className="section--ink"><Container className="reading"><p className="eyebrow">Mediekontakt</p><h2>Nadja C Rahmings</h2><p><a href={`mailto:${site.email}`}>{site.email}</a><br /><a href={`tel:${site.telephoneHref}`}>{site.telephoneDisplay}</a></p><p>Ange alltid titel, författare och Boosta Förlag vid publicering av bokomslag eller annat godkänt material.</p></Container></section></>
  );
}
