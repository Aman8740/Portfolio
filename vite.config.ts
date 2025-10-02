import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname || __dirname, "./src"),
    },
  },
  base: '/Portfolio/',
  server: {
    host: "10.211.89.109",
    port: 5173
  }
})
