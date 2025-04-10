import Link from 'next/link';
import React from 'react';

interface Props {
  to: string;
  label: string;
}

export const CustomLink = ({ label, to }: Props) => {
  return (
    <Link href={to} className="w-fit flex flex-col">
      <span className="text-lg font-sans font-medium  -tracking-[0.5px] text-light-700_dark-0">
        {label}
      </span>
      <hr className="bg-blue-700 h-1 border-none" />
    </Link>
  );
};
