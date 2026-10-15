import { m, useScroll, useSpring } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout';
import { LocalizedLink, LocalizedNavLink } from '@/components/ui/LocalizedLink';
import { useScrolled } from '@/hooks/useScrolled';
import { useLocale } from '@/i18n/useLocale';
import { cn } from '@/lib/cn';
import { telHref } from '@/lib/contact';
import { primaryNav } from '@/lib/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Wordmark } from './Wordmark';

/** Tailwind's `lg` breakpoint: where the desktop navigation takes over. */
const DESKTOP_QUERY = '(min-width: 64rem)';

const iconButton =
  'flex size-11 items-center justify-center text-ivory transition-colors duration-500 ease-luxe hover:text-gold';

/**
 * The site header. It floats transparently over the top of each page and gains
 * a dark, blurred backdrop once the visitor starts to scroll.
 */
export function Header() {
  const { t } = useTranslation();
  const brand = useBrand();
  const locale = useLocale();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  // A gold hairline along the foot of the header fills as the page is read.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // If a phone is rotated or a window widened past the breakpoint, close the mobile menu.
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => desktop.matches && setMenuOpen(false);
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-700 ease-luxe',
          scrolled ? 'border-line bg-ink/85 backdrop-blur-md' : 'border-transparent',
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-6 lg:h-22">
          <LocalizedLink to="/" aria-label={t('common.homeLink', { brand: brand.name[locale] })} className="shrink-0">
            <Wordmark />
          </LocalizedLink>

          <nav aria-label={t('nav.primary')} className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <LocalizedNavLink
                    to={item.to}
                    className={cn(
                      'relative inline-flex h-11 items-center text-label font-medium uppercase text-ivory/80',
                      'transition-colors duration-500 ease-luxe hover:text-ivory aria-[current=page]:text-ivory',
                      // A gold underline that draws in from the reading direction's start.
                      'after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-gold',
                      'after:transition-transform after:duration-700 after:ease-luxe rtl:after:origin-right',
                      'hover:after:scale-x-100 aria-[current=page]:after:scale-x-100',
                    )}
                  >
                    {t(item.labelKey)}
                  </LocalizedNavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 lg:gap-6">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            {/* Click-to-call: an icon on smaller screens, with the number written out on wide ones. */}
            <a
              href={telHref(brand.contact.phone)}
              aria-label={t('common.callNumber', { phone: brand.contact.phone })}
              className="flex h-11 min-w-11 items-center justify-center gap-3 whitespace-nowrap text-sm text-ivory transition-colors duration-500 ease-luxe hover:text-gold 2xl:text-mist"
            >
              <Phone aria-hidden="true" strokeWidth={1.25} className="size-5 2xl:size-4 2xl:text-gold" />
              <span dir="ltr" className="hidden 2xl:inline">
                {brand.contact.phone}
              </span>
            </a>
            <div className="hidden sm:block">
              <ButtonLink to="/book" variant="outline" size="sm">
                {t('common.bookNow')}
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t('nav.openMenu')}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(iconButton, '-me-3 lg:hidden')}
            >
              <Menu aria-hidden="true" strokeWidth={1.25} className="size-6" />
            </button>
          </div>
        </Container>
        <m.div
          aria-hidden="true"
          className={cn(
            'absolute inset-x-0 bottom-0 h-px origin-left bg-gold/70 transition-opacity duration-700 rtl:origin-right',
            scrolled ? 'opacity-100' : 'opacity-0',
          )}
          style={{ scaleX: progress }}
        />
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
