// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Configura el directorio raíz para incluir tu index.html en la raíz
  build: {
    outDir: 'build'  // Configura el directorio de salida si es necesario
  }
});
