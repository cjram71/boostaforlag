import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Kontakta Boosta Förlag', description: 'Kontakta Boosta Förlag om böcker, beställningar, pressmaterial, föreläsningar eller samarbeten.', alternates: { canonical: '/kontakt/' }, openGraph: { title: 'Kontakta Boosta Förlag', description: 'Frågor om böcker, pressmaterial, föreläsningar eller samarbeten.', url: '/kontakt/' } };

export default function ContactPage() {
  return (
    <><header className="page-hero"><Container><p className="eyebrow">Kontakt</p><h1>Kontakta Boosta Förlag</h1><p className="lead">Har du frågor om böckerna, en beställning, pressmaterial, föreläsningar eller ett möjligt samarbete? Hör gärna av dig.</p></Container></header><section className="section--surface"><Container><div className="contact-grid"><article className="contact-card"><h2>E-post</h2><p>För frågor och förfrågningar.</p><a href={`mailto:${site.email}`}>{site.email}</a></article><article className="contact-card"><h2>Telefon</h2><p>Ring Boosta Förlag.</p><a href={`tel:${site.telephoneHref}`}>{site.telephoneDisplay}</a></article><article className="contact-card"><h2>Nadja C Rahmings</h2><p>Journalistik, kommunikation och övriga uppdrag.</p><a href={site.founderWebsite} rel="noopener noreferrer">Besök Text and Web <span aria-hidden="true">↗</span></a></article></div><p className="small-note" style={{ marginTop: '2rem' }}>Webbplatsen använder inget kontaktformulär och samlar därför inte in meddelanden eller personuppgifter här.</p></Container></section></>
  );
}
