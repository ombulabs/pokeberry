import {
  SwipeCarousel,
  SwipeCarouselIndicator,
  SwipeCarouselItem,
} from '@pokeberry/swipe-carousel/src';

const items = [
  { title: 'Item 1', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 2', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 3', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 4', body: 'Lorem ipsum blah blah blah' },
];

describe('SwipeCarousel', () => {
  it('should render carousel', () => {
    cy.mount(
      <SwipeCarousel className='demo-1'>
        {items.map((item) => (
          <SwipeCarouselItem key={item.title}>
            <div key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </SwipeCarouselItem>
        ))}
        <SwipeCarouselIndicator />
      </SwipeCarousel>
    );
    cy.contains('Item 1');
    cy.contains('Item 2');
    cy.contains('Item 3');
    cy.contains('Item 4');
  });
});
