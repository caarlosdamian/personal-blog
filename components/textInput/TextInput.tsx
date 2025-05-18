'use client';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string | undefined;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T>;
  isSuccess: boolean;
  successMessage: string;
  reset: UseFormReset<T>;
}

export const TextInput = <T extends FieldValues>({
  label,
  errorMessage,
  register,
  name,
  options,
  isSuccess,
  successMessage,
  reset,
  ...props
}: Props<T>) => {
  // const errorMessageAndNotUndefined = errorMessage
  // /assets/images/icon-error.svg
  // /assets/images/icon-success.svg
  const { onChange, ...rest } = register(name as unknown as Path<T>, {
    ...options,
  });

  return (
    <label className="text-light-700_dark-0 flex flex-col gap-1.5 ">
      {label}
      <div className="">
        <input
          className={`border py-3 px-4 rounded-xl focus:outline-blue-800 w-full ${
            typeof errorMessage === 'undefined' && isSuccess === false
              ? 'border-neutral-300'
              : errorMessage
              ? 'border-red-600'
              : 'border-green-700'
          }`}
          onChange={(event) => {
            if (isSuccess) {
              reset();
            }
            onChange(event);
          }}
          {...props}
          {...rest}
          // {...register(name as unknown as Path<T>, { ...options })}
        />
        {typeof errorMessage === 'undefined' && isSuccess === false ? null : (
          <div className="flex items-center gap-2">
            <Image
              src={
                errorMessage
                  ? '/assets/images/icon-error.svg'
                  : '/assets/images/icon-success.svg'
              }
              width={14}
              height={18}
              alt={errorMessage ? 'success icon' : 'erro icon'}
            />
            <span className={errorMessage ? 'text-red-600' : 'text-green-700'}>
              {errorMessage ? errorMessage : successMessage}
            </span>
          </div>
        )}
      </div>
    </label>
  );
};
