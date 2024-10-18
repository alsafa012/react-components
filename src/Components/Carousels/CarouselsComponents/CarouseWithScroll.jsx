import { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/photos/img1.jpg";
import img2 from "../../../assets/photos/img2.jpg";
import img3 from "../../../assets/photos/img3.jpg";
import img4 from "../../../assets/photos/img4.jpg";
import img5 from "../../../assets/photos/img5.jpg";
import img6 from "../../../assets/photos/img6.jpeg";
import img7 from "../../../assets/photos/img7.jpg";
const CarouseWithScroll = () => {
  const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("currentIndex", currentIndex);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);


  console.log("touchStartX", touchStartX);
  console.log("touchEndX", touchEndX);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // 4 slides
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleTouchStart = (e) => {
    console.log("handleTouchStart", e);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    console.log("handleTouchMove");
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    console.log("handleTouchEnd");
    // "50" --> eita scroll er touch sensitivity mane koto tuku screen a scroll korle image change hobe oi value.
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    }
  };

  const handleMouseDown = (e) => {
    console.log("handleMouseDown", e);
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    console.log("handleMouseMove", e);
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp");
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    }
  };
  return (
    <div>
      <h1>CarouseWithScroll</h1>
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Slider Content */}
        <div className="relative overflow-hidden w-full h-40 md:h-60 lg:h-[80vh]">
          {sliderImages?.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out ${currentIndex === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                // transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {/* You can include additional content for each slide here */}
              <p className="text-white">{`Slide ${index + 1}`}</p>
            </div>
          ))}
        </div>
        {/* Dot Indicators */}
        {/* <Box className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </Box> */}
      </div>
    </div>
  );
};

export default CarouseWithScroll;
