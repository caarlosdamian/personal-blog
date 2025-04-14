import {
  Children,
  isValidElement,
  ReactNode,
  ReactElement,
  JSXElementConstructor,
} from 'react';

const getExactTypeFromOptions = (children: string) => {
  const quoteType = children.split(':')[0].toLocaleLowerCase();

  switch (quoteType) {
    case 'tip':
      return { type: 'tip' };
      break;
    case 'warning':
      return { type: 'warning' };
      break;
    case 'information':
      return { type: 'information' };
      break;

    default:
      break;
  }
};

export const getBlockquoteType = (children: ReactNode): { type: string } => {
  const filterElements = Children.toArray(children)
    .map((element): { type: string } | null => {
      if (isValidElement(element)) {
        const el = element as ReactElement<
          { children?: ReactNode },
          string | JSXElementConstructor<unknown>
        >;

        const childContent = el.props.children;

        if (typeof childContent === 'string') {
          return getExactTypeFromOptions(childContent) as { type: string };
        }

        return getBlockquoteType(childContent);
      }

      return null;
    })
    .flat()
    .filter((child) => {
      return child !== null;
    });

  return filterElements[0];
};
