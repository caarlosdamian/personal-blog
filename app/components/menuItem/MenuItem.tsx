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
}

export const MenuItem = ({ element, lastItem }: Props) => {
  const pathname = usePathname();
  const { toggleMenu } = use(MenuContext);
  return (
    <>
      <Link
        href={element.path}
        className={`text-lg ${
          pathname === element.path
            ? 'text-neutral-900 dark:text-neutral-0'
            : 'title'
        }`}
        onClick={toggleMenu}
      >
        {element.label}
      </Link>
      {!lastItem && (
        <hr className="h-[1px] border-none bg-neutral-200 dark:bg-neutral-700" />
      )}
    </>
  );
};
