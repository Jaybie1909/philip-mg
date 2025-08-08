import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', // makes image paths relative for Netlify
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
