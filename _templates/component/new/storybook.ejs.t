---
to: "packages/<%= h.inflection.dasherize(name) %>/src/<%= h.changeCase.pascal(name) %>.stories.tsx"
unless_exists: true
---

import { <%= h.changeCase.pascal(name) %> } from '.';

export const <%= h.changeCase.pascal(name) %>Example = () => {
  return (
    <>
      <<%= h.changeCase.pascal(name) %> />
    </>
  );
};
export default { title: '@pokeberry' };
