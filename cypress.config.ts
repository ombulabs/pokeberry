import { defineConfig } from 'cypress';
import del from 'del';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // @ts-ignore
      on('after:spec', (_, results) => {
        if (results.stats.failures === 0 && results.video) {
          return del(results.video);
        }
      });
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // @ts-ignore
      on('after:spec', (_, results) => {
        if (results.stats.failures === 0 && results.video) {
          return del(results.video);
        }
      });
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
