describe('TestHook', () => {
  it('playground', () => {
    cy.visit('/test-hook');
    cy.get('div').should('contain.text', 'baz false');
  });
});
