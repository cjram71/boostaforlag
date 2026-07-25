import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { site } from '@/data/site';
export const metadata: Metadata = { title: 'Integritet', description: 'Så hanterar Boosta Förlags webbplats integritet och externa tjänster.', alternates: { canonical: '/integritet/' } };
export default function PrivacyPage() { return <header className="page-hero"><Container className="reading"><p className="eyebrow">Information</p><h1>Integritet</h1><p>Webbplatsen använder ingen analysmätning, inget kontaktformulär och inga icke nödvändiga cookies som standard.</p><p>När du väljer att spela en YouTube-video laddas innehåll från YouTubes integritetsförbättrade domän. När du väljer att köpa en bok lämnar du webbplatsen och går vidare till Stripe, som behandlar uppgifter enligt sina egna villkor.</p><p>Frågor om webbplatsen kan skickas till <a href={`mailto:${site.email}`}>{site.email}</a>.</p></Container></header>; }
