import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { ButtonLink } from '@/components/ButtonLink';
import { BookPurchasePanel } from '@/components/BookPurchasePanel';
import { JsonLd } from '@/components/JsonLd';
import { getBook } from '@/content/books/books';
import { malla } from '@/content/people/people';
import { site } from '@/data/site';

const book = getBook('skolvalet-rad-till-foraldrar');
export const metadata: Metadata = { title: 'Skolvalet – Råd till föräldrar | Malla Taipale', description: 'Praktisk vägledning av Malla Taipale för föräldrar som ska välja eller byta grundskola.', alternates: { canonical: `/bocker/${book.slug}/` }, openGraph: { title: book.title, description: book.shortDescription, url: `/bocker/${book.slug}/` } };

export default function SkolvaletPage() {
  return (
    <>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Book', name: book.title, author: { '@type': 'Person', name: book.author }, inLanguage: 'sv-SE', image: `${site.domain}${book.coverOriginal}`, offers: { '@type': 'Offer', price: book.priceSek, priceCurrency: 'SEK', url: book.checkoutUrl } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Hem', item: site.domain }, { '@type': 'ListItem', position: 2, name: 'Böcker', item: `${site.domain}/bocker/` }, { '@type': 'ListItem', position: 3, name: book.title }] },
      ]} />
      <header className="page-hero"><Container><Breadcrumbs items={[{ href: '/', label: 'Hem' }, { href: '/bocker/', label: 'Böcker' }, { label: book.title }]} /><div className="product-hero"><div className="product-cover"><ResponsiveImage avif={book.coverAvif} webp={book.coverWebp} fallback={book.coverOriginal} alt={`Omslag till ${book.title} av ${book.author}`} width={book.width} height={book.height} priority sizes="(min-width: 48rem) 40vw, 90vw" /></div><div className="product-summary"><p className="book-author">{book.author}</p><h1>{book.title}</h1><p className="lead">{book.shortDescription}</p><p className="book-price">{book.priceSek} kr</p><ButtonLink href={book.checkoutUrl} external>Köp Skolvalet – {book.priceSek} kr</ButtonLink><p className="checkout-note">Du fortsätter till en extern kassa som hanteras av Stripe.</p></div></div></Container></header>
      <section className="section--surface"><Container className="prose-grid"><article className="prose"><h2>När ditt barn ska välja eller byta skola</h2>{book.longDescription.map((p) => <p key={p}>{p}</p>)}<h2>Boken tar upp</h2><ul>{book.highlights.map((item) => <li key={item}>{item}</li>)}</ul><h2>För vem?</h2><p>{book.audience}</p><div className="author-teaser"><ResponsiveImage avif={malla.imageAvif} webp={malla.imageWebp} fallback={malla.imageOriginal} alt="Porträtt av Malla Taipale" width={malla.width} height={malla.height} sizes="160px" /><div><p className="eyebrow">Om författaren</p><h2>Malla Taipale</h2><p>Malla Taipale har nära två decenniers erfarenhet som grundskolerektor och delar sina erfarenheter genom böcker, coaching och föreläsningar.</p><ButtonLink href="/malla-taipale/" variant="text">Läs mer om Malla</ButtonLink></div></div><BookPurchasePanel book={book} compact /></article><BookPurchasePanel book={book} /></Container></section>
    </>
  );
}
