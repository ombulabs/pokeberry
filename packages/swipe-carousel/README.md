# swipe-carousel

## Install

```bash
npm i @pokeberry/swipe-carousel
```

`swipe-carousel` is a mobile-focused carousel package that is implemented using CSS `scroll-snap` APIs.

It contains three components. A simple set up may look like this:

```tsx
import {
  SwipeCarousel,
  SwipeCarouselItem,
  SwipeCarouselIndicator,
  SwipeCarouselRef,
} from '@pokeberry/swipe-carousel';
// remember to import the styles that are included
// style.scss is also available to import
import '@pokeberry/swipe-carousel/dist/style.css';

const CarouselExample = () => {
  const [title, setTitle] = useState(items[0].title);
  const carouselRef = useRef<SwipeCarouselRef>(null);

  const handleIndexChange = (index: number) => {
    setTitle(items[index].title);
  };

  const scrollTo = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollToNext();
  };

  return (
    <>
      <button className='scroll-to-next-button' onClick={scrollTo}>
        Scroll
      </button>
      <h1 className='current-item'>{title}</h1>
      <SwipeCarousel ref={carouselRef} onIndexChange={handleIndexChange}>
        {/* pretend `items` is an array of stuff you want to display */}
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
```

## `SwipeCarousel`

This is the container that holds your carousel items. Since it's type extends `React.ComponentPropsWithoutRef<'div'>`, you can also pass `className` to it and that will be added to the outermost container's class list.

### Props and interfaces

```typescript
interface SwipeCarouselProps extends React.ComponentPropsWithoutRef<'div'> {
  onIndexChange?: (currentIndex: number) => void;
  hideScrollbar?: boolean;
  scrollSnapOptions?: ScrollSnapOptions;
}

interface ScrollSnapOptions {
  scrollSnapAlign?: 'center' | 'start' | 'end';
  scrollSnapStop?: 'always' | 'normal';
  scrollSnapMargin?: string;
  scrollSnapMarginTop?: string;
  scrollSnapMarginBottom?: string;
  scrollSnapMarginLeft?: string;
  scrollSnapMarginRight?: string;
}
```

### Details

- `onIndexChange`: accepts a function that receives the index of the currently visible item in the carousel. default is `undefined`.
- `hideScrollbar`: on mobile, having a scrollbar isn't that important. but if you wanted to use this component in a non-mobile setting you can set `hideScrollbar="false"`.
- `scrollSnapOptions`: some `scroll-snap`-related CSS rules that will passed to each carousel item.

### Instance method

`SwipeCarousel` also exposes a `scrollToNext` instance method that you can use to programatically go to the next slide.

**Note**: it relies on the `scrollBehavior` option of `window.scrollTo`, so you may need a polyfill.

You can use it by attaching a `ref` to the component instance:

```tsx
const CarouselExample = () => {
  // create ref
  const carouselRef = useRef<SwipeCarouselRef>(null);

  const scrollTo = () => {
    if (!carouselRef.current) return;
    // call method from the ref's `current` property
    carouselRef.current.scrollToNext();
  };

  return (
    <>
      <button className='scroll-to-next-button' onClick={scrollTo}>
        Scroll
      </button>
      {/* attach ref to component instance */}
      <SwipeCarousel ref={carouselRef}>...</SwipeCarousel>
    </>
  );
};
```

## `SwipeCarouselItem`

A wrapper for your carousel items. We're using a wrapper, instead of just passing JSX elements directly as `children`, because this makes it easier to add a unique `className` to each item.

```typescript
interface SwipeCarouselItemProps {
  children: React.ReactNode;
  className?: string;
}
```

## `SwipeCarouselIndicator`

Similar to `SwipeCarouselItem`, this component is present (instead of being a prop) to make it easier to pass `className` and styles to it directly -- making customization easier.

```typescript
export interface IndicatorProps {
  className?: string;
}
```
