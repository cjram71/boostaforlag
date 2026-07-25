import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';

export const metadata: Metadata = { title: 'Sidan har flyttat', robots: { index: false, follow: true }, alternates: { canonical: '/malla-taipale/' } };

export default function LegacyAuthorPage() {
  return (
    <><meta httpEquiv="refresh" content="0;url=/malla-taipale/" /><section className="page-hero"><Container><h1>Sidan har flyttat</h1><p className="lead">Du skickas vidare till sidan om Malla Taipale.</p><Link className="button button--primary" href="/malla-taipale/">Gå till Malla Taipale</Link></Container></section></>
  );
}
