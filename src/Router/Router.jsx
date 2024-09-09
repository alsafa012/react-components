import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import MainLayout from '../Layout/MainLayout';
import Accordions from '../Components/Accordions/AllAccordions/Accordions';
import AllCarousels from '../Components/Carousels/AllCarousels/AllCarousels';
import RatingsAndProgressBar from '../Components/RatingsAndProgressBar/RatingsAndProgressBar';
import AllCategories from '../Components/Categories/AllCategories/AllCategories';
import AllImageHostTech from '../Components/ImageHostTech/AllImageHostTech/AllImageHostTech';
import AllSelectAndOption from '../Components/SelectAndOption/AllSelectAndOption/AllSelectAndOption';
import AllForms from '../Components/Form/AllForms/AllForms';
import AllNavbar from '../Components/Navbar/AllNavbar';
import Test from '../Components/Test/Test';
import AllTsParticles from '../Components/TsParticles/AllTsParticles';
import ReactLottie from '../Components/React-lottie/ReactLottie';
const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout></MainLayout>,
       children:[
          {
               path: "/",
               element:<HomePage></HomePage>
          },
          {
               path: "/accordions",
               element:<Accordions></Accordions>
          },
          {
               path: "/carousels",
               element:<AllCarousels></AllCarousels>
          },
          {
               path: "/Ratings_ProgressBar",
               element:<RatingsAndProgressBar></RatingsAndProgressBar>
          },
          {
               path: "/categories",
               element:<AllCategories></AllCategories>
          },
          {
               path: "/selectAndOption",
               element:<AllSelectAndOption />
          },
          {
               path: "/imgHost",
               element:<AllImageHostTech />
          },
          {
               path: "/form",
               element:<AllForms />
          },
          {
               path: "/navbar",
               element:<AllNavbar />
          },
          {
               path: "/tsParticles",
               element:<AllTsParticles />
          },
          {
               path: "/test",
               element:<Test />
          },
          {
               path: "/lottie",
               element:<ReactLottie />
          },
          // {
          //      path: "/ratings",
          //      element:<AllCarousels></AllCarousels>
          // },
       ]
     },
   ]);

export default myCreatedRouter;
// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/MainLayout";
// const myCreatedRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//   },
// ]);
// export default myCreatedRouter;
