// import { createContext, useContext, useReducer, useState } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existing = state.find((item) => item._id === action.payload._id);
//       if (existing) {
//         return state.map((item) =>
//           item._id === action.payload._id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         );
//       }
//       return [...state, { ...action.payload, qty: 1 }];

//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item._id !== action.payload);

//     case "INCREMENT_QTY":
//       return state.map((item) =>
//         item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
//       );

//     case "DECREMENT_QTY":
//       return state.map((item) =>
//         item._id === action.payload && item.qty > 1
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       );

//     case "CLEAR_CART":
//       return [];

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   // ✅ Added createdOrder state
//   const [createdOrder, setCreatedOrder] = useState(null);

//   const addToCart = (product) =>
//     dispatch({ type: "ADD_TO_CART", payload: product });

//   const removeFromCart = (id) =>
//     dispatch({ type: "REMOVE_FROM_CART", payload: id });

//   const incrementQty = (id) =>
//     dispatch({ type: "INCREMENT_QTY", payload: id });

//   const decrementQty = (id) =>
//     dispatch({ type: "DECREMENT_QTY", payload: id });

//   const clearCart = () => dispatch({ type: "CLEAR_CART" });

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         incrementQty,
//         decrementQty,
//         clearCart,
//         createdOrder,       // ✅ Expose created order
//         setCreatedOrder,    // ✅ Allow setting it from anywhere
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.find((item) => item._id === action.payload._id);
      if (existing) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload);

    case "INCREMENT_QTY":
      return state.map((item) =>
        item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );

    case "DECREMENT_QTY":
      return state.map((item) =>
        item._id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [createdOrder, setCreatedOrder] = useState(null); // ✅ New state

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const incrementQty = (id) => dispatch({ type: "INCREMENT_QTY", payload: id });
  const decrementQty = (id) => dispatch({ type: "DECREMENT_QTY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        clearCart,
        createdOrder,
        setCreatedOrder, // ✅ Expose setter
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
