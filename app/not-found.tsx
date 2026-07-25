import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="shell reading-width">
        <p className="eyebrow">404</p>
        <h1>Sidan kunde inte hittas</h1>
        <p className="lead">Länken kan vara gammal eller adressen felstavad.</p>
        <div className="button-row">
          <Link className="button" href="/">Till startsidan</Link>
          <Link className="button button-secondary" href="/bocker/">Se böckerna</Link>
        </div>
      </div>
    </section>
  );
}
