// import React, { createContext, useState, useEffect } from "react";
// import { useAuth } from "../store/auth";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const { user } = useAuth();

//   const [cartItems, setCartItems] = useState([]);

//   const API_URL = "http://loalhost:5000/api/cart/";

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on component mount
//   }, []);
//   const userId = user._id;
//   const fetchCartItems = async () => {
//     try {
//       const response = await fetch(`${API_URL}${userId}`, {
//         method: "GET",
//       });
//       if (response.ok) {
//         const cartData = await response.json();
//         setCartItems(cartData.items);
//       } else {
//         console.error("Failed to fetch cart items");
//       }
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   const addToCart = async (productId, quantity) => {
//     try {
//       const response = await fetch(`${API_URL}${userId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });
//       if (response.ok) {
//         fetchCartItems(); // Refresh cart items after adding
//       } else {
//         console.error("Failed to add item to cart");
//       }
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       const response = await fetch(`${API_URL}${userId}/${productId}`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         fetchCartItems(); // Refresh cart items after removing
//       } else {
//         console.error("Failed to remove item from cart");
//       }
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   const updateItemQuantity = async (productId, quantity) => {
//     try {
//       const response = await fetch(`${API_URL}${userId}/${productId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ quantity }),
//       });
//       if (response.ok) {
//         fetchCartItems(); // Refresh cart items after updating quantity
//       } else {
//         console.error("Failed to update item quantity");
//       }
//     } catch (error) {
//       console.error("Error updating item quantity:", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateItemQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
