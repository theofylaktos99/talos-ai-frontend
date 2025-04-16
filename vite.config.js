// vite.config.js (Final for Netlify deploy & Local Dev)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/talos-ai-frontend/', // 
  server: {
    // Το proxy παραμένει για το local development
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});