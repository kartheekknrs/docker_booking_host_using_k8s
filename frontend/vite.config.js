import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
       host: process.env.VITE_HOST || 'localhost', //for IP
       port: 5173, // Port remains the same
   }
})
