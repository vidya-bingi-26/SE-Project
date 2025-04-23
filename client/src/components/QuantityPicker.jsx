import React from "react";

const QuantityPicker = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="mt-[24px]">
      <h3 className="text-[16px] font-[500]">Quantity</h3>
      <div className="flex items-center gap-[12px] mt-[8px]">
        <button
          onClick={decrementQuantity}
          className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] border-[1px] border-[#E2E8F0]"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-[16px]">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] border-[1px] border-[#E2E8F0]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityPicker;
