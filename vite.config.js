

import { defineConfig } from 'vite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server: {
    port: process.env.VITE_PORT || 3000, // Default to 3000 if VITE_PORT isn't defined
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
