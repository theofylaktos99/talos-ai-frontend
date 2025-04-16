 vite.config.js (Cleaned - Ready for Build before Deploy)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  Base path for GitHub Pages deployment - MUST be uncommented for the build
  base: '/talos-ai-frontend/',  Ensure this matches your repo name
  server: {
     Proxy settings for LOCAL development (npm run dev)
     They don't affect the build output
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});