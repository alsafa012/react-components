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
          // {
          //      path: "/ratings",
          //      element:<AllCarousels></AllCarousels>
          // },
       ]
     },
   ]);

export default myCreatedRouter;