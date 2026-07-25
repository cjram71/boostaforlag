import Link from 'next/link';
import type { ReactNode } from 'react';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  external?: boolean;
  className?: string;
}) {
  const classes = `button button--${variant} ${className}`.trim();
  if (external) {
    return (
      <a className={classes} href={href} rel="noopener noreferrer">
        {children}
        <span className="external-mark" aria-hidden="true">↗</span>
      </a>
    );
  }
  return <Link className={classes} href={href}>{children}</Link>;
}
