import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'node:fs'

const selectionFile = path.resolve(import.meta.dirname || __dirname, 'src', 'data', 'document-selection.json')

// Dev only: lets the document pages save your choices (projects, era, photo) for `npm run pdf`.
function documentSelection(): Plugin {
  return {
    name: 'document-selection',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.split('?')[0].endsWith('/__doc-selection')) return next()
        const current = (): Record<string, unknown> => {
          try {
            return JSON.parse(fs.readFileSync(selectionFile, 'utf8'))
          } catch {
            return {}
          }
        }
        res.setHeader('Content-Type', 'application/json')
        if (req.method !== 'POST') {
          res.end(JSON.stringify(current()))
          return
        }
        let body = ''
        req.on('data', (chunk) => (body += chunk))
        req.on('end', () => {
          try {
            const merged = { ...current(), ...JSON.parse(body) }
            fs.writeFileSync(selectionFile, JSON.stringify(merged, null, 2) + '\n')
            res.end(JSON.stringify(merged))
          } catch {
            res.statusCode = 400
            res.end('{}')
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), documentSelection()],
  resolve: {
    // Prefer TypeScript sources so a stray compiled .js next to a .ts file can never shadow it.
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.mts', '.jsx', '.json'],
    alias: {
      "@": path.resolve(import.meta.dirname || __dirname, "./src"),
    },
  },
  base: '/Portfolio/',
  server: {
    host: "0.0.0.0",
    port: 5173
  }
})
