import products from "./mocks/products.json";
import { Laptops } from "./components/Laptops.tsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
//import { IS_DEVELOPMENT } from './config.js'
//import { useFilters } from './hooks/useFilters.js'
//import { Cart } from './components/Cart.jsx'

function App() {
  return (
    <>
      <Laptops products={products} />
    </>
  );
}

export default App;
