import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: './',
  build: {
    outDir: '../cc_server/web'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        changeOrigin: false,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
