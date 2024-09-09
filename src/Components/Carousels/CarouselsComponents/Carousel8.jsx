import { useEffect, useState } from "react";
import img1 from "../../../assets/photos/img1.jpg";
import img2 from "../../../assets/photos/img2.jpg";
import img3 from "../../../assets/photos/img3.jpg";
import img4 from "../../../assets/photos/img4.jpg";
import img5 from "../../../assets/photos/img5.jpg";
import img6 from "../../../assets/photos/img6.jpeg";
import img7 from "../../../assets/photos/img7.jpg";
export const Carousel8 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [img1, img2, img3, img4, img5, img6, img7];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div>
      <div className="w-full mx-auto h-[240px] my-10 md:h-[440px] lg:h-[400px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
        <div className="relative overflow-hidden">
          {/* dots */}
          <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
            {sliders.map((_, inx) => (
              <button
                key={inx}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-300 bg-white ${
                  currentSlider === inx ? "w-10" : "w-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative"
            style={{ transform: `translateY(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {sliders.map((_, inx) => (
              <div
                key={inx}
                className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
              >
                <img
                  src={_}
                  className="w-full h-[340px] md:h-[670px] object-cover"
                  alt={`Slider - ${inx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
