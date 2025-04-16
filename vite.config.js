// vite.config.js (ΓΙΑ LOCAL DEVELOPMENT)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/talos-ai-frontend/', // <<< ΒΑΛΕ // ΜΠΡΟΣΤΑ ΓΙΑ ΝΑ ΕΙΝΑΙ ΣΧΟΛΙΟ
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});