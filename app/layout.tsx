import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Site";
import { Header } from "@/components/Site";
import { JsonLd } from "@/components/Site";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boosta Förlag – Praktiska böcker om skola och ledarskap",
    template: "%s | Boosta Förlag",
  },
  description:
    "Boosta Förlag ger ut praktiska faktaböcker om skola, skolledarskap och skolval. Läs om Malla Taipales böcker och köp dem direkt online.",
  applicationName: site.name,
  authors: [{ name: "Boosta Förlag" }],
  creator: "Boosta Förlag",
  publisher: "Boosta Förlag",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#cf4728",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    slogan: site.tagline,
    logo: `${site.url}/brand/boosta-social.png`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "sv-SE",
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <html lang="sv">
      <body>
        <a className="skip-link" href="#main-content">Hoppa till innehållet</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd data={[organization, website]} />
      </body>
    </html>
  );
}
