import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isSuccess: boolean | undefined;
}

export const TextInput = ({ label, isSuccess, ...props }: Props) => {
  // const isSuccessAndNotUndefined = isSuccess
  // /assets/images/icon-error.svg
  // /assets/images/icon-success.svg

  return (
    <label className="text-light-700_dark-0 flex flex-col gap-1.5 ">
      {label}
      <div className="">
        <input
          className={`border py-3 px-4 rounded-xl focus:outline-blue-800 ${
            typeof isSuccess === 'undefined'
              ? 'border-neutral-300'
              : isSuccess
              ? 'border-green-700'
              : 'border-red-600'
          }`}
          {...props}
        />
        {typeof isSuccess === 'undefined' ? null : (
          <div className="flex items-center gap-2">
            <Image
              src={
                isSuccess
                  ? '/assets/images/icon-success.svg'
                  : '/assets/images/icon-error.svg'
              }
              width={14}
              height={18}
              alt={isSuccess ? 'success icon' : 'erro icon'}
            />
            <span className={isSuccess ? 'text-green-700' : 'text-red-600'}>
              Please enter a valid email address.
            </span>
          </div>
        )}
      </div>
    </label>
  );
};
