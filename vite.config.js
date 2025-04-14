// vite.config.js (Η ΣΩΣΤΗ ΕΚΔΟΣΗ ΜΕΤΑ ΤΗ ΔΙΟΡΘΩΣΗ ΤΟΥ CONFLICT)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Βεβαιώσου ότι το base είναι σωστό και ΧΩΡΙΣ σχόλιο
  base: '/talos-ai-frontend/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Το local backend σου
        changeOrigin: true,
      },
    },
  },
});
