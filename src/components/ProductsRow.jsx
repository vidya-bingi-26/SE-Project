import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import star from "../assets/star.jpeg"
import { FaRegHeart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    image: ["src/assets/products/iwatch.jpg"],
    price: "$599",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Mac Book",
    image: [
      "src/assets/products/macbook1.jpg",
      "src/assets/products/macbook2.jpg",
    ],
    price: "$1000",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Apple Watch Series 7",
    image: ["src/assets/products/iwatch.jpg"],
    price: "$599",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Mac Book",
    image: [
      "src/assets/products/macbook1.jpg",
      "src/assets/products/macbook2.jpg",
    ],
    price: "$1000",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Apple Watch Series 7",
    image: ["src/assets/products/iwatch.jpg"],
    price: "$599",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Mac Book",
    image: [
      "src/assets/products/macbook1.jpg",
      "src/assets/products/macbook2.jpg",
    ],
    price: "$1000",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Apple Watch Series 7",
    image: ["src/assets/products/iwatch.jpg"],
    price: "$599",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Mac Book",
    image: [
      "src/assets/products/macbook1.jpg",
      "src/assets/products/macbook2.jpg",
    ],
    price: "$1000",
    rating: 4.5,
  },
];

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const { addToCart, saveForLater } = useCart();

  const toggleSave = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      saveForLater(product);
    }
    // Note: You might want to add remove functionality later
  };

  return (
    <div className="w-full min-w-fit bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[450px] flex flex-col justify-between relative">
      {/* Heart Icon */}
      <button
        onClick={toggleSave}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
        aria-label={isSaved ? "Remove from saved items" : "Save for later"}
      >
        {isSaved ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-gray-600 text-xl" />
        )}
      </button>

      <a
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer"
      >
        <img
          className="w-[300px] h-[250px] object-cover p-8 rounded-t-lg"
          src={product.image[currentImage]}
          alt="product image"
        />
      </a>
      <div className="flex justify-center items-center gap-2 p-2">
        {product.image.map((img, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              currentImage === index ? "border-gray-900" : "border-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
      <div className="px-5 pb-5">
        <a
          onClick={() => navigate(`/product/${product.id}`)}
          className="cursor-pointer"
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating}
          </span>
          <img src={star} className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

function ProductsRow() {
  return (
    <div className="flex flex-col mt-6 p-2 overflow-x-auto scrollbar-hide">
      <p className="text-xl font-semibold">Recently Viewed</p>
      <div className="flex scrollbar-hide space-x-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// function ProductsRow() {
//   return (
//     <div className="flex flex-col mt-6  p-2 overflow-x-auto scrollbar-hide">
//       <p className="text-xl font-semibold">Recently Viewed</p>
//       <div className="flex  scrollbar-hide space-x-4 p-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

export default ProductsRow;
