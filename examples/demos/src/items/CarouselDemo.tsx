import { useRef, useState } from 'react';
import {
  SwipeCarousel,
  SwipeCarouselItem,
  SwipeCarouselIndicator,
  SwipeCarouselRef,
} from '@pokeberry/swipe-carousel';
const items = [
  { title: 'Item 1', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 2', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 3', body: 'Lorem ipsum blah blah blah' },
  { title: 'Item 4', body: 'Lorem ipsum blah blah blah' },
];

const CarouselDemo = () => {
  const [demo, setDemo] = useState(items[0].title);
  const carousel = useRef<SwipeCarouselRef>(null);

  const handleIndexChange = (index: number) => {
    setDemo(items[index].title);
  };

  const scrollTo = () => {
    if (!carousel.current) return;
    carousel.current.scrollToNext();
  };

  return (
    <>
      <button className='scroll-to-next-button' onClick={scrollTo}>
        Scroll
      </button>
      <h1 className='current-item'>{demo}</h1>
      <SwipeCarousel className='demo-1' ref={carousel} onIndexChange={handleIndexChange}>
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
    </>
  );
};

export default CarouselDemo;
