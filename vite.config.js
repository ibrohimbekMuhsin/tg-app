// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === "production" ? "/https://ibrohimbekmuhsin.github.io/tg-app/" : "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
