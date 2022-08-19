import {
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
// TODO: If replace to @utils will fall down with an error that module doesn't exist
import { clamp, filterChildrenByType } from '../../utils';
import './SwipeCarousel.scss';

export interface SwipeCarouselProps extends React.ComponentPropsWithoutRef<'div'> {
  onIndexChange?: (currentIndex: number) => void;
  hideScrollbar?: boolean;
  scrollSnapOptions?: ScrollSnapOptions;
}

export interface SwipeCarouselRef {
  scrollToNext: (smooth?: boolean) => void;
}

export interface ScrollSnapOptions {
  scrollSnapAlign?: 'center' | 'start' | 'end';
  scrollSnapStop?: 'always' | 'normal';
  scrollSnapMargin?: string;
  scrollSnapMarginTop?: string;
  scrollSnapMarginBottom?: string;
  scrollSnapMarginLeft?: string;
  scrollSnapMarginRight?: string;
}

const defaultOptions: ScrollSnapOptions = {
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always',
  scrollSnapMargin: '0px',
};

interface ContextType {
  scrollSnapStyles: ScrollSnapOptions;
  items: (
    | string
    | number
    // eslint-disable-next-line
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
  )[];
  currentIndex: number;
}

const ComponentContext = createContext<ContextType>({
  scrollSnapStyles: {},
  items: [],
  currentIndex: 0,
});

export const SwipeCarousel: ForwardRefExoticComponent<
  SwipeCarouselProps & RefAttributes<SwipeCarouselRef>
> = forwardRef(
  (
    {
      onIndexChange,
      hideScrollbar = true,
      scrollSnapOptions,
      className = '',
      children,
    }: SwipeCarouselProps,
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, setWidth] = useState(0);

    const scrollSnapStyles = useMemo(
      () => ({ ...defaultOptions, ...scrollSnapOptions }),
      [scrollSnapOptions]
    );
    const items = useMemo(() => filterChildrenByType(children, SwipeCarouselItem), [children]);
    const itemsLength = useMemo(() => items.length, [items]);
    const indicator = useMemo(
      () => filterChildrenByType(children, SwipeCarouselIndicator),
      [children]
    );

    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const innerContainer = innerRef.current!;
      const innerContainerWidth = innerContainer.getBoundingClientRect().width;
      setWidth(innerContainerWidth);
    }, []);

    useEffect(() => {
      /* istanbul ignore next */
      if (!onIndexChange) return;
      onIndexChange(currentIndex);
    }, [currentIndex, onIndexChange]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const index = clamp(Math.round(e.currentTarget.scrollLeft / width), 0, itemsLength - 1);
      setCurrentIndex(index);
    };

    const scrollToNext = (smooth = true) => {
      const nextIndex = currentIndex + 1;
      if (nextIndex > itemsLength - 1) return;
      const leftScroll = width * nextIndex;
      outerRef.current!.scrollTo({
        left: leftScroll,
        top: 0,
        behavior: smooth ? 'smooth' : 'auto',
      });
    };

    useImperativeHandle(ref, () => ({
      scrollToNext,
    }));

    return (
      <ComponentContext.Provider value={{ scrollSnapStyles, items, currentIndex }}>
        <div
          ref={outerRef}
          onScroll={handleScroll}
          className={
            'pokeberry-swipe-carousel__outer-container' +
            `${hideScrollbar ? ' hide-scrollbar' : ''} ${className}`
          }
        >
          <div ref={innerRef} className='pokeberry-swipe-carousel__inner-container'>
            {items}
          </div>
        </div>
        {indicator}
      </ComponentContext.Provider>
    );
  }
);
SwipeCarousel.displayName = 'SwipeCarousel';

export interface SwipeCarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export const SwipeCarouselItem = ({ children, className = '' }: SwipeCarouselItemProps) => {
  const { scrollSnapStyles } = useContext(ComponentContext);

  return (
    <div className={`pokeberry-swipe-carousel__item ${className}`} style={{ ...scrollSnapStyles }}>
      {children}
    </div>
  );
};

export interface IndicatorProps {
  className?: string;
}

export const SwipeCarouselIndicator = ({ className = '' }: IndicatorProps) => {
  const { items, currentIndex } = useContext(ComponentContext);

  return (
    <div className={`pokeberry-swipe-carousel__indicator-container ${className}`}>
      {items.map((_, index) => (
        <div
          key={index}
          className={`pokeberry-swipe-carousel__indicator ${
            index === currentIndex ? 'active' : ''
          }`}
        />
      ))}
    </div>
  );
};
