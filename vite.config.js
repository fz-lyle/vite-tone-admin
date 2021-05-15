import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
      mockPath: 'mock'
    })
  ],
  server: {
    open: true
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      "~": resolve(__dirname, '.'),
      "@": resolve(__dirname, './src'),
      "@mock": resolve(__dirname, './src/mock'),
      "@utils": resolve(__dirname, './src/utils'),
      "@api": resolve(__dirname, './src/api'),
      "@layout": resolve(__dirname, './src/layout'),
      "@pages": resolve(__dirname, './src/pages'),
      "@router": resolve(__dirname, './src/router'),
      "@store": resolve(__dirname, './src/store'),
      "@config": resolve(__dirname, './src/config')
    }
  },
  optimizeDeps: {
    include: ['axios']
  }
})
