'use client';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.tsx';
import { useCartStore } from '../../store/store';
import { Product } from './Product';

export function Products({ products }) {
  const cart = useCartStore((state) => state.cart);
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className='products'>
      <ul className='products__list'>
        {products.slice(0, 10).map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </main>
  );
}
