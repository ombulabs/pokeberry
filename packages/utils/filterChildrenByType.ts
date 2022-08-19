import { Children, isValidElement } from 'react';

export const filterChildrenByType = (
  children: React.ReactNode,
  // eslint-disable-next-line
  type: string | React.JSXElementConstructor<any>
) => {
  return Children.toArray(children).filter((child) => isValidElement(child) && child.type === type);
};
