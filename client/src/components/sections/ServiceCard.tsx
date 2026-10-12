import type { Service } from '@app/shared/content/services';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { Picture } from '@/components/ui/Picture';
import { useLocalize } from '@/i18n/useLocalize';

/** A tall photo card linking to a service page. The whole card is the link. */
export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation();
  const l = useLocalize();

  return (
    <LocalizedLink
      to={`/services/${service.slug}`}
      className="group relative isolate flex aspect-4/5 flex-col justify-end overflow-hidden bg-charcoal p-7 sm:p-8"
    >
      <Picture
        src={service.image}
        alt=""
        focus={service.imageFocus}
        // The landscape photo is cropped to a tall card, so it is displayed about twice the card's width.
        sizes="(min-width: 1024px) 62vw, (min-width: 640px) 95vw, 190vw"
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/55 to-ink/10" />

      <h3 className="font-display text-title font-light text-ivory">{l(service.name)}</h3>
      <p className="mt-3 text-sm text-mist">{l(service.summary)}</p>
      <span className="mt-6 inline-flex items-center gap-3 text-label font-semibold uppercase text-gold">
        {t('services.discover')}
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-4 transition-transform duration-700 ease-luxe group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
        />
      </span>
    </LocalizedLink>
  );
}
