import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { BookCard } from '@/components/BookCard';
import { ButtonLink } from '@/components/ButtonLink';
import { books } from '@/content/books/books';

export const metadata: Metadata = {
  title: 'Böcker',
  description: 'Personliga och praktiska faktaböcker från Boosta Förlag om skolledarskap och skolval.',
  alternates: { canonical: '/bocker/' },
  openGraph: { title: 'Böcker – Boosta Förlag', description: 'Praktiska faktaböcker skrivna av människor med verklig erfarenhet.', url: '/bocker/' },
};

export default function BooksPage() {
  return (
    <>
      <header className="page-hero"><Container><p className="eyebrow">Boosta Förlag</p><h1>Böcker från Boosta Förlag</h1><p className="lead">Personliga och praktiska faktaböcker skrivna av människor med verklig erfarenhet.</p></Container></header>
      <section className="section--surface"><Container><div className="books-grid">{books.map((book) => <BookCard key={book.slug} book={book} />)}</div></Container></section>
      <section><Container className="reading"><p className="eyebrow">Flera exemplar eller samarbete</p><h2>För skolor, kommuner och organisationer</h2><p className="lead">Är ni intresserade av flera exemplar, en föreläsning eller ett samarbete? Kontakta Boosta Förlag för mer information.</p><ButtonLink href="/kontakt/">Kontakta förlaget</ButtonLink></Container></section>
    </>
  );
}
