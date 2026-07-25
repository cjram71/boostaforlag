import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: 'Boosta Förlag – Praktiska böcker om skola och ledarskap', template: '%s | Boosta Förlag' },
  description: 'Boosta Förlag ger ut praktiska faktaböcker om skola, skolledarskap och skolval.',
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'sv_SE', siteName: site.name,
    title: 'Boosta Förlag – Praktiska böcker om skola och ledarskap',
    description: 'Kunskap som går att förstå – och använda.',
    url: '/', images: [{ url: '/brand/boosta-social.svg', width: 1200, height: 630, alt: 'Boosta Förlag' }],
  },
  twitter: { card: 'summary_large_image', images: ['/brand/boosta-social.svg'] },
  icons: { icon: '/brand/favicon.svg' },
  manifest: '/brand/site.webmanifest',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f7f2e8' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <a className="skip-link" href="#main-content">Hoppa till innehållet</a>
        <SiteHeader />
        <main id="main-content" className="page-shell">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
