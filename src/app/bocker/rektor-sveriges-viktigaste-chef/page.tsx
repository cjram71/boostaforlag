import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { ButtonLink } from '@/components/ButtonLink';
import { QuoteBlock } from '@/components/QuoteBlock';
import { BookPurchasePanel } from '@/components/BookPurchasePanel';
import { JsonLd } from '@/components/JsonLd';
import { getBook } from '@/content/books/books';
import { malla } from '@/content/people/people';
import { site } from '@/data/site';

const book = getBook('rektor-sveriges-viktigaste-chef');
export const metadata: Metadata = { title: 'Rektor – Sveriges viktigaste chef | Malla Taipale', description: 'Malla Taipales personliga och praktiska bok om rektorns vardag, ansvar och skolledarskap.', alternates: { canonical: `/bocker/${book.slug}/` }, openGraph: { title: book.title, description: book.shortDescription, url: `/bocker/${book.slug}/` } };

export default function RektorPage() {
  return (
    <>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Book', name: book.title, author: { '@type': 'Person', name: book.author }, illustrator: { '@type': 'Person', name: book.illustrator }, inLanguage: 'sv-SE', image: `${site.domain}${book.coverOriginal}`, offers: { '@type': 'Offer', price: book.priceSek, priceCurrency: 'SEK', url: book.checkoutUrl } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Hem', item: site.domain }, { '@type': 'ListItem', position: 2, name: 'Böcker', item: `${site.domain}/bocker/` }, { '@type': 'ListItem', position: 3, name: book.title }] },
      ]} />
      <header className="page-hero"><Container><Breadcrumbs items={[{ href: '/', label: 'Hem' }, { href: '/bocker/', label: 'Böcker' }, { label: book.title }]} /><div className="product-hero"><div className="product-cover"><ResponsiveImage avif={book.coverAvif} webp={book.coverWebp} fallback={book.coverOriginal} alt={`Omslag till ${book.title} av ${book.author}`} width={book.width} height={book.height} priority sizes="(min-width: 48rem) 40vw, 90vw" /></div><div className="product-summary"><p className="book-author">{book.author}</p><h1>{book.title}</h1><p className="lead">{book.shortDescription}</p><p className="book-price">{book.priceSek} kr</p><ButtonLink href={book.checkoutUrl} external>Köp Rektor – {book.priceSek} kr</ButtonLink><p className="checkout-note">Du fortsätter till en extern kassa som hanteras av Stripe.</p></div></div></Container></header>
      <section className="section--surface"><Container className="prose-grid"><article className="prose"><h2>Om boken</h2>{book.longDescription.map((p) => <p key={p}>{p}</p>)}<h2>Du får bland annat</h2><ul>{book.highlights.map((item) => <li key={item}>{item}</li>)}</ul><h2>För vem?</h2><p>{book.audience}</p>{book.quote ? <QuoteBlock quote={book.quote} /> : null}<div className="author-teaser"><ResponsiveImage avif={malla.imageAvif} webp={malla.imageWebp} fallback={malla.imageOriginal} alt="Porträtt av Malla Taipale" width={malla.width} height={malla.height} sizes="160px" /><div><p className="eyebrow">Om författaren</p><h2>Malla Taipale</h2><p>Malla Taipale arbetade som grundskolerektor i nära två decennier och blev känd för att vända skolor med stora utmaningar.</p><ButtonLink href="/malla-taipale/" variant="text">Läs mer om Malla</ButtonLink></div></div><BookPurchasePanel book={book} compact /></article><BookPurchasePanel book={book} /></Container></section>
    </>
  );
}
