import React, { createContext, useContext, useReducer } from 'react';
import cartReducer, { productReducer } from './Reducers'
const Cart = createContext();

function Context({ children }) {

  const products = [
      {
        "fastDelivery": false,
        "id": 1,
        "inStock": 7,
        "ratings": 3,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110
      },
      {
        "fastDelivery": false,
        "id": 2,
        "inStock": 2,
        "ratings": 2,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91
      },
      {
        "fastDelivery": false,
        "id": 3,
        "inStock": 0,
        "ratings": 3,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5
      },
      {
        "fastDelivery": false,
        "id": 4,
        "inStock": 4,
        "ratings": 4,
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9
      },
      {
        "fastDelivery": true,
        "id": 5,
        "inStock": 5,
        "ratings": 5,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20
      }
    ]

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