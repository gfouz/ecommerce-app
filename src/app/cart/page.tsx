'use client';
import { useCartStore } from '../../store/store';
import { Product } from 'components/products/Product';
import Navbar from 'components/navbar/Navbar';

function Cart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <ul className='responsive-grid'>
        {cart?.map((product) => <Product product={product} key={product.id}/>)}
      </ul>
    </main>
  );
}

export default Cart;
