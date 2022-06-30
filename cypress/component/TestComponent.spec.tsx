import { TestComponent } from '../../lib/components';

describe('TestComponent.cy.ts', () => {
  it('playground', () => {
    cy.mount(<TestComponent foo={'bar'} />);
    cy.get('div').should('contain.text', 'Hello, world!');
  });

  it('playground', () => {
    cy.mount(<TestComponent />);
    cy.get('div').should('contain.text', 'Hello, test!');
  });
});
