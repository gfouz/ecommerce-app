'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import FouzLogo from 'logo/FouzLogo';
import Link from 'next/link';
import { ProductQuantity } from 'components/products/ProductQuantity';

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className='bg-[#000004] text-neutral-300'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a
          href='https://github.com/gfouz'
          className='flex items-center space-x-3 rtl:space-x-reverse'
          data-tip='Join me on Github!'
        >
          <FouzLogo size='30' color='#e0f2fe' />
          <span className='self-center whitespace-nowrap text-xl font-semibold '>
            CoffeeShop
          </span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          type='button'
          className='text-cyan-950 md:hidden  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2'
        >
          {open ? 'close' : 'open'}
        </button>

        <div
          className={
            open
              ? 'w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }
          id='navbar-solid-bg'
        >
          <ul className='mt-4 flex flex-col rounded-lg  text-left font-medium rtl:space-x-reverse dark:border-gray-700  md:mt-0 md:flex-row md:space-x-8 md:border-0 '>
            <li className=''>
              <Link
                href='/'
                className='block rounded px-3 py-2 hover:bg-gray-100  dark:hover:bg-gray-700  md:border-0 md:p-0 md:hover:bg-transparent hover:text-[--scion] md:dark:hover:bg-transparent hover:text-[--scion]'
              >
                {pathname !== '/' ? 'home' : null}
              </Link>
            </li>
            <li className=''>
              <Link
                href='/about'
                className='block rounded px-3 py-2 hover:bg-gray-100  dark:hover:bg-gray-700  md:border-0 md:p-0 md:hover:bg-transparent hover:text-[--scion] md:dark:hover:bg-transparent hover:text-[--scion]'
              >
                {pathname !== '/about' ? 'about' : null}
              </Link>
            </li>
            <li className=''>
              <Link
                href='/cart'
                className='block rounded px-3 py-2 hover:bg-gray-100  dark:hover:bg-gray-700  md:border-0 md:p-0 md:hover:bg-transparent hover:text-[--scion] md:dark:hover:bg-transparent hover:text-[--scion]'
              >
                {pathname !== '/cart' ? <ProductQuantity /> : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
