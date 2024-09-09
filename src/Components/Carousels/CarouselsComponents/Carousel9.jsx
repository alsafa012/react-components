import { useCallback, useEffect, useState } from "react";
import img1 from "../../../assets/photos/img1.jpg";
import img2 from "../../../assets/photos/img2.jpg";
import img3 from "../../../assets/photos/img3.jpg";
import img4 from "../../../assets/photos/img4.jpg";
import img5 from "../../../assets/photos/img5.jpg";
import img6 from "../../../assets/photos/img6.jpeg";
import img7 from "../../../assets/photos/img7.jpg";
export const Carousel9 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  //   const sliderRef = useRef(null);
  //   console.log(sliderRef);
  const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img6, img7];

  //   const handleScroll = (event) => {
  //     if (event.deltaY > 0) {
  //       nextSlider();
  //     } else {
  //       prevSlider();
  //     }
  //   };

  const prevSlider = () => {
    setCurrentSlider(
      (currentSlider) =>
        currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 2
      // if need to slide 1 images by one click use this
      // currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  };

  const nextSlider = useCallback(() => {
    setCurrentSlider(
      (currentSlider) =>
        currentSlider >= sliderImages.length - 2 ? 0 : currentSlider + 2
      // if need to slide 1 images by one click use this
      // currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );
  }, [sliderImages.length]);
  // if you don't want to change the slider automatically then you can just remove the useEffect
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     nextSlider();
    //   }, 3000);
    //   return () => clearInterval(intervalId);
    // }, [nextSlider, currentSlider]);
  return (
    <div className="relative mx-auto w-fit border border-red-800">
      <p className="text-lg font-medium text-center">{currentSlider}</p>
      {/* arrow left */}
      <button
        onClick={prevSlider}
        className="absolute -left-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-4 w-4 md:h-6 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </g>
        </svg>
      </button>
      {/* arrow right */}
      <button
        onClick={nextSlider}
        className="absolute -right-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-4 w-4 md:h-6 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
          </g>
        </svg>
      </button>
      <div className="w-full grid grid-cols-2 overflow-hidden border border-green-600">
        {/* <div className="w-full max-w-72 overflow-hidden border border-green-600"> */}

        {/* slider container */}
        <div
          className="flex transform-gpu duration-500 ease-linear"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <img
              width={500}
              height={500}
              key={inx}
              src={slide}
              className="mx-[2.5%] h-full min-w-[95%] rounded-2xl border-8 border-transparent object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* dot div */}
      <div className="mx-auto w-full text-center">
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages?.map(
            (_, inx) =>
              inx % 2 === 0 && (
                <button
                  key={inx}
                  onClick={() => {
                    setCurrentSlider(inx);
                  }}
                  className={`rounded-full duration-300 bg-white ${
                    currentSlider === inx
                      ? "w-12 bg-[#22a72d]"
                      : "w-4 bg-[#7d169c]"
                  } h-2`}
                ></button>
              )
          )}
        </div>
      </div>
    </div>
  );
};
