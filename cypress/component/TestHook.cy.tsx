import { useTestHook } from  "../../instrumented"

describe('TestComponent.cy.ts', () => {
    it('playground', () => {
      cy.mount(useTestHook('bar'))
    })
  })