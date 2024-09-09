import { useState } from "react";
const categorySize = [
  { size: "0-3 months" },
  { size: "3-6 month’s" },
  { size: "12 month" },
  { size: "18 month" },
];
const CustomizeRadio = () => {
  const [selectedSize, setSelectedSize] = useState(categorySize[0]?.size);
  console.log(selectedSize);
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className="my-5 w-full flex justify-center">
      {/* Short by size’s */}
      <div className="flex flex-col">
        <h2 className="text-xl black font-extrabold mb-1 border-b-2 max-w-max">
          Customize Radio
        </h2>
        <div className="flex flex-col ml-5 black font-medium space-y-1">
          {categorySize.map((category, index) => (
            <label className="cursor-pointer" key={index}>
              <input
                type="radio"
                id={category.size.replace(/\s+/g, "-").toLowerCase()}
                // name="duration"
                value={category.size}
                // defaultChecked={index === 0}
                onChange={handleSizeChange}
                style={{
                  appearance: "none",
                  backgroundColor:
                    selectedSize === category.size
                      ? "rgb(12, 230, 12)"
                      : "#FFFFFF",
                  width: "14px",
                  height: "14px",
                  border:
                    selectedSize === category.size ? "none" : "1px solid green",
                  borderRadius: "0",
                  // marginRight: "5px",
                }}
                className="checked:bg-green-700"
              />
              <span className="ml-2 text-base">{category.size}</span>
            </label>
          ))}
        </div>
        <p className="text-xl mb-5 text-center">
          Selected size: {selectedSize}
        </p>
      </div>
    </div>
  );
};

export default CustomizeRadio;
