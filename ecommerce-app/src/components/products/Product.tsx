'use client';
import { useState, useEffect } from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.tsx';
import { useCartStore } from 'store/store';
import { ProductQuantity } from 'components/products/ProductQuantity'


export function Product({ product }) {
  const cart = useCartStore((state) => state.cart);
  const _product = cart.find( item => item.id === product.id)
  const dispatch = useCartStore((state) => state.dispatch);
  const [quantity, setQuantity]=useState(0)
  useEffect(()=>{
     setQuantity(_product?.quantity)
  },[_product?.quantity])
  
  return (
    <li className='product'>
      <img
        className='object-fit-fill'
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'addToCart', payload: product });
          }}
        >
          {<AddToCartIcon />}
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'removeFromCart',
              payload: product,
            });
          }}
        >
          {<RemoveFromCartIcon />}
        </button>
      </div>
      <p className='text-[#f1f1f1]'>{quantity} items</p>
    </li>
  );
}
