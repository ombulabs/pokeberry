const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "storybook-addon-react-docgen"
  ],
  framework: '@storybook/react',
  core: {
    builder: "@storybook/builder-vite"
  },
  viteFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: [
          {
            find: "@utils",
            replacement: path.resolve(__dirname, "../utils"),
          },
          {
            find: '@pokeberry/swipe-carousel/src',
            replacement: path.resolve(__dirname, "../packages/swipe-carousel/src"),
          }
        ]
      }
    }
  }
}


