describe('TestComponent.cy.ts', () => {
    it('playground', () => {
      cy.visit('http://localhost:3000/test-component')
      cy.get('div').should('contain.text', 'baz false')
    })
  })