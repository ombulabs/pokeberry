const CAROUSEL_DEMO = '/carousel-demo';

describe('SwipeCarousel', () => {
  const WIDTH = Cypress.config('viewportWidth');
  beforeEach(() => {
    cy.visit(CAROUSEL_DEMO);
  });

  it('displays the Carousel items', () => {
    cy.contains('Item 1');
    cy.contains('Item 2');
    cy.contains('Item 3');
    cy.contains('Item 4');
  });

  it('calls the onIndexChange callback', () => {
    cy.get('.pokeberry-swipe-carousel__outer-container').scrollTo(WIDTH, 0);
    cy.get('.current-item').should('contain.text', 'Item 2');
  });

  it('scrolls with the scrollToNext method', () => {
    cy.contains('Scroll').click();
    cy.get('.current-item').should('contain.text', 'Item 2');
    cy.contains('Scroll').click();
    cy.get('.current-item').should('contain.text', 'Item 3');
    cy.contains('Scroll').click();
    cy.get('.current-item').should('contain.text', 'Item 4');
    cy.contains('Scroll').click();
    // nothing should happen the last time
    cy.get('.current-item').should('contain.text', 'Item 4');
  });
});
