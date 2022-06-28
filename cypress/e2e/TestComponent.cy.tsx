describe('TestComponent.cy.ts', () => {
  it('playground', () => {
    cy.visit('http://localhost:3000/next-test');
    cy.get('div').should('contain.text', 'Hello, world!');
  });
});
