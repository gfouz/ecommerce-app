import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCartStore } from "../store/store";

export function Laptops({ products }) {
  const dispatch = useCartStore((state) => state.dispatch);
  const cart = useCartStore((state) => state.cart);
  const productz = useCartStore((state) => state.product);
  console.log(cart);
  return (
    <main className="products">
      <ul className="products__list">
        {products.slice(0, 10).map((product) => {
          const checkProductInCart = (product) => {
            return cart.some((item) => item.id === product.id);
          };

          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() => {
                    dispatch({ type: "addToCart", payload: product });
                  }}
                >
                  {<AddToCartIcon />}
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "removeFromCart",
                      payload: product,
                    });
                  }}
                >
                  {<RemoveFromCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
