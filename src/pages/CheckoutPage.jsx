import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLock,FaArrowRight } from "react-icons/fa";
import { FiCreditCard, FiTruck, FiCheckCircle } from "react-icons/fi";

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")),
    0
  );
  const total = subtotal * 1.08; // Including tax

  const steps = [
    { id: 1, name: "Shipping", description: "Enter your shipping details" },
    { id: 2, name: "Payment", description: "Select payment method" },
    { id: 3, name: "Review", description: "Verify your order" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-purple-700 mb-6"
      >
        <FaArrowLeft /> Back to Cart
      </button>

      {/* Progress Steps */}
      <div className="mb-8">
        <nav aria-label="Progress">
          <ol className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={`${
                  stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""
                } relative`}
              >
                {step.id < activeStep ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-purple-600" />
                    </div>
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                      <FiCheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-purple-600">
                      {step.name}
                    </p>
                  </>
                ) : step.id === activeStep ? (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-purple-600">
                      {step.name}
                    </p>
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      {step.name}
                    </p>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          {activeStep === 1 && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State/Province
                    </label>
                    <select className="w-full border rounded px-3 py-2">
                      <option>Select</option>
                      {/* Add states/provinces */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="saveAddress" className="mr-2" />
                  <label htmlFor="saveAddress" className="text-sm">
                    Save this information for next time
                  </label>
                </div>
              </form>
            </div>
          )}

          {activeStep === 2 && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "credit"
                      ? "border-purple-600 bg-purple-50"
                      : ""
                  }`}
                  onClick={() => setPaymentMethod("credit")}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "credit"
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {paymentMethod === "credit" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <FiCreditCard className="text-xl" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                  {paymentMethod === "credit" && (
                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Expiration
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full border rounded px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full border rounded px-3 py-2"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "paypal"
                      ? "border-purple-600 bg-purple-50"
                      : ""
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "paypal"
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {paymentMethod === "paypal" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4">Review Your Order</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Shipping Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>John Doe</p>
                    <p>123 Main St, Apt 4B</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-2">
                    <FiCreditCard />
                    <span>Visa ending in 4242</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Order Items</h3>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 border rounded-lg"
                      >
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {activeStep > 1 ? (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={() =>
                activeStep < 3
                  ? setActiveStep(activeStep + 1)
                  : navigate("/confirmation")
              }
              className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 flex items-center gap-2"
            >
              {activeStep < 3 ? "Continue" : "Place Order"}
              {activeStep < 3 && <FaArrowRight />}
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(subtotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <FaLock />
              <span>Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
