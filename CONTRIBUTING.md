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

The components live in the `/packages` directory. Each one is an individual `npm` package (meaning they each have a `package.json`, `LICENSE`, `README.md`, and appropriate config files). Right now, the process for adding a new package is manual (copy/paste from another package and replace names), but we are going to automate this soon.

## `/src`

Inside `src`, we have a demo app for use during development and testing. When adding a new demo, make sure you:

- add it in the `src/demos` folder
- import the component into `src/App.tsx`
- add the component to the `DEMOS` array with the following format: `{ path: 'my-component', element: <MyComponent /> }`

After that, you can run `yarn dev` and visit the demo app at `localhost:3000`. You should see a link to your component on the home page.

## Testing

We use `cypress` for both e2e and unit (component) tests -- make sure to place the test inside the appropriate sub-directory in the `cypress/` directory: e2e tests in `cypress/e2e` and unit tests in `cypress/component`.

You can run the unit tests with `yarn test:component` without having a dev server already running.

For e2e tests you have two options:

- with the dev server running in one terminal, open another and run `yarn cy:run`
- run `yarn test:e2e` -- this will run the dev server _and_ `cypress` for you, using `concurrently` to manage each process.

When writing e2e tests, make sure you call `cy.visit()` with the appropriate path (the one you defined inside `src/App.tsx`).

To run all tests you can run `yarn test:all`. With this command, code coverage is collected and reported by `istanbul` and `nyc` -- you can find this information inside the generated `coverage` folder after tests finish.
