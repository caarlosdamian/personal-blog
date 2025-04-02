import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface Props
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  variant?: 'primary' | 'ghost';
}

export const Button = ({
  variant = 'primary',
  children,
  className,
  ...props
}: Props) => {
  const styling = {
    primary:
      'bg-blue-500 px-6 py-3 text-lg text-neutral-900 rounded-[10px] font-medium font-dm hover:bg-blue-700',
    ghost: '',
  };

  return (
    <button className={`${className} ${styling[variant]} cursor-pointer`} {...props}>
      {children}
    </button>
  );
};
