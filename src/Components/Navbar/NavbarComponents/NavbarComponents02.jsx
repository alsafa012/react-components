import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
const navData = [
  {
    id: 1,
    name: "Home",
    navigate: "/",
  },
  {
    id: 2,
    name: "Recipes",
    navigate: "/navbar",
  },
  {
    id: 3,
    name: "Calories-Checker",
    navigate: "/navbar",
  },
];
const NavbarComponents02 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="max-w-screen-2xl mx-auto bg-gray-300 sticky top-0 border-b border-[rgb(210,216,211)] z-50">
      <div className="md:h-[93px] grid grid-cols-2 md:grid-cols-4 place-content-e px-3 py-5">
        {/* logo div */}
        <div className="col-span-1 place-content-center">
          <p className="">Navbar</p>
        </div>
        {/* lists */}
        <div className="hidden md:block place-content-center text-center mx-auto w-ful col-span-2">
          <ul className="flex gap-5 items-center">
            {navData.map((info) => (
              <NavLink
                key={info.id}
                to={info.navigate}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-red-400 hover:border-b-2 hover:border-green-400 cursor-pointer pb-2"
                    : "cursor-pointer pb-2 hover:border-b-2 hover:border-green-400"
                }
                // onClick={() => handleSetActive(info?.name)}
              >
                {info?.name}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* cart && fav */}
        <div className="flex items-center gap-2 justify-end col-span-1 place-content-center">
          {/* cart icon */}
          <Link to={"/navbar"}>
            <button className="inline-flex gap-1 items-center w-[40px] hover:min-w-max red-bg h-[40px] rounded-lg relative transition-all duration-300 hover:pl-2 hover:pr-4 group">
              <BsCart3 className="w-[20px] h-[20px] mx-auto" />
              <span className="nav-text hidden group-hover:block transition-all duration-300 whitespace-nowrap">
                View Cart
              </span>
            </button>
          </Link>
          {/* fav icon */}
          <Link to={"/navbar"}>
            <button className="inline-flex gap-1 items-center w-[40px] hover:min-w-max red-bg h-[40px] rounded-lg relative transition-all duration-300 hover:pl-2 hover:pr-4 group">
              <FaRegBookmark className="w-[20px] h-[20px] mx-auto" />
              <span className="nav-text hidden group-hover:block duration-300 whitespace-nowrap">
                Saved Recipes
              </span>
            </button>
          </Link>
          {/* 3dot icon for mobile device */}
          <button className="md:hidden block">
            {/* <IoReorderThreeOutline /> */}
            <label
              htmlFor="check"
              className="flex flex-col gap-[5px] rounded-lg cursor-pointer"
            >
              <input
                onClick={() => setToggle(!toggle)}
                type="checkbox"
                id="check"
                className="peer/check hidden"
              />
              <span className="w-8 h-1 rounded-lg inline-block bg-gray-600 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span>
              <span className="w-8 h-1 rounded-lg inline-block bg-gray-600 peer-checked/check:scale-0 duration-300"></span>
              <span className="w-8 h-1 rounded-lg inline-block bg-gray-600 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span>
            </label>
          </button>
        </div>
      </div>
      {/* list items for mobile device */}
      <div className={`md:hidden`}>
        <ul
          className={`flex overflow-hidden flex-col gap-5 transition-all duration-300 items-center bg-gray-600 border absolute w-full  ${
            toggle ? "h-[250px] pt-3" : "h-0"
          }`}
        >
          {navData.map((info) => (
            <NavLink
              key={info.id}
              to={info.navigate}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-red-400 nav-text cursor-pointer pb-2"
                  : "cursor-pointer"
              }
            >
              {info?.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponents02;
