// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssModules from 'vite-plugin-css-modules';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssModules({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }),
  ],
});
