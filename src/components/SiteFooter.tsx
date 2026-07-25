import Link from 'next/link';
import { Container } from './Container';
import { site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" href="/" aria-label="Boosta Förlag, startsida">
              <img src="/brand/boosta-logo-reversed.svg" alt="Boosta Förlag" width="212" height="62" />
            </Link>
            <p className="footer-tagline">{site.tagline}</p>
          </div>
          <div>
            <h2>Utforska</h2>
            <ul>
              {site.navigation.slice(1).map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Kontakt</h2>
            <address>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.telephoneHref}`}>{site.telephoneDisplay}</a>
              <a href={site.founderWebsite} rel="noopener noreferrer">Text and Web <span aria-hidden="true">↗</span></a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Boosta Förlag. Alla rättigheter förbehållna.</p>
          <div>
            <Link href="/integritet/">Integritet</Link>
            <Link href="/tillganglighet/">Tillgänglighet</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
