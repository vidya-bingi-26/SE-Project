import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedSaved = JSON.parse(localStorage.getItem("savedForLater")) || [];
    setCart(storedCart);
    setSavedForLater(storedSaved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
  }, [cart, savedForLater]);

  const addToCart = (product) => {
    const toastId = `add-to-cart-${product.id}`;

    setCart((prev) => {
      const isProductInCart = prev.some((item) => item.id === product.id);
      if (!isProductInCart) {
        toast.success(`${product.name} added to cart!`, { id: toastId });
        return [...prev, product];
      } else {
        toast.error(`${product.name} is already in your cart!`, {
          id: toastId,
        });
        return prev;
      }
    });
  };

  const removeFromCart = (product) => {
    const toastId = `remove-from-cart-${product.id}`;

    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== product.id);
      if (newCart.length < prev.length) {
         toast.error(`${product.name} removed from cart!`,{id:toastId});
      }
      return newCart;
    });
  };

  const saveForLater = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
    setSavedForLater((prev) => [...prev, product]);
    toast.success(`${product.name} saved for later!`);
  };

  const moveToCart = (product) => {
    setSavedForLater((prev) => prev.filter((item) => item.id !== product.id));
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} moved to cart!`);
  };

  const removeFromSaved = (product) => {
    const toastId=`remove-from-saved-${product.id}`;
    setSavedForLater((prev) => {
      const newSaved = prev.filter((item) => item.id !== product.id);
      if (newSaved.length < prev.length) {
        toast.error(`${product.name} removed from saved items!`,{id:toastId});
      }
      return newSaved;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        savedForLater,
        addToCart,
        removeFromCart,
        saveForLater,
        moveToCart,
        removeFromSaved,
        setSavedForLater,
      }}
    >
      {children}
      
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
