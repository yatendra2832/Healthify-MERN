// api.js
const BASE_URL = "http://localhost:5000/api/cart"; // Adjust to your backend URL


export const getCartItems = async (userId) => {
  const response = await fetch(`${BASE_URL}/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart items');
  }
  return response.json();
};

export const addItemToCart = async (userId, productId, quantity) => {
  const response = await fetch(`${BASE_URL}/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }
  return response.json();
};

export const removeItemFromCart = async (userId, itemId) => {
  const response = await fetch(`${BASE_URL}/${userId}/${itemId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove item from cart');
  }
  return response.json();
};

export const updateItemQuantity = async (userId, itemId, quantity) => {
  const response = await fetch(`${BASE_URL}/${userId}/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to update item quantity');
  }
  return response.json();
};
