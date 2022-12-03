import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
dotenv.config();

const host = JSON.stringify(process.env.HOST) || JSON.stringify('https://conjugare-cards-api.onrender.com/');

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    __HOST__: host,
  },
  plugins: [react(), tsconfigPaths()],
});
