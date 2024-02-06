'use client';
import { useState, useEffect } from 'react';
import { CartSolid } from './Icons';
import { useCartStore } from 'store/store';
import { ProductsAttributes } from './Products';

interface ProductAttr {
  product: ProductsAttributes;
}

export function Product({ product }: ProductAttr) {
  const cart = useCartStore((state) => state.cart);
  const _product = cart.find((item) => item.id === product.id);
  const dispatch = useCartStore((state) => state.dispatch);
  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    let value = _product?.quantity ? _product.quantity : 0;
    setQuantity(value);
  }, [_product?.quantity]);

  return (
    <li className='product'>
      <img className='fit-fill' src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - $
        {quantity > 1 ? product.price * quantity : product.price}
      </div>
      <div className='flex flex-col '>
        <button
          type='button'
          className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART', payload: product });
          }}
        >
          <CartSolid />
          {quantity > 0 ? 'Buy more' : 'Buy now!'}
          {quantity ? (
            <span className='inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full;'>
              {quantity}
            </span>
          ) : null}
        </button>

        {quantity >= 2 ? (
          <button
            type='button'
            className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'
            onClick={() => {
              dispatch({
                type: 'SUBTRACT_FROM_CART',
                payload: product,
              });
            }}
          >
            Subtract item
          </button>
        ) : null}
        {quantity === 1 ? (
          <button
            className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'
            onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: product,
              });
            }}
          >
            Remove from cart
          </button>
        ) : null}
      </div>
    </li>
  );
}
