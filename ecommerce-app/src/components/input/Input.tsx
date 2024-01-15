'use client';
import { useEffect, useState } from 'react';
import { Path, UseFormRegister, FieldErrors } from 'react-hook-form';

interface IFormValues {
  email: string;
}

type InputProps = {
  label: Path<IFormValues>;
  errors: FieldErrors<{ email: string }>;
  register: UseFormRegister<IFormValues>;
};

export default function Input({ label, register, errors }: InputProps) {
  return (
    <fieldset className=' fieldset flex flex-col  p-0 m-0'>
      <div className='inline-flex items-stretch rounded-[1.9rem]'>
        <input
          placeholder='username@site.com'
          className='w-[200px] text-[#fef08a] bg-[#140F0F] shrink h-[2.7rem] px-4  rounded-[1.9rem] rounded-r-none border'
          {...register(label)}
        />
        <button
          className='text-[#140F0F] bg-[#FEF08A] hover:grayscale-[90%] active:scale-95 font-semibold  leading-[1em]  text-[0.875rem] text-center px-[1rem] flex-wrap items-center justify-center shrink cursor-pointer select-none h-[2.7rem] min-h-[2.7rem] inline-flex rounded-[1.9rem] rounded-l-none border'
          type='submit'
        >
          Subscribe
        </button>
      </div>
      <h4 className='text-red-400 mt-1'>{errors?.email?.message}</h4>
    </fieldset>
  );
}
