import { useState } from "react";
import img1 from "../../../assets/photos/img1.jpg";
import img2 from "../../../assets/photos/img2.jpg";
import img3 from "../../../assets/photos/img3.jpg";
import img4 from "../../../assets/photos/img4.jpg";
import img5 from "../../../assets/photos/img5.jpg";
import img6 from "../../../assets/photos/img6.jpeg";
import img7 from "../../../assets/photos/img7.jpg";
const Carousel3 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );

  return (
    <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center bg-gray-600 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            {/* ... */}
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center bg-gray-600 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            {/* ... */}
          </svg>
        </button>
      </div>
      {/* slider container */}
      <div
        className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: `translateX(-${currentSlider * 50}%)` }}
      >
        {/* sliders */}
        {sliderImages.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]"
                : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"
            } min-w-[50%] relative duration-200`}
            style={{ perspective: "200px" }}
          >
            <img
              src={slide.img}
              className="w-full h-full bg-gray-900 rounded-lg duration-300"
              alt={slide.tags}
              style={{
                transform: `${
                  currentSlider - 1 === inx
                    ? "rotateY(4deg)"
                    : currentSlider + 1 === inx
                    ? "rotateY(-4deg)"
                    : ""
                }`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel3;
