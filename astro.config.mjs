import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://marvelous-jalebi-35cc8c.netlify.app/",
  integrations: [preact()]
});