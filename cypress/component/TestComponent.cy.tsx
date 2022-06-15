import { TestComponent } from '../../instrumented/'

describe('TestComponent.cy.ts', () => {
  it('playground', () => {
    cy.mount(<TestComponent foo='Lipsum' />)
    cy.get('div').should('contain.text', 'Hello, world!')
  })
})
