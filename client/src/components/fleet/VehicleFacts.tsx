import type { VehicleClass } from '@app/shared/content/fleet';
import { Briefcase, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/i18n/useLocale';
import { cn } from '@/lib/cn';
import { formatAed } from '@/lib/format';

/** Passenger and luggage capacity, as icon-and-number pairs. */
export function VehicleCapacity({ vehicle, className }: { vehicle: VehicleClass; className?: string }) {
  const { t } = useTranslation();
  const facts = [
    { icon: Users, label: t('fleet.passengers'), value: vehicle.passengers },
    { icon: Briefcase, label: t('fleet.luggage'), value: vehicle.luggage },
  ];

  return (
    <dl className={cn('flex flex-wrap gap-x-8 gap-y-2', className)}>
      {facts.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-2.5 text-sm text-mist">
          <Icon aria-hidden="true" strokeWidth={1.25} className="size-4 text-gold" />
          <dd className="font-medium text-ivory">{value}</dd>
          <dt>{label}</dt>
        </div>
      ))}
    </dl>
  );
}

/** The "From AED 450 per transfer" price line. */
export function VehiclePrice({ vehicle, className }: { vehicle: VehicleClass; className?: string }) {
  const { t } = useTranslation();
  const locale = useLocale();

  return (
    <p className={className}>
      <span className="block text-label font-medium uppercase text-stone">{t('fleet.from')}</span>
      <span className="font-display text-3xl font-light text-ivory">{formatAed(vehicle.fromPriceAed, locale)}</span>{' '}
      <span className="text-sm text-stone">{t(vehicle.priceBasis === 'hour' ? 'fleet.perHour' : 'fleet.perTransfer')}</span>
    </p>
  );
}
