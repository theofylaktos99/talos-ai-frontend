import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< Updated upstream
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- Η ΡΥΘΜΙΣΗ ΓΙΑ GITHUB PAGES DEPLOYMENT ---
  base: '/talos-ai-frontend/', // 
  // ------------------------------------------
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
>>>>>>> Stashed changes
