import { defineConfig } from 'cypress';
import { devServer } from '@cypress/vite-dev-server';
import del from 'del';

export default defineConfig({
  component: {
    specPattern: 'cypress/component/**/*.spec.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: false,
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        viteConfig: require('./vite.config'),
      });
    },
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
    baseUrl: 'http://localhost:6006',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: false,
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
