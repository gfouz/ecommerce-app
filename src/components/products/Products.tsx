'use client';
import './Products.css';
import { useCartStore } from '../../store/store';
import { Product } from './Product';

export interface ProductsAttributes {
    id: number;
    title: string;
    description?: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?:string[];
    
}

interface ProductsProps {
  products: ProductsAttributes[];
}
export function Products({ products } : ProductsProps ) {
  const cart = useCartStore((state) => state.cart);

  /*const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };*/

  return (
    <main className='products px-4'>
      <ul className='products__list'>
        {products.slice(0, 10).map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </main>
  );
}
