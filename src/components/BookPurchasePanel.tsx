import type { Book } from '@/content/books/books';
import { ResponsiveImage } from './ResponsiveImage';
import { ButtonLink } from './ButtonLink';

export function BookPurchasePanel({ book, compact = false }: { book: Book; compact?: boolean }) {
  return (
    <aside className={`purchase-panel ${compact ? 'purchase-panel--compact' : ''}`} aria-label={`Köp ${book.title}`}>
      {compact ? (
        <ResponsiveImage
          avif={book.coverAvif}
          webp={book.coverWebp}
          fallback={book.coverOriginal}
          alt={`Omslag till ${book.title} av ${book.author}`}
          width={book.width}
          height={book.height}
          sizes="110px"
        />
      ) : null}
      <div>
        <p className="book-author">{book.author}</p>
        <h2>{book.title}</h2>
        <p className="book-price">{book.priceSek} kr</p>
        <ButtonLink href={book.checkoutUrl} external>
          Köp {book.title.startsWith('Rektor') ? 'Rektor' : 'Skolvalet'} – {book.priceSek} kr
        </ButtonLink>
        <p className="checkout-note">Kassan hanteras externt av Stripe.</p>
      </div>
    </aside>
  );
}
