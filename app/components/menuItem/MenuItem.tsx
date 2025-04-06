'use client';

import { MenuContext } from '@/app/context/MenuContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { use } from 'react';

interface Props {
  element: {
    path: string;
    label: string;
  };
  lastItem: boolean;
  isDesktop?: boolean;
}

export const MenuItem = ({ element, lastItem, isDesktop }: Props) => {
  const pathname = usePathname();
  const { toggleMenu } = use(MenuContext);
  return (
    <>
      <Link
        href={element.path}
        className={`cursor-pointer ${isDesktop ? 'text-base' : 'text-lg'} ${
          pathname === element.path
            ? 'text-neutral-900 dark:text-neutral-0'
            : 'text-ligh-600_dark-400'
        }`}
        onClick={toggleMenu}
      >
        {element.label}
      </Link>
      {!lastItem ||
        (isDesktop && (
          <hr className="h-[1px] border-none bg-neutral-200 dark:bg-neutral-700" />
        ))}
      {isDesktop && (
        <hr
          className={`h-[3px] border-none  ${
            pathname === element.path ? 'bg-blue-700' : 'bg-transparent'
          }`}
        />
      )}
    </>
  );
};
