import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//@ts-ignore
import istanbul from 'vite-plugin-istanbul';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    istanbul({
      include: 'packages/*',
      exclude: ['node_modules'],
      extension: ['.tsx', '.ts'],
      cypress: true,
    }),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './utils/index'),
    },
  },
  build: {
    sourcemap: true,
  },
});
