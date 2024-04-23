import { useState } from "react";

const Accordions3 = () => {
     const [isOpen, setIsOpen] = useState(null);
     const toggle = ({ currentIdx }) =>
          setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
     const sliders = [
          {
               img: "https://source.unsplash.com/1200x640/?snow-fall",
               title: "Winter",
               des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
          },
          {
               img: "https://source.unsplash.com/1200x640/?Spring",
               title: "Spring",
               des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
          },
          {
               img: "https://source.unsplash.com/1200x640/?sea-beach",
               title: "Summer",
               des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
          },
          {
               img: "https://source.unsplash.com/1200x640/?Autumn",
               title: "Autumn",
               des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
          },
     ];
     return (
          <div className="w-1/2 mx-auto h-[50vh] border">
               <div className="flex gap-4">
                    {/* map  */}
                    {sliders.map((slide, idx) => (
                         <div
                              onClick={() => toggle({ currentIdx: idx })}
                              className={`h-[50vh] bg-gray-500 relative duration-500 ease-in-out ${
                                   isOpen == idx ? "w-[400px] " : "w-[80px]"
                              }`}
                              key={idx}
                         >
                              {/* main image  */}
                              <img
                                   className="h-full object-cover rounded-3xl"
                                   src={slide.img}
                                   alt=""
                              />
                              <img
                                   className={`absolute bottom-5 border-white border-2 ${
                                        isOpen === idx
                                             ? "left-4"
                                             : "left-1/2 -translate-x-1/2 duration-700"
                                   }  h-[50px] w-[50px] object-cover rounded-full`}
                                   src={slide.img}
                                   alt=""
                              />
                              <div
                                   className={`text-white absolute left-[100px] bottom-5`}
                              >
                                   <h3 className="text-3xl font-semibold">
                                        Status
                                   </h3>
                                   <p className="text-xl">{slide.title}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Accordions3;
