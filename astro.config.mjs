// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://orbis.sh',

  // The site is fully static, so skip the KV session store the adapter would otherwise provision.
  session: false,

  vite: {
    plugins: [tailwindcss()]
  },

  // No images are transformed, so the Cloudflare Images binding isn't needed either.
  adapter: cloudflare({ imageService: 'passthrough' })
});
