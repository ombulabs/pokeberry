import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import copy from 'rollup-plugin-copy';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outputDir: './dist',
      entryRoot: './src',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve('../../utils/index.ts'),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: 'src/*.scss', dest: 'dist', rename: 'style.scss' }],
          hook: 'writeBundle',
        }),
      ],
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
