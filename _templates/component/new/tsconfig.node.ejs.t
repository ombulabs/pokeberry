---
to: "packages/<%= h.inflection.dasherize(name) %>/tsconfig.node.json"
unless_exists: true
---

{
  "compilerOptions": {
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node"
  },
  "include": ["vite.config.ts"],
}
