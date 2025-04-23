import React from "react";

const SizeSelector = ({ selectedSize, onSizeSelect }) => {
  const sizes = ["S", "M", "L"];

  return (
    <div className="mt-[24px]">
      <h3 className="text-[16px] font-[500]">Select Size</h3>
      <div className="flex gap-[12px] mt-[8px]">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`w-[36px] h-[36px] flex items-center justify-center rounded-[8px] border-[1px] ${
              selectedSize === size
                ? "border-[#4318D1] bg-[#4318D1] text-white"
                : "border-[#E2E8F0] text-[#64748B]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
