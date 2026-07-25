import Link from 'next/link';
import type { Book } from '@/content/books/books';
import { ResponsiveImage } from './ResponsiveImage';
import { ButtonLink } from './ButtonLink';

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="book-card">
      <Link className="book-card__cover" href={`/bocker/${book.slug}/`} aria-label={`Läs mer om ${book.title}`}>
        <ResponsiveImage
          avif={book.coverAvif}
          webp={book.coverWebp}
          fallback={book.coverOriginal}
          alt={`Omslag till ${book.title} av ${book.author}`}
          width={book.width}
          height={book.height}
          sizes="(min-width: 900px) 340px, 70vw"
        />
      </Link>
      <div className="book-card__content">
        <p className="book-author">{book.author}</p>
        <h3><Link href={`/bocker/${book.slug}/`}>{book.title}</Link></h3>
        <p>{book.shortDescription}</p>
        <p className="book-price">{book.priceSek} kr</p>
        <div className="book-card__actions">
          <ButtonLink href={`/bocker/${book.slug}/`} variant="secondary">Läs mer</ButtonLink>
          <ButtonLink href={book.checkoutUrl} external>
            Köp {book.title.startsWith('Rektor') ? 'Rektor' : 'Skolvalet'} – {book.priceSek} kr
          </ButtonLink>
        </div>
        <p className="checkout-note">Du fortsätter till säker extern betalning via Stripe.</p>
      </div>
    </article>
  );
}
