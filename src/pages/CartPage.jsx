import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EmptyCart from "../assets/cart.jpg";
const CartPage = () => {
  const {
    cart,
    savedForLater,
    saveForLater,
    moveToCart,
    removeFromCart,
    removeFromSaved,
  } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")),
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const applyCoupon = () => {
    // Add coupon logic here
  };

  return (
    <>
    <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-6">
              <FiShoppingBag className="text-2xl text-purple-700" />
              <h1 className="text-3xl font-bold">Your Cart ({cart.length})</h1>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12 flex flex-col items-center">
                <img src={EmptyCart} className="mx-auto my-0 w-auto h-40"/>
                <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
                <button
                  onClick={() => navigate("/products")}
                  className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors max-w-80"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">
                          {product.name}
                        </h2>
                        <p className="text-lg font-bold">{product.price}</p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Color: Black | Size: M
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <select className="border rounded px-2 py-1 text-sm">
                          {[1, 2, 3, 4, 5].map((qty) => (
                            <option key={qty} value={qty}>
                              Qty: {qty}
                            </option>
                          ))}
                        </select>
                        <div className="flex gap-4">
                          <button
                            onClick={() => saveForLater(product)}
                            className="text-purple-700 hover:underline text-sm"
                          >
                            Save for later
                          </button>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Saved for Later */}
            {savedForLater.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">
                  Saved for Later ({savedForLater.length})
                </h2>
                <div className="space-y-4">
                  {savedForLater.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.price}</p>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => moveToCart(product)}
                          className="text-purple-700 hover:underline text-sm"
                        >
                          Move to cart
                        </button>
                        <button
                          onClick={() => removeFromSaved(product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cart.length > 0 && (
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 border rounded px-3 py-2 text-sm"
                      placeholder="Enter coupon code"
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <Link to="/checkout">
                  <button className="w-full bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-purple-800 transition-colors">
                    Proceed to Checkout <FaArrowRight />
                  </button>
                </Link>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
