'use client';
import { navLinks } from '@/app/constants';
import { ThemeContext, ThemeContextType } from '@/app/context/ThemeContext';
import Link from 'next/link';
import { use } from 'react';
import Image from 'next/image';
import { Button } from '../button/Button';

export const Navbar = () => {
  const { mode, handleToogle, isDarkMode } = use(
    ThemeContext
  ) as unknown as ThemeContextType;
  console.log(isDarkMode);
  console.log(mode);
  return (
    <header className='container mx-auto rounded-[10px] bg-neutral-0 p-[6px] dark:bg-neutral-800'>
      <nav aria-label="Main Navigation">
        {/* <button onClick={() => handleToogle(mode === 'dark' ? 'light' : 'dark')}>
          Toggle
        </button> */}
        {/* <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link className="title" href={navLink.path}>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul> */}
        <div className="">
          <Button
            variant="ghost"
            className="p-3 rounded-[8px] bg-neutral-100 dark:bg-neutral-900 border-responsive"
            onClick={() => handleToogle()}
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
      </nav>
    </header>
  );
};
