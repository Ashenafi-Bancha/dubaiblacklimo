import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { brandConfig } from '../config/brand.config.ts';

/**
 * Writes the brand colours into index.html at build time, so the page paints
 * in the right palette before any JavaScript or stylesheet has loaded.
 * The variable names match the `@theme` tokens in src/styles/index.css.
 */
function brandHtml(): Plugin {
  const { background, surface, accent, text } = brandConfig.colours;
  const css =
    `:root{--color-ink:${background};--color-charcoal:${surface};` +
    `--color-gold:${accent};--color-ivory:${text}}html{background:${background}}`;

  return {
    name: 'brand-html',
    transformIndexHtml: () => [
      { tag: 'meta', attrs: { name: 'theme-color', content: background }, injectTo: 'head' },
      { tag: 'style', attrs: { id: 'brand-theme' }, children: css, injectTo: 'head' },
    ],
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), brandHtml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@brand': fileURLToPath(new URL('../config/brand.config.ts', import.meta.url)),
    },
  },
  // PORT lets a development tool or another project's server choose a different port.
  server: { port: Number(process.env.PORT) || 5173, strictPort: true },
});
