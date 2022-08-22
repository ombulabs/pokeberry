---
to: "packages/<%= h.inflection.dasherize(name) %>/tsconfig.json"
unless_exists: true
---

{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": false,
    "noEmit": true,
    "jsx": "react-jsx",
    "paths": {
      "@utils": ["../../utils/index.ts"]
    }
  },
  "include": ["src"],
  "exclude": ["dist"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
