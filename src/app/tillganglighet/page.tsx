import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { site } from '@/data/site';
export const metadata: Metadata = { title: 'Tillgänglighet', description: 'Boosta Förlags arbete med en tillgänglig webbplats.', alternates: { canonical: '/tillganglighet/' } };
export default function AccessibilityPage() { return <header className="page-hero"><Container className="reading"><p className="eyebrow">Tillgänglighet</p><h1>En webbplats för fler</h1><p>Boosta Förlag strävar efter att webbplatsen ska kunna användas med tangentbord, skärmläsare och förstorad text. Innehåll ska inte vara beroende enbart av färg och rörliga effekter begränsas när användaren har valt minskad rörelse.</p><p>Upptäcker du ett problem, kontakta <a href={`mailto:${site.email}`}>{site.email}</a> och beskriv sidan och vad som inte fungerade.</p></Container></header>; }
