# CONTRIBUTING

## Required:

- `node`
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

(Our testing solution is still a WIP. This section will change when we implement a better way to integrate `storybook` and `cypress`)

We use `cypress` for both e2e and unit (component) tests -- make sure to place the test inside the appropriate sub-directory in the `cypress/` directory: e2e tests in `cypress/e2e` and unit tests in `cypress/component`.

You can run the unit tests with `yarn test:component` without having a dev server already running.

For e2e tests you have two options:

- with the dev server running in one terminal, open another and run `yarn cy:run`
- run `yarn test:e2e` -- this will run the dev server _and_ `cypress` for you, using `concurrently` to manage each process.

When writing e2e tests, make sure you call `cy.visit()` with the appropriate path (the one you defined inside `src/App.tsx`).

To run all tests you can run `yarn test:all`. With this command, code coverage is collected and reported by `istanbul` and `nyc` -- you can find this information inside the generated `coverage` folder after tests finish.
