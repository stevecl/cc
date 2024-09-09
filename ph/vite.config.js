import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import slConfig from './src/config'
// import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    postcss: {
      plugins: [
        // postCssPxToRem({
        //   rootValue: 32,
        //   propList: ['*'],
        //   selectorBlackList: ['norem']
        // })
      ]
    }
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: '../../public/maytek-diy',
    rollupOptions: {
      input: './index.html',
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          // if (['lodash', 'vue-router'].some(name => id.includes(name))) return 'base'
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  server: {
    port: 8888,
    proxy: {
      // '/dev-api': {
      //   target: 'http://192.168.50.44:8180',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/dev-api/, ''),
      // }
      [slConfig.baseURL]: {
        target: slConfig.domain,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
