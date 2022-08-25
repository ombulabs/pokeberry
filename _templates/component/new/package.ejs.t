---
to: "packages/<%= h.inflection.dasherize(name) %>/package.json"
unless_exists: true
---

{
  "name": "@pokeberry/<%= h.inflection.dasherize(name) %>",
  "private": false,
  "version": "0.1.0",
  "files": ["dist"],
  "type": "module",
  "main": "./dist/index.umd.js",
  "module": "./dist/index.js",
  "types": "dist/types",
  "exports": {
    ".": {
      "require": "./dist/index.umd.js",
      "import": "./dist/index.js",
      "types": "./dist/types"
    }
  },
  "sideEffects": false,
  "license": "MIT",
  "scripts": {
    "build": "tsc && vite build"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
