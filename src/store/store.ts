'use client';

import { create } from 'zustand';

export const initialState =
  typeof window !== 'undefined'
    ? JSON.parse(window.localStorage.getItem('cart') || '')
    : {};

// update localStorage with state for cart
export const updateLocalStorage = (state: CartStore) => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem('cart', JSON.stringify(state));
};


interface Product {
  id: number;
  quantity?: number;
  title: string;
  price: number;
}
interface CartStore {
  cart: Product[];
  dispatch: (action: Action) => void;
}
type Action = {
  type: string;
  payload: Product;
};
type ActionMethod = (state: CartStore, action: Action) => CartStore;

interface Actions {
  addToCart: ActionMethod;
  removeFromCart: ActionMethod;
  emptyCart: (state: CartStore, action: Action) => CartStore;
  subtractFromCart: (state: CartStore, action: Action) => CartStore;
}
const actions: Actions = {
  addToCart: (state: CartStore, action: Action) => {
    const { id } = action.payload;
    const index = state.cart.findIndex((item) => item.id === id);

    if (index >= 0) {
      const quantity = state.cart[index].quantity;
      const cart = [
        ...state.cart.slice(0, index),
        { ...state.cart[index], quantity: quantity ? quantity + 1 : 0 },
        ...state.cart.slice(index + 1),
      ];
      const newState = {
        ...state,
        cart,
      };

      updateLocalStorage(newState);
      return newState;
    }
    //action.payload refers to the "product".
    //condition in case there is no item into cart.
    const cart = [...state.cart, { ...action.payload, quantity: 1 }];
    const newState = { ...state, cart };

    updateLocalStorage(newState);
    return newState;
  },
  subtractFromCart: (state: CartStore, action: Action) => {
    const { id } = action.payload;
    const index = state.cart.findIndex((item) => item.id === id);
    const quantity = state.cart[index].quantity;
    if (index >= 0 && quantity ? quantity >= 2 : 0) {
      const quantity = state.cart[index].quantity;
      const cart = [
        ...state.cart.slice(0, index),
        { ...state.cart[index], quantity: quantity ? quantity - 1 : 0 },
        ...state.cart.slice(index + 1),
      ];
      const newState = {
        ...state,
        cart,
      };

      updateLocalStorage(newState);
      return newState;
    }
    //action.payload refers to the "product".
    //condition in case there is no item into cart.
    const cart = [...state.cart, { ...action.payload, quantity: 1 }];
    const newState = { ...state, cart };

    updateLocalStorage(newState);
    return newState;
  },

  removeFromCart: (state: CartStore, action: Action) => {
    const { id } = action.payload;
    const newState = {
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    };
    updateLocalStorage(newState);
    return newState;
  },
  emptyCart: (state: CartStore, action: Action) => {
    const newState = {
      ...state,
      cart: [],
    };
    updateLocalStorage(newState);
    return newState;
  },
};

const reducer = (state: CartStore, action: Action) => {
  const { type } = action;
  // @ts-ignore
  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : state;
};

//Redux-like patterns store
export const useCartStore = create<CartStore>((set) => ({
  cart: initialState.cart || [],
  dispatch: (action: Action) => set((state) => reducer(state, action)),
}));

/*example of how to consume the store

import {useCartStore} from 'store'
const cart = useCartStore( state => state.cart )
const product = useCartStore( state => state.product )
const dispatch = useCartStore((state) => state.dispatch)
dispatch({type:'addItemToCart', payload: product}) 
*/
