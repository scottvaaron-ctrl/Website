// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The repo is named "Website", so GitHub Pages serves the site at
// https://scottvaaron-ctrl.github.io/Website/ and every link needs the /Website base.
export default defineConfig({
  site: 'https://scottvaaron-ctrl.github.io',
  base: '/Website',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/thanks/') && !page.includes('/404') })],
});
