import { socialLinks } from '@/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  withLabel?: boolean;
}

export const SocialLinks = ({ withLabel }: Props) => {
  return (
    <>
      {withLabel && <p className='text-light-700_dark-0 text-2xl font-semibold'>Follow me</p>}
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            className="bg-neutral-0 dark:bg-neutral-800 p-3 rounded-[8px] border-responsive"
          >
            <Image
              className="dark:invert"
              src={social.logo}
              alt={social.id}
              width="16"
              height="16"
            />
          </a>
        ))}
      </div>
    </>
  );
};
