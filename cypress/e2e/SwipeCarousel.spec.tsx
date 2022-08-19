import { getCyInIFrame } from '../support/helpers';

describe('SwipeCarousel', () => {
  const WIDTH = Cypress.config('viewportWidth');
  beforeEach(() => {
    cy.visit('/');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
  });

  it('displays the Carousel items', () => {
    getCyInIFrame().contains('Item 1');
  });

  it('calls the onIndexChange callback', () => {
    getCyInIFrame().find('.pokeberry-swipe-carousel__outer-container').scrollTo(WIDTH, 0);
    getCyInIFrame().find('.current-item').should('contain.text', 'Item 2');
  });

  it('scrolls with the scrollToNext method', () => {
    getCyInIFrame().contains('Scroll').click();
    getCyInIFrame().find('.current-item').should('contain.text', 'Item 2');
    getCyInIFrame().contains('Scroll').click();
    getCyInIFrame().find('.current-item').should('contain.text', 'Item 3');
    getCyInIFrame().contains('Scroll').click();
    getCyInIFrame().find('.current-item').should('contain.text', 'Item 4');
    getCyInIFrame().contains('Scroll').click();
    // nothing should happen the last time
    getCyInIFrame().find('.current-item').should('contain.text', 'Item 4');
  });
});
