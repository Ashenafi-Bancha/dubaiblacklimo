import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router';
import { localizePath } from '@/i18n/locale';
import { useLocale } from '@/i18n/useLocale';

/**
 * Internal links. Write the path without a language prefix (`to="/fleet"`);
 * the link keeps the visitor in the language they are browsing in.
 */
export function LocalizedLink({ to, ...props }: Omit<LinkProps, 'to'> & { to: string }) {
  const locale = useLocale();
  return <Link to={localizePath(to, locale)} {...props} />;
}

/** As LocalizedLink, but exposes the active state for navigation menus. */
export function LocalizedNavLink({ to, ...props }: Omit<NavLinkProps, 'to'> & { to: string }) {
  const locale = useLocale();
  return <NavLink to={localizePath(to, locale)} {...props} />;
}
