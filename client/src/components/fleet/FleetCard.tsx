import { vehicleName, type VehicleClass } from '@app/shared/content/fleet';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '@/components/ui/LocalizedLink';
import { Picture } from '@/components/ui/Picture';
import { useLocale } from '@/i18n/useLocale';
import { useLocalize } from '@/i18n/useLocalize';
import { VehicleCapacity, VehiclePrice } from './VehicleFacts';

/** A vehicle class as a card: photo, name, capacity and starting price. Lifts gently on hover. */
export function FleetCard({ vehicle }: { vehicle: VehicleClass }) {
  const { t } = useTranslation();
  const l = useLocalize();
  const locale = useLocale();

  return (
    <LocalizedLink
      to={`/fleet#${vehicle.slug}`}
      className="group relative flex h-full flex-col bg-charcoal transition-transform duration-700 ease-luxe hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <Picture
          src={vehicle.image}
          alt={vehicleName(vehicle, locale)}
          sizes="(min-width: 640px) 26rem, 85vw"
          className="aspect-3/2 w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-label font-medium uppercase text-gold">{l(vehicle.make)}</p>
        <h3 className="mt-2 font-display text-title font-light text-ivory">{l(vehicle.model)}</h3>
        <p className="mt-1 text-sm text-stone">{l(vehicle.category)}</p>
        <VehicleCapacity vehicle={vehicle} className="mt-6" />

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <VehiclePrice vehicle={vehicle} />
          <span className="inline-flex h-11 items-center gap-2 text-label font-semibold uppercase text-gold">
            <span className="sr-only">{t('fleet.details')}</span>
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-5 transition-transform duration-700 ease-luxe group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
            />
          </span>
        </div>
      </div>
    </LocalizedLink>
  );
}
