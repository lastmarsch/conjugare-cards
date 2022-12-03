import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
dotenv.config();

const port = Number(process.env.CLIENT_PORT) || 3000;
const serverPort = Number(process.env.SERVER_PORT) || 3001;
const host = JSON.stringify(process.env.HOST) || JSON.stringify('http://localhost');

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: { port },
  define: {
    __SERVER_PORT__: serverPort,
    __HOST__: host,
  },
  plugins: [react(), tsconfigPaths()],
});
