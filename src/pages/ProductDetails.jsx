import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import notfound from "../assets/notfound.png";
import iwatch from "../assets/products/iwatch.jpg";
import macbook1 from "../assets/products/macbook1.jpg";
import macbook2 from "../assets/products/macbook2.jpg";
import ProductDetail from "../components/ProductDetail";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    images: [iwatch],
    price: "$599",
    rating: 5.0,
    description:
      "A high-tech Apple smartwatch with advanced health tracking features.",
    brand: "Apple",
    category: "Wearable",
  },
  {
    id: 2,
    name: "MacBook Pro",
    images: [macbook1, macbook2],
    price: "$1000",
    rating: 4.5,
    description: "Powerful MacBook for professional work with M1 chip.",
    brand: "Apple",
    category: "Laptop",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-screen max-h-screen flex flex-col items-center justify-center">
        <img
          src={notfound}
          className="w-auto h-screen mx-auto"
          alt="Not Found"
        />
        <button
          className="border border-gray-500 mb-3 px-4 py-2 rounded-xl"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <ProductDetail product={product} />
    <Footer />
    </>
  );
}

export default ProductDetails;
