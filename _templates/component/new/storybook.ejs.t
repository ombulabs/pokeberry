---
to: "packages/<%= h.inflection.dasherize(name) %>/src/<%= h.changeCase.pascal(name) %>.stories.tsx"
unless_exists: true
---

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= h.changeCase.pascal(name) %> } from '.';

export const <%= h.changeCase.pascal(name) %>Story: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = () => {
  return (
    <>
      <<%= h.changeCase.pascal(name) %> />
    </>
  );
};
export default { title: '<%= h.inflection.dasherize(name) %>', component: <%= h.changeCase.pascal(name) %> } as ComponentMeta<
  typeof <%= h.changeCase.pascal(name) %>
>;
