import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/HomePageComponents/BannerSection/Navbar";
import Footer from "../Components/Footer/Footer";
const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    setLoading(false);
    // }, 1000);
  }, []);
  return (
    <div className="bg-[#FFFFFF]">
      {loading ? (
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center items-center min-h-[90vh] w-full">
          Welcome to Botsrabari
        </h1>
      ) : (
        <div className="px-1">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;