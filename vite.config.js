import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@toolpad/core/AppProvider'], // Tashqariga chiqarishni sozlash
    },
  },
  resolve: {
    alias: {
      // Agar kerak bo'lsa, importlar uchun alias qo'shing
      '@toolpad/core/AppProvider': '@toolpad/core/lib/AppProvider', // Misol uchun
    },
  },
});
