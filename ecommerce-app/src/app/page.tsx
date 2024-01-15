import productlist from '../mocks/products.json';
import { Products } from '../components/products/Products.tsx';
import Navbar from 'components/navbar/Navbar'

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <Products products={productlist} />
    </>
  );
}

export default App;
