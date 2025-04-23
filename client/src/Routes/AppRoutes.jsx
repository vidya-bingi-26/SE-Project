import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import Checkout from "../components/checkout/Checkout";
import CheckoutPage from "../pages/CheckoutPage";
import Login from "../components/Login";
import AuthPage from "../pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/category/:categoryName" element={<ProductPage/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage/>} />
      <Route path="authentication" element={<AuthPage/>} />
    </Routes>
  );
};

export default AppRoutes;
