import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  );

  // Función para agregar al carrito
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      // Verificar límite superior de 20 productos
      if (isItemInCart.quantity < 20) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      }
    } else {
      // Verificar límite superior de 20 productos
      if (cartItems.length < 20) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    }
  };

  // Función para eliminar del carrito (disminuir cantidad)
  const removeItem = (itemId) => {
    const isItemInCart = cartItems.find((item) => item.id === itemId);

    if (isItemInCart && isItemInCart.quantity === 1) {
      // Eliminar completamente el item del carrito
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } else {
      // Disminuir la cantidad del item en el carrito
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Función para actualizar la cantidad de un artículo en el carrito
  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };
  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Función para obtener el total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ addToCart, removeItem, updateItemQuantity, clearCart, getCartTotal, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

