export type Book = {
  slug: string;
  title: string;
  author: string;
  illustrator?: string;
  priceSek: number;
  checkoutUrl: string;
  coverOriginal: string;
  coverAvif: string;
  coverWebp: string;
  width: number;
  height: number;
  shortDescription: string;
  longDescription: string[];
  highlights: string[];
  audience: string;
  quote?: string;
  intendedReader: string;
  isbn?: string;
  pageCount?: number;
  format?: string;
  availability?: string;
};

export const books: Book[] = [
  {
    slug: 'rektor-sveriges-viktigaste-chef',
    title: 'Rektor – Sveriges viktigaste chef',
    author: 'Malla Taipale',
    illustrator: 'Ivar Martinsson',
    priceSek: 134,
    checkoutUrl: 'https://buy.stripe.com/eVq6oA2Wn4TE3wY8Kfb3q02',
    coverOriginal: '/assets/originals/rektor-original.jpg',
    coverAvif: '/assets/optimized/rektor-750.avif',
    coverWebp: '/assets/optimized/rektor-750.webp',
    width: 750,
    height: 1214,
    shortDescription:
      'En rak, personlig och lösningsinriktad bok om rektorns vardag, ansvar och möjligheten att vända en skola.',
    longDescription: [
      'Malla Taipale blev känd som rektorn som vände skolor med stora utmaningar i Stockholm. I boken berättar hon om vardagen, ansvaret och de svåra beslut hon mötte under nära två decennier som rektor.',
      'Åren rymde allt från brandkårsutryckningar, vapenbeslag och personliga hot till det långsiktiga arbetet med att få lärare och elever att bryta en negativ spiral tillsammans.',
      'Berättelsen är tydlig, modig, personlig och lösningsinriktad. Anekdoter blandas med handfasta råd och tydliga ställningstaganden.',
    ],
    highlights: [
      'Inblick i rektorns vardag och ansvar',
      'Exempel på hur en skola kan bryta en negativ utveckling',
      'Erfarenheter av att samla lärare kring ett gemensamt mål',
      'Praktiska råd för nya och erfarna rektorer',
      'Illustrationer av Ivar Martinsson',
    ],
    audience:
      'Boken fungerar som stöd för både nya och erfarna rektorer och för andra som vill förstå skolledarens uppdrag.',
    quote:
      'Boken tar avstamp i skolans vardag och lyfter rektorn som Sveriges viktigaste chef – en ledare som påverkar framtiden långt efter sitt eget yrkesliv.',
    intendedReader: 'För rektorer, skolledare och andra som vill förstå skolledarens uppdrag.',
  },
  {
    slug: 'skolvalet-rad-till-foraldrar',
    title: 'Skolvalet – Råd till föräldrar',
    author: 'Malla Taipale',
    priceSek: 146,
    checkoutUrl: 'https://buy.stripe.com/bJe5kw0Ofcm62sU2lRb3q00',
    coverOriginal: '/assets/originals/skolvalet-original.jpg',
    coverAvif: '/assets/optimized/skolvalet-750.avif',
    coverWebp: '/assets/optimized/skolvalet-750.webp',
    width: 750,
    height: 1214,
    shortDescription:
      'En praktisk vägledning för föräldrar och vårdnadshavare som ska välja eller byta grundskola.',
    longDescription: [
      'När det är dags att välja eller byta skola uppstår många frågor: Vad får familjen välja? Hur bedömer man om en skola är bra? Och vad bör man fråga rektorn?',
      'Malla Taipale arbetade som grundskolerektor i nära två decennier. I boken förklarar hon hur processen går till och vad föräldrar kan titta efter innan de fattar sitt beslut.',
    ],
    highlights: [
      'Så vet du om en skola är bra',
      'Så går själva väljandet till',
      'Frågor du kan ställa till rektorn',
      'Om skillnaden mellan kommunala och privata skolor',
      'Vad menas med att barn behöver vara undervisningsbara?',
    ],
    audience:
      'För föräldrar och vårdnadshavare som ska välja eller byta grundskola för sitt barn.',
    intendedReader: 'För föräldrar och vårdnadshavare inför ett skolval eller skolbyte.',
  },
];

export function getBook(slug: string): Book {
  const book = books.find((item) => item.slug === slug);
  if (!book) throw new Error(`Unknown book slug: ${slug}`);
  return book;
}
