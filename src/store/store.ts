'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/*export const initialState =
  typeof window !== 'undefined'
    ? JSON.parse(window.localStorage.getItem('cart') || '')
    : {};*/

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

interface ActionTypes {
  ADD_TO_CART: string;
  REMOVE_FROM_CART: string;
  SUBTRACT_FROM_CART: string;
  EMPTY_CART: string;
}
export const ACTION_TYPES: ActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  SUBTRACT_FROM_CART: 'SUBTRACT_FROM_CART',
  EMPTY_CART: 'EMPTY_CART',
};

interface Actions {
  [x: string]: (
    state: CartStore,
    action: Action,
  ) => {
    cart: Product[];
    dispatch: (action: Action) => void;
  };
}

const actions: Actions = {
  [ACTION_TYPES.ADD_TO_CART]: (state: CartStore, action: Action) => {
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
  [ACTION_TYPES.SUBTRACT_FROM_CART]: (state: CartStore, action: Action) => {
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

  [ACTION_TYPES.REMOVE_FROM_CART]: (state: CartStore, action: Action) => {
    const { id } = action.payload;
    const newState = {
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    };
    updateLocalStorage(newState);
    return newState;
  },
  [ACTION_TYPES.EMPTY_CART]: (state: CartStore, action: Action) => {
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

  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : state;
};

//Redux-like patterns store
const cartState = persist<CartStore>(
  (set) => ({
    cart: [],
    dispatch: (action: Action) => set((state) => reducer(state, action)),
  }),
  {
    name: 'cart', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useCartStore = create(cartState);

/*example of how to consume the store

import {useCartStore} from 'store'
const cart = useCartStore( state => state.cart )
const product = useCartStore( state => state.product )
const dispatch = useCartStore((state) => state.dispatch)
dispatch({type:'addItemToCart', payload: product}) 
*/
