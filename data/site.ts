import type { Metadata } from "next";

export const site = {
  name: "Boosta Förlag",
  tagline: "Nya sätt att berätta",
  promise: "Kunskap som går att förstå – och använda.",
  description: "Boosta Förlag är ett fristående specialistförlag i Hedemora som ger ut personliga och praktiska faktaböcker och utvecklar kunskap för skolor, organisationer och människor som vill skapa förändring.",
  url: "https://www.boostaforlag.se",
  email: "nadja@boostaforlag.com",
  phoneDisplay: "+46-70 0920 234",
  phoneHref: "+46700920234",
  headquarters: "Hedemora, Dalarna",
  founderSite: "https://www.textandweb.com/",
  nav: [
    { href: "/", label: "Hem" },
    { href: "/bocker/", label: "Böcker" },
    { href: "/malla-taipale/", label: "Malla" },
    { href: "/for-skolor-organisationer/", label: "För skolor" },
    { href: "/forlaget/", label: "Förlaget" },
    { href: "/media/", label: "Media" },
    { href: "/kontakt/", label: "Kontakt" },
  ],
} as const;

export type Book = {
  slug: string;
  title: string;
  shortTitle: string;
  author: string;
  illustrator?: string;
  priceSek: number;
  checkoutUrl: string;
  cover: string;
  coverSrcSet: string;
  coverWidth: number;
  coverHeight: number;
  shortDescription: string;
  audience: string;
  highlights: string[];
};

export const books: Book[] = [
  {
    slug: "rektor-sveriges-viktigaste-chef",
    title: "Rektor – Sveriges viktigaste chef",
    shortTitle: "Rektor",
    author: "Malla Taipale",
    illustrator: "Ivar Martinsson",
    priceSek: 134,
    checkoutUrl: "https://buy.stripe.com/eVq6oA2Wn4TE3wY8Kfb3q02",
    cover: "/assets/optimized/rektor.webp",
    coverSrcSet: "/assets/optimized/rektor-240.webp 240w, /assets/optimized/rektor-320.webp 320w",
    coverWidth: 321,
    coverHeight: 500,
    shortDescription: "En personlig och praktisk bok om rektorns vardag, ansvar och möjligheten att vända en skolas utveckling.",
    audience: "För nya och erfarna rektorer och för andra som vill förstå skolledarens uppdrag.",
    highlights: [
      "Inblick i rektorns vardag och ansvar",
      "Exempel på hur en skola kan bryta en negativ utveckling",
      "Erfarenheter av att samla lärare kring ett gemensamt mål",
      "Praktiska råd för nya och erfarna rektorer",
      "Illustrationer av Ivar Martinsson",
    ],
  },
  {
    slug: "skolvalet-rad-till-foraldrar",
    title: "Skolvalet – Råd till föräldrar",
    shortTitle: "Skolvalet",
    author: "Malla Taipale",
    priceSek: 146,
    checkoutUrl: "https://buy.stripe.com/bJe5kw0Ofcm62sU2lRb3q00",
    cover: "/assets/optimized/skolvalet.webp",
    coverSrcSet: "/assets/optimized/skolvalet-240.webp 240w, /assets/optimized/skolvalet-360.webp 360w, /assets/optimized/skolvalet-540.webp 540w, /assets/optimized/skolvalet-720.webp 720w",
    coverWidth: 1396,
    coverHeight: 2160,
    shortDescription: "En tydlig guide för föräldrar och vårdnadshavare som ska välja eller byta grundskola.",
    audience: "För föräldrar och vårdnadshavare som ska välja eller byta grundskola för sitt barn.",
    highlights: [
      "Så vet du om en skola är bra",
      "Så går själva väljandet till",
      "Frågor du kan ställa till rektorn",
      "Om skillnaden mellan kommunala och privata skolor",
      "Vad menas med att barn behöver vara undervisningsbara?",
    ],
  },
];

export const pressItem = {
  headline: "Skolchefen ger ut bok – med råd till föräldrar",
  publication: "Lokalt i Hedemora/Säter",
  date: "28 januari 2024",
  summary: "En intervju om Malla Taipales långa erfarenhet som rektor, hennes syn på skolledarskap och boken Skolvalet – Råd till föräldrar.",
  pageOne: "/assets/optimized/skolvalet-press-1.webp",
  pageTwo: "/assets/optimized/skolvalet-press-2.webp",
  pdf: "/media/intervju-med-malla-taipale.pdf",
} as const;

export function getBook(slug: string): Book {
  const book = books.find((entry) => entry.slug === slug);
  if (!book) throw new Error(`Unknown book slug: ${slug}`);
  return book;
}

export function createMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "sv_SE",
      type: "website",
      images: [{ url: "/brand/boosta-social.png", width: 1200, height: 630, alt: "Boosta Förlag – kunskap som går att förstå och använda" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/brand/boosta-social.png"] },
  };
}
