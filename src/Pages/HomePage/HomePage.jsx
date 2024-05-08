import { Link } from "react-router-dom";
// import Example from "../../DnD/Example";

const HomePage = () => {
     return (
          <div className="flex w-[90%] md:w-[80%] mx-auto justify-center gap-5 flex-wrap my-5">
               <Link to="/accordions">
                    <button className="btn">Accordion</button>
               </Link>
               <Link to="/carousels">
                    <button className="btn">Carousel</button>
               </Link>
               <Link to="/Ratings_ProgressBar">
                    <button className="btn">RatingsAndProgressBar</button>
               </Link>
               <Link to="/categories">
                    <button className="btn">Categories</button>
               </Link>
               <Link to="/selectAndOption">
                    <button className="btn">Select && Option</button>
               </Link>
               <Link to="/imgHost">
                    <button className="btn">ImageHost & ShowSlide</button>
               </Link>
               {/* <div className="my-10">
                    <Example></Example>
               </div> */}
          </div>
     );
};

export default HomePage;
