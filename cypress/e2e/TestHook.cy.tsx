describe('TestComponent.cy.ts', () => {
    it('playground', () => {
      cy.visit('http://localhost:3000/test-hook')
      cy.get('div').should('contain.text', 'baz false')
    })
  })