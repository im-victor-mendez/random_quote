import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from "dotenv";

config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})