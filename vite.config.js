import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base :  process.env.NODE_ENV === 'production' ? '/test-20250215/' : '/',
  plugins: [react()],
})
