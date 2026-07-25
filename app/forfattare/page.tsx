import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Malla Taipale",
  robots: { index: false, follow: true },
  alternates: { canonical: "/malla-taipale/" },
};

export default function LegacyAuthorPage() {
  return (
    <section className="page-hero">
      <meta httpEquiv="refresh" content="0; url=/malla-taipale/" />
      <div className="shell reading-width">
        <p className="eyebrow">Sidan har flyttat</p>
        <h1>Malla Taipale</h1>
        <p className="lead">Du skickas vidare till den nya författarsidan.</p>
        <Link className="button" href="/malla-taipale/">Gå till Malla Taipale</Link>
      </div>
    </section>
  );
}
