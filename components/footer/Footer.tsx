import { socialLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-4 w-full border-t-[1px] border-t-neutral-200 dark:border-t-neutral-700">
      <span className="font-sans text-base text-light-600_dark-400">
        Made with ❤️ and ☕️
      </span>
      <div className="flex items-center gap-4 ">
        {socialLinks.map((element) => (
          <Link key={`${element.id}-footer`} href={element.url} target='_blank'>
            <Image className='dark:invert' width={16} height={16} alt={element.id} src={element.logo} />
          </Link>
        ))}
      </div>
    </footer>
  );
};
