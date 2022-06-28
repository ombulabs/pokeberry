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
      on('task', codeCoverageTask(on, config))
      on('file:preprocessor', (file) => new Promise((resolve, reject) => {
        try {
          console.log(file)
          const shouldIgnore = file.filePath.search('e2e.ts')
          if (!shouldIgnore) {
            spawnSync('yarn', ['-s', 'nyc', 'instrument', file.filePath, file.outputPath])
          }
          resolve(file.outputPath)
        } catch (error) {
          reject(error)
        }
      }))
      on('after:spec', (_, results) => {
        if (results.stats.failures === 0 && results.video) {
            return del(results.video)
        }
      })
      return config
    },
  }
});
