import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  // 打开vite内网地址
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/035f131c0d869ce8bd6939a28fb3e126/newYear',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path);
          return path.replace(/^\/api/, '')
        }
      },
      '/localTest': {
        target: 'https://localhost:8888/',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/localTest/, '')
        }
      }
    }
  }
})
