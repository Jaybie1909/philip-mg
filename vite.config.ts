import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  assetsInclude: ['**/*.webp'],
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  base: './',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep original folder structure in dist
          const dir = assetInfo.name?.split('/').slice(0, -1).join('/') || '';
          return `assets/images/${dir}/[name].[hash].[ext]`;
        },
      },
    },
  },
});