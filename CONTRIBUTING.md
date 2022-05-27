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

The components and hooks themselves live in the `/lib` directory. When adding a new component or hook, make sure to add an export from the `index.ts` file in the appropriate directory.

## `/src`

Inside `src`, we have a demo app for use during development and testing. When adding a new demo, make sure you:

* import the component into `src/demos/App.tsx`
* add the component to the `DEMOS` array with the following format: `{ path: 'my-component', element: <MyComponent /> }`

After that, you can run `yarn dev` and visit the demo app at `localhost:3000`. You should see a link to your component on the home page.
