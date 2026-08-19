import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        population: resolve(__dirname, 'population.html'),
        currency: resolve(__dirname, 'currency.html'),
        places: resolve(__dirname, 'places.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
