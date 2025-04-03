import React from "react";

const ColorSelector = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="mt-[24px]">
      <h3 className="text-[16px] font-[500]">Select Color</h3>
      <div className="flex gap-[12px] mt-[8px]">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorSelect(color.name)}
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${
              selectedColor === color.name
                ? "ring-2 ring-offset-2 ring-[#4318D1]"
                : ""
            }`}
            style={{ backgroundColor: color.code }}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
