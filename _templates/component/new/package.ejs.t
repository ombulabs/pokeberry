---
to: "packages/<%= h.inflection.dasherize(name) %>/package.json"
unless_exists: true
---

{
  "name": "@pokeberry/<%= h.inflection.dasherize(name) %>",
  "private": false,
  "version": "0.0.1",
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "main": "./dist/<%= h.inflection.dasherize(name) %>.umd.js",
  "module": "./dist/<%= h.inflection.dasherize(name) %>.es.js",
  "exports": {
    ".": {
      "require": "./dist/<%= h.inflection.dasherize(name) %>.umd.js",
      "import": "./dist/<%= h.inflection.dasherize(name) %>.es.js"
    }
  },
  "sideEffects": false,
  "license": "MIT",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  },
  "dependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
