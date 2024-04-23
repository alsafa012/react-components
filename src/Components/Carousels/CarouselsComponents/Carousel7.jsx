import { useEffect, useState } from 'react';

const Carousel7 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [
        'https://source.unsplash.com/500x500/?nature/?1',
        'https://source.unsplash.com/500x500/?nature/?3',
        'https://source.unsplash.com/500x500/?nature/?5',
        'https://source.unsplash.com/500x500/?nature/?2',
        'https://source.unsplash.com/500x500/?nature/?4',
    ];
    
    const isSmallScreen = window.innerWidth <= 768;

    const prevSlider = () => setCurrentSlider((currentSlider) => (
        currentSlider === 0
            ? (isSmallScreen ? sliderImages.length - 1 : sliderImages.length - 2)
            : currentSlider - 1
    ));

    const nextSlider = () => setCurrentSlider((currentSlider) => (
        currentSlider === (isSmallScreen ? sliderImages.length - 1 : sliderImages.length - 2)
            ? 0
            : currentSlider + 1
    ));

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
     <div className="max-w-[500px] min-w-[280px] mx-auto">
     <div className="relative overflow-hidden">
         <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
             {/* arrow left */}
             <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                 <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                     <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                     <g id="SVGRepo_iconCarrier">
                         <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                     </g>
                 </svg>
             </button>
             {/* arrow right */}
             <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                 <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
                     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                     <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                     <g id="SVGRepo_iconCarrier">
                         <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                     </g>
                 </svg>
             </button>
         </div>
         {/* slider container */}
         <div className="flex transform-gpu ease-linear duration-300" style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
             {/* sliders */}
             {sliderImages.map((slide, inx) => (
                 <img key={inx} src={slide} className="min-w-full md:min-w-[50%] h-64 object-cover border-8 border-transparent" alt={`Slider - ${inx + 1}`} />
             ))}
         </div>
     </div>
 </div>
    );
};

export default Carousel7;
