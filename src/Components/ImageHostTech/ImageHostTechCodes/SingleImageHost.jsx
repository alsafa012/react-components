import { useState } from "react";

const SingleImageHost = () => {
  const images = [
    "https://i.ibb.co/ZNN584F/summer-sell.png",
    "https://i.ibb.co/3mD0yrW/view-display.png",
    "https://i.ibb.co/gPsFc06/amader-bank.png",
    "https://i.ibb.co/VVSzFFn/digital-watch.png",
    "https://i.ibb.co/wWxdHTN/digital-tasbih.png",
  ];
  const [displayedImage, setDisplayedImage] = useState(images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("displayedImage", displayedImage);
  console.log("selectedImageIndex", selectedImageIndex);

  const handleClickImage = (img, index) => {
    setDisplayedImage(img);
    setSelectedImageIndex(index);
  };
  // console.log(images[0]);
  console.log(displayedImage);
  return (
    <div>
      <h1 className="text-center text-3xl font-medium">Image Sidler</h1>
      <div className="border border-green-500 my-20 max-w-[80%] md:max-w-[60%] mx-auto relative overflow-hidden">
        {/* displayDiv */}
        <div className="border border-gray-950 my-5 w-[250px] h-[200px] mx-auto">
          <img
            onClick={() => setToggle(!toggle)}
            className="object-fill h-full mx-auto"
            src={displayedImage}
            alt=""
          />
        </div>
        {/* image slider container */}
        <div className="overflow-hidden">
          <div className="flex gap-3 mx-auto max-w-[90%] md:max-w-[80%] border border-yellow-200 overflow-auto p-5">
            {images.map((img, index) => (
              // <div>
              <img
                key={index}
                className={`w-[130px] h-[120px] object-fill cursor-pointer ${
                  index === selectedImageIndex
                    ? "border-2 scale-110 transition duration-500"
                    : ""
                }`}
                src={img}
                alt=""
                // onClick={() => setDisplayedImage(img)}
                onClick={() => handleClickImage(img, index)}
              />
              // </div>
            ))}
          </div>
        </div>
        <div
          className={`${
            toggle ? "block" : "hidden"
          } w-full h-full bg-gray-600 absolute top-0`}
        >
          <img
            className="flex justify-center items-center w-full h-full"
            src={displayedImage}
            alt=""
          />
          <button
            onClick={() => setToggle(!toggle)}
            className="absolute top-5 right-5 px-2 text-lg bg-red-400 text-white rounded-full"
          >
            x
          </button>
        </div>

        {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
      </div>
    </div>
  );
};

export default SingleImageHost;
