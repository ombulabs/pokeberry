import '@cypress/code-coverage/support';
import './commands';

declare global {
  // eslint-disable-next-line
  namespace Cypress {
    interface Chainable {
      cy: typeof cy;
    }
  }
}
