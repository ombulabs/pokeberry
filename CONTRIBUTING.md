# CONTRIBUTING

## Required:

- `node` (`>= 14.18.0`)
- `yarn` (v1)

## Getting started

```bash
git clone <this-repo>
cd pokeberry
yarn install
```

## `/packages`

The components live in the `/packages` directory. Each one is an individual `npm` package (meaning they each have a `package.json`, `LICENSE`, `README.md`, and appropriate config files). To scaffold a new component package, run the following command:

```bash
yarn new:component <your-component-name> # name must be kebab-case
```

This will scaffold a new package with all of the necessary files and configurations.

## `storybook`

When you scaffold a new component, it will include a `.stories.tsx` file. You can use this as a sandbox for developing your component. You can start up `storybook` by running:

```bash
yarn dev
```

## Testing

Tests live in the `cypress/component` directory (a new test should be added for you when you scaffold a new component).

You can run the unit tests with `yarn test` without having to start the dev server. If you want to run tests in `open` mode, run `yarn test:open`.

To run all tests and collect code coverage (with `istanbul` and `nyc`), you can run `yarn test:coverage`. You can then find coverage information inside the generated `coverage` folder after tests finish.
