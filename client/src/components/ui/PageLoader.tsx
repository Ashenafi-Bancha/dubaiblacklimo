import { useTranslation } from 'react-i18next';

/** The loading state: a single gold line sweeping across a hairline. */
export function PageLoader() {
  const { t } = useTranslation();
  return (
    <div role="status" className="flex min-h-svh items-center justify-center">
      <div className="h-px w-32 overflow-hidden bg-line">
        <div className="h-full w-full animate-sweep bg-gold" />
      </div>
      <span className="sr-only">{t('common.loading')}</span>
    </div>
  );
}
