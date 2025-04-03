import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SizeSelector from "./SizeSelector";
import QuantityPicker from "./QuantityPicker";
import StarRating from "./StarRating";

const ProductInfo = ({
  product,
  quantity,
  setQuantity,
  selectedSize,
  setSelectedSize,
}) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show success message
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <section className="w-1/2 max-sm:w-full">
      <div className="bg-[#FFF] rounded-[12px] p-[24px] shadow-md">
        <h1 className="text-[24px] font-[600]">{product.name}</h1>
        <div className="flex items-center gap-[12px] mt-[12px]">
          <StarRating rating={product.rating} />
          <span className="text-[14px] text-[#64748B]">
            {product.rating} (120 reviews)
          </span>
        </div>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-3xl font-semibold mt-4">{product.price}</p>

        <SizeSelector
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
        />
        <QuantityPicker quantity={quantity} setQuantity={setQuantity} />

        <div className="flex gap-[16px] mt-[24px]">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#4318D1] text-[#FFF] py-[12px] rounded-md hover:bg-[#3a15b8] transition-colors"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 border border-[#4318D1] text-[#4318D1] py-[12px] rounded-md hover:bg-[#4318D1] hover:text-white transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
