import React, { createContext, useContext, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";


// Create Cart Context
const CartContext = createContext();

// Provide Cart State to the Whole App
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);
  const [toaster, setToaster] = useState({ show: false, message: "" });

  // Load Cart & Saved Items from Local Storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedSaved = JSON.parse(localStorage.getItem("savedForLater")) || [];
    setCart(storedCart);
    setSavedForLater(storedSaved);
  }, []);

  // Save Cart to Local Storage on Update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
  }, [cart, savedForLater]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToaster(`${product.name} added to cart!`);
  };

  const showToaster = (message) => {
    setToaster({ show: true, message });
  };

  const hideToaster = () => {
    setToaster({ show: false, message: "" });
  };


  // Remove from Cart and Save for Later
  const saveForLater = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
    setSavedForLater((prev) => [...prev, product]);
  };

  // Move Back to Cart
  const moveToCart = (product) => {
    setSavedForLater((prev) => prev.filter((item) => item.id !== product.id));
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        savedForLater,
        addToCart,
        saveForLater,
        moveToCart,
        toaster,
        showToaster,
        hideToaster,
      }}
    >
      {children}
      <Toaster
        message={toaster.message}
        show={toaster.show}
        onClose={hideToaster}
      />
    </CartContext.Provider>
  );
};

// Hook to Use Cart Context
export const useCart = () => useContext(CartContext);
