import { BookCard } from "@/components/Site";
import { PageHero } from "@/components/Site";
import { books } from "@/data/site";
import { createMetadata } from "@/data/site";

export const metadata = createMetadata({
  title: "Böcker – Boosta Förlag",
  description:
    "Upptäck Boosta Förlags personliga och praktiska faktaböcker om skolledarskap och skolval.",
  path: "/bocker",
});

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Utgivning"
        title="Böcker från Boosta Förlag"
        lead="Personliga och praktiska faktaböcker skrivna av människor med verklig erfarenhet."
      />
      <section className="section section-compact-top">
        <div className="shell book-grid">
          {books.map((book) => <BookCard key={book.slug} book={book} />)}
        </div>
      </section>
      <section className="section section-white">
        <div className="shell reading-width">
          <p className="eyebrow">Flera exemplar och samarbeten</p>
          <h2>För skolor, kommuner och organisationer</h2>
          <p className="lead-small">
            Använd böckerna i en ledningsgrupp, utbildning, konferens eller föräldrasatsning. De kan
            också kombineras med föreläsning, coaching eller ett redaktionellt samarbete.
          </p>
          <a className="button" href="/for-skolor-organisationer/">Se möjligheterna</a>
        </div>
      </section>
    </>
  );
}
