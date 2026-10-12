import { vehicleClasses, type VehicleClass } from '@app/shared/content/fleet';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { VehicleCapacity, VehiclePrice } from '@/components/fleet/VehicleFacts';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHeader } from '@/components/sections/PageHeader';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Layout';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';

/** One vehicle class: a large photo beside its details. `flipped` puts the photo on the other side. */
function VehicleRow({ vehicle, flipped }: { vehicle: VehicleClass; flipped: boolean }) {
  const { t } = useTranslation();
  const l = useLocalize();

  return (
    // The id lets other pages link straight to a class (/fleet#luxury-suv).
    <article id={vehicle.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className={cn('overflow-hidden lg:col-span-7', flipped && 'lg:order-2')}>
        <Picture
          src={vehicle.image}
          alt={`${l(vehicle.name)}: ${l(vehicle.models)}`}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="aspect-3/2 w-full object-cover"
        />
      </Reveal>

      <div className="lg:col-span-5">
        <Reveal>
          <h2 className="font-display text-display font-light text-ivory">{l(vehicle.name)}</h2>
          <p className="mt-2 text-sm text-stone">{l(vehicle.models)}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-mist">{l(vehicle.description)}</p>
          <VehicleCapacity vehicle={vehicle} className="mt-8" />
        </Reveal>
        <Reveal delay={0.16}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {vehicle.features.map((feature) => (
              <li key={feature.en} className="flex items-start gap-3 text-sm text-mist">
                <Check aria-hidden="true" strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-gold" />
                {l(feature)}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
          <VehiclePrice vehicle={vehicle} />
          <ButtonLink to="/book" state={{ quote: { vehicleClass: vehicle.slug } }} variant="outline">
            {t('fleet.book')}
          </ButtonLink>
        </Reveal>
      </div>
    </article>
  );
}

export default function Fleet() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('fleet.seoTitle')} description={t('fleet.seoDescription')} />
      <PageHeader eyebrow={t('fleet.eyebrow')} title={t('fleet.title')} lead={t('fleet.lead')} />

      <Section>
        <Container className="space-y-24 lg:space-y-36">
          {vehicleClasses.map((vehicle, index) => (
            <VehicleRow key={vehicle.slug} vehicle={vehicle} flipped={index % 2 === 1} />
          ))}
        </Container>
        <Container>
          <p className="mt-24 border-t border-line pt-8 text-sm text-stone">{t('fleet.note')}</p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
