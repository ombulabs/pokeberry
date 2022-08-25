---
to: "packages/<%= h.inflection.dasherize(name) %>/src/index.ts"
unless_exists: true
---

export * from './<%= h.changeCase.pascal(name) %>';
