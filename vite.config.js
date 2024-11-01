import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@vue/runtime-core",
          replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
      }
    ]
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
