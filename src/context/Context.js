import React, { createContext, useContext, useReducer } from 'react';
import cartReducer, { productReducer } from './Reducers'
import { DUMMY_PRODUCTS } from '../utils/constants';
const Cart = createContext();

function Context({ children }) {

  const products =  DUMMY_PRODUCTS;

  const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart:[]
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

 

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );

}

export default Context;

export const CartState = () => {
  return useContext(Cart);
} 