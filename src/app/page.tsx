import productlist from '../mocks/products.json';
import { Products } from '../components/products/Products';
import Navbar from 'components/navbar/Navbar';
import Carousel from 'components/carousel/Carousel';
import { images } from '../mocks/images';

function App() {
  return (
    <main className='bg-stone-600 '>
      <header>
        <Navbar />
      </header>
      <Carousel images={images} />
      <Products products={productlist} />
    </main>
  );
}

export default App;
