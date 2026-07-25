'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Boosta Förlag, startsida">
          <img src="/brand/boosta-logo.svg" alt="Boosta Förlag" width="212" height="62" />
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? 'Stäng' : 'Meny'}</span>
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Huvudmeny">
          <ul>
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link className="button button--primary header-cta" href="/bocker/" onClick={() => setOpen(false)}>
            Köp böckerna
          </Link>
        </nav>
      </div>
    </header>
  );
}
