import Carousel1 from "../CarouselsComponents/Carousels1";
import { Carousel2 } from "../CarouselsComponents/Carousel2";
import Carousel3 from "../CarouselsComponents/Carousel3";
import Carousel4 from "../CarouselsComponents/Carousel4";
import Carousel5 from "../CarouselsComponents/Carousel5";
import Carousel6 from "../CarouselsComponents/Carousel6";
import Carousel7 from "../CarouselsComponents/Carousel7";
import CarouselWithBackDrop from "../CarouselsComponents/CarouselWithBackDrop";
import { Carousel8 } from "../CarouselsComponents/Carousel8";
import { Carousel9 } from "../CarouselsComponents/Carousel9";
import CarouseWithScroll from "../CarouselsComponents/CarouseWithScroll";
// import Carousel8 from "../CarouselsComponents/Carousel8";

const AllCarousels = () => {
     return (
          <div className="mt-10 container mx-auto space-y-5">
               <CarouselWithBackDrop />
               <Carousel1></Carousel1>
               <Carousel2></Carousel2>
               <Carousel3></Carousel3>
               <Carousel4></Carousel4>
               <Carousel5></Carousel5>
               <Carousel6></Carousel6>
               <Carousel7></Carousel7>
               <Carousel9></Carousel9>
               <Carousel8></Carousel8>
               <CarouseWithScroll />
               {/* <Carousel8></Carousel8> */}
          </div>
     );
};

export default AllCarousels;
