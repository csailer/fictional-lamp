/* eslint-disable */
import * as path from 'path';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

// Add the plugin to the plugins array in the vite.config.js
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    VitePWA({
      manifest: {
        "name": "IDC Okta API",
        "short_name": "IDC Okta",
        "description": "A PWA for the IDC Okta API application.",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
          {
            "src": "/path/to/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/path/to/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{ts,jsx,tsx,js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});










