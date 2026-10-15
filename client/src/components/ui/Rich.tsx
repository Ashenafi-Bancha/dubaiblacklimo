import { Trans } from 'react-i18next';

/**
 * Renders a translation that contains light markup. Headings mark one or two
 * words with <em>…</em>, shown as champagne italics (in Arabic, which has no
 * italics, as champagne only). Line breaks can be forced with <br/>.
 *
 *   "title": "Arrive <em>Beyond</em> Expectation"  ->  <Rich k="home.hero.title" />
 */
export function Rich({ k, values }: { k: string; values?: Record<string, string> }) {
  return <Trans i18nKey={k} values={values} components={{ em: <em />, br: <br /> }} />;
}
