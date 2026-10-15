import { vehicleClasses, vehicleName } from '@app/shared/content/fleet';
import { popularPlaces } from '@app/shared/content/locations';
import { quoteRequestSchema, type QuoteRequest } from '@app/shared/schemas/quote';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useId, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/Button';
import { SelectField, TextField } from '@/components/ui/Field';
import { localizePath } from '@/i18n/locale';
import { useLocale } from '@/i18n/useLocale';
import { useLocalize } from '@/i18n/useLocalize';
import { cn } from '@/lib/cn';

/** Today's date in the visitor's own time zone, as YYYY-MM-DD. */
function today(): string {
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/**
 * The compact "get a quote" form on the home page hero.
 *
 * On submit it opens the booking flow with the trip details already filled in.
 * The details travel in the browser's navigation state, never in the URL, so
 * addresses do not end up in browser history, analytics or server logs.
 */
export function BookingWidget({ className }: { className?: string }) {
  const { t } = useTranslation();
  const locale = useLocale();
  const l = useLocalize();
  const navigate = useNavigate();
  const placesId = useId();
  const minDate = today();

  // The shared rules, plus one that depends on the visitor's clock.
  const schema = useMemo(
    () => quoteRequestSchema.refine((quote) => quote.date >= minDate, { path: ['date'], message: 'validation.datePast' }),
    [minDate],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteRequest>({
    resolver: zodResolver(schema),
    defaultValues: { pickup: '', dropoff: '', date: '', time: '', vehicleClass: '' },
  });

  const onSubmit = (quote: QuoteRequest) => {
    void navigate(localizePath('/book', locale), { state: { quote } });
  };

  /** Validation messages are translation keys (see the shared schema). */
  const errorFor = (field: keyof QuoteRequest) => {
    const key = errors[field]?.message;
    return key ? t(key) : undefined;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label={t('widget.title')}
      className={cn(
        'relative border border-line bg-ink/70 p-6 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl sm:p-8',
        // A gold hairline along the top edge of the console.
        'before:absolute before:inset-x-0 before:-top-px before:h-px before:bg-linear-to-r before:from-transparent before:via-gold/70 before:to-transparent',
        className,
      )}
    >
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-[1.3fr_1.3fr_0.9fr_0.7fr_1fr_auto] xl:items-start">
        <TextField
          label={t('widget.pickup')}
          placeholder={t('widget.placePlaceholder')}
          list={placesId}
          autoComplete="off"
          error={errorFor('pickup')}
          {...register('pickup')}
        />
        <TextField
          label={t('widget.dropoff')}
          placeholder={t('widget.placePlaceholder')}
          list={placesId}
          autoComplete="off"
          error={errorFor('dropoff')}
          {...register('dropoff')}
        />
        <div className="grid grid-cols-2 gap-x-6 sm:contents">
          <TextField label={t('widget.date')} type="date" min={minDate} error={errorFor('date')} {...register('date')} />
          <TextField label={t('widget.time')} type="time" error={errorFor('time')} {...register('time')} />
        </div>
        <SelectField label={t('widget.vehicle')} {...register('vehicleClass')}>
          <option value="">{t('widget.anyVehicle')}</option>
          {vehicleClasses.map((vehicle) => (
            <option key={vehicle.slug} value={vehicle.slug}>
              {vehicleName(vehicle, locale)}
            </option>
          ))}
        </SelectField>

        {/* On the single-row desktop layout the top margin lines the button up with the inputs, below their labels. */}
        <Button type="submit" size="lg" className="w-full self-end xl:mt-4 xl:w-auto xl:self-start">
          {t('widget.submit')}
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 rtl:-scale-x-100" />
        </Button>
      </div>

      {/* Suggestions offered as the visitor types a pickup or drop-off. */}
      <datalist id={placesId}>
        {popularPlaces.map((place) => (
          <option key={place.id} value={l(place.name)} />
        ))}
      </datalist>
    </form>
  );
}
