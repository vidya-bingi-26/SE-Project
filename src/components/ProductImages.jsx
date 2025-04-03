import React from "react";

const ProductImages = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <section className="w-1/2 max-sm:w-full">
      <div className="relative aspect-square w-full rounded-[12px] overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Product view"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-[16px] flex gap-[12px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square w-[80px] rounded-[8px] overflow-hidden border-2 ${
              selectedImage === index
                ? "border-[#4318D1]"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductImages;
