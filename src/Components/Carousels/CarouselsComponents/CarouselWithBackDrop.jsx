import { useEffect, useState } from "react";
import img1 from "../../../assets/photos/img1.jpg";
import img2 from "../../../assets/photos/img2.jpg";
import img3 from "../../../assets/photos/img3.jpg";
import img4 from "../../../assets/photos/img4.jpg";
import img5 from "../../../assets/photos/img5.jpg";
import img6 from "../../../assets/photos/img6.jpeg";
import img7 from "../../../assets/photos/img7.jpg";
const CarouselWithBackDrop = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliderImages = [
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img1,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img2,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img3,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img4,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img5,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img6,
    },
    {
      title: "100% export collections",
      description:
        "Welcome to 100 Export Collections, your one-stop destination for seamless international trade solutions! At our shop, we specialize in providing expert assistance for all your export needs. Whether you're a seasoned exporter or just starting out, we've got you covered with our comprehensive range of services.",
      img: img7,
    },
  ];

  //   const prevSlider = () =>
  //     setCurrentSlider((currentSlider) =>
  //       currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
  //     );

  useEffect(() => {
    const nextSlider = () =>
      setCurrentSlider((currentSliders) =>
        currentSliders === sliderImages.length - 1 ? 0 : currentSliders + 1
      );
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [sliderImages.length]);

  return (
    // <div className="max-w-7xl mx-auto h-[340px] md:h-[60vh] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10 border border-green-500">
    <div className="h-[60vh] flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full duration-300 bg-white ${
                currentSlider === inx ? "w-10 bg-green-500" : "w-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* slider Image container */}
        <div
          className="ease-linear duration-300 flex transform-gpu relative rounded-xl"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
          }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <div key={inx} className="min-w-full duration-200 relative">
              {/* image */}
              <img
                src={slide.img}
                // className="w-full h-72 sm:h-96 md:h-[60vh] object-cover"
                className="w-full h-[60vh] object-cover rounded-xl"
                alt={`Slider - ${inx + 1}`}
              />
              {/* text div */}
              {/* <div className="absolute top-20 w-full text-center"> */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                className="w-full text-center"
              >
                <div className="w-[90%] md:w-[70%] mx-auto py-3 md:py-5">
                  <div className="absolute inset-0 bg-[#BCE4F0] opacity-70"></div>
                  {/* Pseudo-element for background with opacity */}
                  <h1 className="text-3xl lg:text-5xl black font-extrabold relative z-10">
                    {slide?.title}
                  </h1>
                  {/* Ensure text stays above the pseudo-element */}
                  <p className="text-sm black font-medium relative z-10 mt-2 md:mt-3">
                    {slide?.description}
                  </p>
                  {/* Ensure text stays above the pseudo-element */}
                  {/* <button className="cart-btn relative z-10">
                    Add to cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselWithBackDrop;
