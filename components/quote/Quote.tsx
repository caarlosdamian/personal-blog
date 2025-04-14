import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  type: 'tip' | 'warning' | 'information' | string;
}

const styling = {
  tip: {
    style: 'bg-green-200 border-green-500 dark:bg-green-900',
    icon: '/assets/images/icon-tip.svg',
  },
  warning: {
    style: 'bg-yellow-200 border-yellow-500 dark:bg-yellow-900',
    icon: '/assets/images/icon-warning.svg',
  },
  information: {
    style: 'bg-blue-200 border-blue-500 dark:bg-blue-900',
    icon: '/assets/images/icon-info.svg',
  },
};

export const Quote = ({ type, ...props }: Props) => {
  return (
    <div
      className={`flex items-start p-3 rounded-xl border my-3 gap-2 ${
        styling[type as keyof typeof styling].style
      } custom-quote`}
    >
      <Image
        alt="icon"
        width={21}
        height={19}
        src={styling[type as keyof typeof styling].icon}
        className="mt-1"
      />
      {props.children}
    </div>
  );
};
