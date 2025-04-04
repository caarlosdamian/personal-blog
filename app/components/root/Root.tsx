'use client';
import React, { PropsWithChildren, use } from 'react';
import { Menu } from '../menu/Menu';
import { MenuContext } from '@/app/context/MenuContext';

export const Root = ({ children }: PropsWithChildren) => {
  const { isOpen } = use(MenuContext);
  return (
    <div className="px-[4px] container relative -top-2 max-w-[640px]">
      <div
        className=" w-full border-responsive
    px-3 pt-6"
      >
        {isOpen && <Menu />}
        <div className={`${isOpen ? 'pt-8 md:pt-0' : ''}`}>{children}</div>
      </div>
    </div>
  );
};
