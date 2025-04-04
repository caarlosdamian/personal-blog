'use client';
import { ThemeContext, ThemeContextType } from '@/app/context/ThemeContext';
import { use } from 'react';
import Image from 'next/image';
import { Button } from '../button/Button';
import { MenuContext } from '@/app/context/MenuContext';
import { navLinks } from '@/app/constants';
import { MenuItem } from '../menuItem/MenuItem';

export const Navbar = () => {
  const { handleToogle, isDarkMode } = use(
    ThemeContext
  ) as unknown as ThemeContextType;
  const { isOpen, toggleMenu } = use(MenuContext);

  const closeMenuImg = isDarkMode
    ? '/assets/images/icon-menu-close.svg'
    : '/assets/images/icon-menu-close-light.svg';

  const menuImg = isDarkMode
    ? '/assets/images/icon-menu-light.svg'
    : '/assets/images/icon-menu.svg';

  return (
    <header className="container relative rounded-[10px] bg-neutral-0 p-[6px] dark:bg-neutral-800 border-responsive z-10 max-w-[640px]">
      <section aria-label="Main Navigation" className="flex justify-between">
        <div className="">
          <Image
            src="/assets/images/image-avatar.jpg"
            width={40}
            height={40}
            alt="avatar"
            className="rounded-md"
          />
        </div>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="items-center gap-6 hidden md:flex">
              {navLinks.map((navLink, index) => (
                <li key={navLink.id}>
                  <MenuItem
                    element={navLink}
                    isDesktop
                    lastItem={index === navLinks.length}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant="ghost"
            aria-haspopup="true"
            onClick={toggleMenu}
            className={`rounded-[8px] p-3 md:hidden ${
              isOpen ? ' bg-neutral-700  dark:bg-neutral-100 ' : ''
            }`}
          >
            <Image
              src={isOpen ? closeMenuImg : menuImg}
              width={20}
              height={20}
              alt="menu"
            />
          </Button>
          <Button
            variant="ghost"
            className="p-3 rounded-[8px] bg-neutral-100 dark:bg-neutral-900 border-responsive"
            onClick={() => handleToogle(isDarkMode ? 'light' : 'dark')}
          >
            <Image
              src={
                isDarkMode
                  ? '/assets/images/icon-sun.svg'
                  : '/assets/images/icon-moon.svg'
              }
              alt={isDarkMode ? 'sun' : 'moon'}
              width="16"
              height="16"
            />
          </Button>
        </div>
      </section>
    </header>
  );
};
