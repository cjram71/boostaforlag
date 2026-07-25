import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ButtonLink } from '@/components/ButtonLink';
import { pressItems } from '@/content/media/media';

const item = pressItems[0];
export const metadata: Metadata = { title: item.headline, description: item.summary, alternates: { canonical: '/media/skolchefen-ger-ut-bok/' } };

export default function PressClipPage() {
  return (
    <><header className="page-hero"><Container><Breadcrumbs items={[{ href: '/', label: 'Hem' }, { href: '/media/', label: 'Media' }, { label: item.headline }]} /><p className="eyebrow">{item.publication} · {item.date}</p><h1>{item.headline}</h1><p className="lead">{item.summary}</p><ButtonLink href={item.pdf} external>Ladda ned pressklippet som PDF</ButtonLink></Container></header><section className="section--surface"><Container><div className="press-gallery"><figure><img src={item.imageOne} alt="Första sidan av pressklippet Skolchefen ger ut bok – med råd till föräldrar" width="750" height="1040" /><figcaption>Sida 1 av 2.</figcaption></figure><figure><img src={item.imageTwo} alt="Andra sidan av pressklippet Skolchefen ger ut bok – med råd till föräldrar" width="750" height="1040" /><figcaption>Sida 2 av 2.</figcaption></figure></div></Container></section></>
  );
}
