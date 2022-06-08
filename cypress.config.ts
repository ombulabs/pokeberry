import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      on('task', codeCoverageTask(on, config))
      return config
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      //on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      on('task', codeCoverageTask(on, config))
      return config
    }
  }
});
