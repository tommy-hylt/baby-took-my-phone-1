import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/baby-took-my-phone-1/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon_512.png'],
      manifest: {
        name: 'Baby Took My Phone 1',
        short_name: 'BabyPhone',
        description: 'A simple touch app for babies with colorful spots',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'fullscreen',
        orientation: 'any',
        icons: [
          {
            src: 'icon_512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
});
