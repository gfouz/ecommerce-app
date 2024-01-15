import React from 'react';

type TooltipProps = {
  link?: string;
  info: string;
  children: React.ReactNode;
};

export default function Tooltip({ link, children, info }: TooltipProps) {
  return (
    <a
      href={link || '#'}
      className='group relative inline-block  hover:text-red-500 duration-300'
    >
      {children}

      <span className='bg-[#fcd34d] text-[#140F0F] flex justify-center font-semibold absolute mt-1 hidden group-hover:flex -left-5 top-[100%]  w-48 px-1 py-2  rounded-lg text-center  text-xs after:content-[" "] after:absolute after:left-1/2  after:bottom-[100%]  after:border-8 after:border-b-[#fcd34d]  after:border-x-transparent  after:border-t-transparent'>
        {info || 'some useful information'}
      </span>
    </a>
  );
}
