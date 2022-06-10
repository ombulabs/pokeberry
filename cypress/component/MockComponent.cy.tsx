import MockComponent from '../fixtures/MockComponent'

describe('TestComponent.cy.ts', () => {
    it('playground', () => {
      cy.mount(<MockComponent />)
      cy.get('div').should('contain.text', 'baz false')
    })
  })