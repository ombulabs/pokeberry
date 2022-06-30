# CONTRIBUTING

## Required:

* `node`
* `yarn` (v1)

## Getting started

```bash
git clone <this-repo>
cd pokeberry
yarn install
```

## `/lib`

The components and hooks themselves live in the `/lib` directory. When adding a new component or hook, make sure to add an export from the `index.ts` file in the appropriate directory (`lib/components` and `lib/hooks`, respectively).

## `/src`

Inside `src`, we have a demo app for use during development and testing. When adding a new demo, make sure you:

* add it in the `src/demos` folder
* import the component into `src/App.tsx`
* add the component to the `DEMOS` array with the following format: `{ path: 'my-component', element: <MyComponent /> }`

After that, you can run `yarn dev` and visit the demo app at `localhost:3000`. You should see a link to your component on the home page.

## Testing

We use `cypress` for both e2e and unit (component) tests -- make sure to place the test inside the appropriate sub-directory in the `cypress/` directory: e2e tests in `cypress/e2e` and unit tests in `cypress/component`.

You can run the unit tests with `yarn test:component` without having a dev server already running.

For e2e tests you have two options:
* with the dev server running in one terminal, open another and run `yarn cy:run`
* run `yarn test:e2e` -- this will run the dev server *and* `cypress` for you, using `concurrently` to manage each process.

When writing e2e tests, make sure you call `cy.visit()` with the appropriate path (the one you defined inside `src/App.tsx`).

To run all tests you can run `yarn test:all`. With this command, code coverage is collected and reported by `istanbul` and `nyc` -- you can find this information inside the generated `coverage` folder after tests finish.
