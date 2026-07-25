import { pressItems } from '@/content/media/media';
import { ButtonLink } from './ButtonLink';

export function PressCard() {
  const item = pressItems[0];
  return (
    <article className="press-card">
      <div className="press-preview" aria-hidden="true">
        <img src={item.imageOne} alt="" width="750" height="1040" loading="lazy" />
        <img src={item.imageTwo} alt="" width="750" height="1040" loading="lazy" />
      </div>
      <div className="press-card__content">
        <p className="eyebrow">{item.publication} · {item.date}</p>
        <h2>{item.headline}</h2>
        <p>{item.summary}</p>
        <div className="button-row">
          <ButtonLink href="/media/skolchefen-ger-ut-bok/" variant="secondary">Visa pressklippet</ButtonLink>
          <ButtonLink href={item.pdf} external>Ladda ned PDF</ButtonLink>
        </div>
        <p className="small-note">PDF, två sidor. Originalpubliceringen öppnas eller laddas ned.</p>
      </div>
    </article>
  );
}
