import Link from 'next/link';
import { Container } from '@/components/Container';
export default function NotFound() { return <section className="page-hero"><Container className="reading"><p className="eyebrow">404</p><h1>Sidan kunde inte hittas</h1><p className="lead">Länken kan vara gammal eller adressen felstavad.</p><div className="button-row"><Link className="button button--primary" href="/">Till startsidan</Link><Link className="button button--secondary" href="/bocker/">Se böckerna</Link></div></Container></section>; }
