import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  // 打开vite内网地址
  server: {
    host: '0.0.0.0'
  }
})
