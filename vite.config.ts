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
      include: 'lib/*',
      exclude: ['node_modules'],
      extension: ['.tsx', '.ts'],
      cypress: true,
    }),
  ],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './lib'),
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'pokeberry',
      formats: ['es'],
      fileName: (format) => `pokeberry.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
