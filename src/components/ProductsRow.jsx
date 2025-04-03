import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import star from "../assets/star.jpeg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    image: ["src/assets/products/iwatch.jpg"],
    price: 599,
    rating: 5.0,
    category: "Electronic Devices",
  },
  {
    id: 2,
    name: "MacBook",
    image: [
      "src/assets/products/macbook1.jpg",
      "src/assets/products/macbook2.jpg",
    ],
    price: 1000,
    rating: 4.5,
    category: "Electronic Devices",
  },
  {
    id: 3,
    name: "Men's Leather Jacket",
    image: ["src/assets/landingpage/leather_jacket_men.jpg"],
    price: 150,
    rating: 3.7,
    category: "Men",
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    image: ["src/assets/products/men_shoes.jpg"],
    price: 120,
    rating: 4.6,
    category: "Men",
  },
  {
    id: 5,
    name: "Women's Handbag",
    image: ["src/assets/products/women_handbag.jpg"],
    price: 85,
    rating: 4.8,
    category: "Women",
  },
  {
    id: 6,
    name: "Women's Dress",
    image: ["src/assets/products/women_dress.jpg"],
    price: 95,
    rating: 4.9,
    category: "Women",
  },
];

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { savedForLater, setSavedForLater, addToCart } = useCart();
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsSaved(savedForLater.some((item) => item.id === product.id));
  }, [savedForLater, product.id]);

  const toggleSave = () => {
    if (isSaved) {
      setSavedForLater((prev) => prev.filter((item) => item.id !== product.id));
      toast.error(`${product.name} removed from saved items!`);
    } else {
      setSavedForLater((prev) => [...prev, product]);
      toast.success(`${product.name} saved for later!`);
    }
  };

  return (
    <div className="w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[450px] flex flex-col justify-between relative">
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

      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer"
      >
        <img
          className="w-full h-[250px] object-cover p-8 rounded-t-lg"
          src={product.image[currentImage]}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="flex justify-center items-center gap-2 p-2">
        {product.image.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              currentImage === index ? "border-gray-900" : "border-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      <div className="px-5 pb-5">
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="cursor-pointer"
        >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {product.name}
          </h5>
        </div>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
            {product.rating}
          </span>
          <img src={star} alt="star rating" className="h-5 w-5 ml-1" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

function ProductsRow({ filters }) {
  // Filter products based on the current filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    // Price filter (convert product price to number if needed)
    const productPrice =
      typeof product.price === "string"
        ? Number(product.price.replace("$", ""))
        : product.price;
    if (productPrice > filters.price) {
      return false;
    }

    // Rating filter
    if (filters.rating > 0 && product.rating < filters.rating) {
      return false;
    }

    return true;
  });

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        {filteredProducts.length} Products
      </h2>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="w-full text-center py-10">
              <p className="text-gray-500">No products match your filters</p>
            </div>
          )}
          <div className="flex-shrink-0 w-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsRow;
