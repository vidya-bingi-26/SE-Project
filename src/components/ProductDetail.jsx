import React, { useState } from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import TabSection from "./TabSection";

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <main className="min-h-screen w-screen bg-[#F8FAFC] font-[Inter] text-[#1E293B]">
      <div className="mx-auto max-w-[1200px] p-[24px]">
        <div className="flex max-sm:flex-col gap-[48px]">
          <ProductImages
            images={product.images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <ProductInfo
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
        <TabSection product={product} />
      </div>
    </main>
  );
};

export default ProductDetail;
