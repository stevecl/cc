import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['scss'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: './',
  build: {
    outDir: '../cc_server/web',
    rollupOptions: {
      input: './index.html',
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          if (['lodash', 'vue-router'].some(name => id.includes(name))) return 'base'
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.192:80',
        changeOrigin: false,
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
