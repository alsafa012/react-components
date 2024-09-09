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
      <Link to="/form">
        <button className="btn">Form</button>
      </Link>
      <Link to="/navbar">
        <button className="btn">Navbar</button>
      </Link>
      <Link to="/tsParticles">
       <button className="btn">Ts-PArticles</button>
      </Link>
      <Link to="/lottie">
       <button className="btn">React Lottie</button>
      </Link>
      <Link to="/test">
       <button className="btn">Test</button>
      </Link>
      {/* <div className="my-10">
                    <Example></Example>
               </div> */}
    </div>
  );
};

export default HomePage;
