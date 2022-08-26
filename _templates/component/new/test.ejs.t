---
to: "cypress/component/<%= h.changeCase.pascal(name) %>.spec.tsx"
unless_exists: true
---

import { composeStories } from '@storybook/testing-react';
import * as stories from '../../packages/<%= h.inflection.dasherize(name) %>/src/<%= h.changeCase.pascal(name) %>.stories';

const { <%= h.changeCase.pascal(name) %>Story } = composeStories(stories);

describe('<%= h.inflection.dasherize(name) %>', () => {
  beforeEach(() => {
    cy.mount(<<%= h.changeCase.pascal(name) %>Story />);
  });

});
