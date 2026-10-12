import { services } from '@app/shared/content/services';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { Container, Hairline } from '@/components/ui/Layout';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { useLocale } from '@/i18n/useLocale';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';
import { mailHref, telHref, whatsappHref } from '@/lib/contact';
import { companyNav, legalNav } from '@/lib/navigation';
import { Wordmark } from './Wordmark';

/** Display names of the social networks. Proper nouns, so not translated. */
const SOCIAL_LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  x: 'X',
  tiktok: 'TikTok',
} as const;

const linkBase = 'inline-block py-1.5 text-sm transition-colors duration-500 ease-luxe hover:text-gold';
const linkClass = `${linkBase} text-mist`;
/** For the small print in the bottom bar. */
const quietLinkClass = `${linkBase} text-stone`;

function Column({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-label font-medium uppercase text-gold">{title}</h2>
      <ul className="mt-6">{children}</ul>
    </div>
  );
}

/** A footer column of internal links. `label` is already translated. */
function LinkColumn({ title, items, className }: { title: string; items: { to: string; label: string }[]; className?: string }) {
  return (
    <Column title={title} className={className}>
      {items.map((item) => (
        <li key={item.to}>
          <LocalizedLink to={item.to} className={linkClass}>
            {item.label}
          </LocalizedLink>
        </li>
      ))}
    </Column>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const brand = useBrand();
  const locale = useLocale();
  const l = useLocalize();
  const { contact, licence } = brand;

  const serviceLinks = services.map((service) => ({ to: `/services/${service.slug}`, label: l(service.name) }));
  const companyLinks = companyNav.map((item) => ({ to: item.to, label: t(item.labelKey) }));

  // Only networks with a profile URL in the brand settings are shown.
  const socials = (Object.keys(SOCIAL_LABELS) as Array<keyof typeof SOCIAL_LABELS>).filter((key) => brand.social[key]);

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="col-span-2 lg:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm text-mist">{t('footer.tagline')}</p>
            <p className="mt-6 text-sm text-stone">
              {t('footer.licence', { authority: licence.authority[locale], number: licence.number })}
            </p>
          </div>

          <LinkColumn title={t('footer.services')} items={serviceLinks} className="lg:col-span-3" />
          <LinkColumn title={t('footer.company')} items={companyLinks} className="lg:col-span-2" />

          <Column title={t('footer.contact')} className="col-span-2 lg:col-span-3">
            <li>
              <a href={telHref(contact.phone)} className={linkClass}>
                <span dir="ltr">{contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(contact.whatsapp, t('whatsapp.prefill'))}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {t('common.whatsapp')} <span dir="ltr">{contact.whatsapp}</span>
              </a>
            </li>
            <li>
              <a href={mailHref(contact.email)} className={cn(linkClass, 'break-all')}>
                {contact.email}
              </a>
            </li>
            <li className="mt-4 max-w-xs text-sm text-stone">{contact.address[locale]}</li>
          </Column>
        </div>
      </Container>

      <Container>
        <Hairline />
        {/* The end padding keeps these links clear of the floating WhatsApp button. */}
        <div className="flex flex-col gap-4 py-8 pe-20 text-sm text-stone lg:flex-row lg:items-center lg:justify-between lg:pe-24">
          <p>{t('footer.rights', { year: new Date().getFullYear(), name: brand.legalName })}</p>

          <ul aria-label={t('footer.legal')} className="flex flex-wrap gap-x-8">
            {legalNav.map((item) => (
              <li key={item.to}>
                <LocalizedLink to={item.to} className={quietLinkClass}>
                  {t(item.labelKey)}
                </LocalizedLink>
              </li>
            ))}
          </ul>

          {socials.length > 0 && (
            <ul aria-label={t('footer.follow')} className="flex flex-wrap gap-x-8">
              {socials.map((key) => (
                <li key={key}>
                  <a href={brand.social[key]} target="_blank" rel="noopener noreferrer" className={quietLinkClass}>
                    {SOCIAL_LABELS[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
