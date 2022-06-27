import { spawnSync } from "child_process";
import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";
import del from 'del';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('task', codeCoverageTask(on, config))
      return config
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      spawnSync('yarn', ['instrument'])
      on('task', codeCoverageTask(on, config))
      on('after:spec', (_, results) => {
        if (results.stats.failures === 0 && results.video) {
            return del(results.video)
        }
      })
      return config
    },
  }
});
