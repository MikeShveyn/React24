import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CardContext = createContext({ // like interface
    items: [],
    addItemToCart: () => {},
    changeItemCount: () => {}
});

//lates state from reduecr , action 
function shoppingCardReducer(state, action) {
  if(action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // if we have more then ove key value
      items: updatedItems,
    };
  }

  else if(action.type === 'ADD_QUANTITY') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.id
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
}

export function CartContextProvider({children}) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCardReducer, {items: []})

  
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
          type: 'ADD_ITEM',
          payload: id
        })
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
          type: 'ADD_QUANTITY',
          payload: {id: productId, amount: amount},
     
        })
      }
    
      const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        changeItemCount: handleUpdateCartItemQuantity
      }

      return <CardContext.Provider value={ctxValue}>
        {children}
      </CardContext.Provider>
}

