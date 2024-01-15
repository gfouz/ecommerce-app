"use client"
import { useCartStore } from 'store/store';
import { useState, useEffect } from 'react';
import { CartIcon } from './Icons.tsx';

export function ProductQuantity() {
  const[quantity, setQuantity]= useState(0);
  const cart = useCartStore((state) => state.cart);
  useEffect(()=>{
    setQuantity(cart.length)
  },[cart.length])
  return (
    <button
      type='button'
      className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      
      <div className='flex'>Cart<CartIcon/></div>
      <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
        { quantity }
      </div>
    </button>
  );
}
