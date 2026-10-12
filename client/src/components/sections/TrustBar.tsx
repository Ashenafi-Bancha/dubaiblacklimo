import { Clock, PlaneLanding, ShieldCheck, Tag, UserRoundCheck, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBrand } from '@/brand/useBrand';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Reveal';
import { useLocale } from '@/i18n/useLocale';

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: 'always', icon: Clock },
  { key: 'chauffeurs', icon: UserRoundCheck },
  { key: 'flights', icon: PlaneLanding },
  { key: 'pricing', icon: Tag },
  { key: 'licensed', icon: ShieldCheck },
];

/**
 * The row of reassurances under the home page hero. The licensing authority
 * and licence number come from the brand settings.
 */
export function TrustBar() {
  const { t } = useTranslation();
  const brand = useBrand();
  const locale = useLocale();
  const licence = { authority: brand.licence.authority[locale], number: brand.licence.number };

  return (
    <section aria-label={t('home.trust.label')} className="border-y border-line bg-charcoal">
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-5">
          {ITEMS.map(({ key, icon: Icon }, index) => (
            <li key={key} className="border-line py-9 last:col-span-2 md:border-s md:px-6 md:py-12 md:first:border-s-0 md:last:col-span-1">
              <Reveal delay={index * 0.08} className="flex flex-col items-center text-center">
                <Icon aria-hidden="true" strokeWidth={1} className="size-7 text-gold" />
                <p className="mt-5 text-sm font-medium text-ivory">{t(`home.trust.${key}.title`, licence)}</p>
                <p className="mt-1 text-sm text-stone">{t(`home.trust.${key}.body`, licence)}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
