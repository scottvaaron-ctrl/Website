// @ts-check
import { defineConfig } from 'astro/config';

// The repo is named "Website", so GitHub Pages serves the site at
// https://scottvaaron-ctrl.github.io/Website/ and every link needs the /Website base.
export default defineConfig({
  site: 'https://scottvaaron-ctrl.github.io',
  base: '/Website',
  trailingSlash: 'ignore',
});
