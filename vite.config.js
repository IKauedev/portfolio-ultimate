// vite.config.js
import react from '@vitejs/plugin-react';
import ViteCompression from 'vite-plugin-compression';

export default {
  plugins: [
    react(),
    ViteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    outDir: 'build',
    assetsDir: '',
    minify: 'terser',
    chunkSizeWarningLimit: 2000,
    brotliSize: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
};
