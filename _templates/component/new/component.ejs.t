---
to: "packages/<%= h.inflection.dasherize(name) %>/src/<%= h.changeCase.pascal(name) %>.tsx"
unless_exists: true
---

import './<%= h.changeCase.pascal(name) %>.scss';

interface <%= h.changeCase.pascal(name) %>Props {
  
}

export const <%= h.changeCase.pascal(name) %> = ({ }: <%= h.changeCase.pascal(name) %>Props) => {
  return ( );
};
