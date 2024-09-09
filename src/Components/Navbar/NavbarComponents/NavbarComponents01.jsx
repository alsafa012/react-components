import { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavbarComponents01 = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  const user = true;
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "Register", link: "/registration" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  // const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md">
      <div className="relative w-full container mx-auto bg-white border px-3">
        <div className="flex items-center justify-between gap-5 bg-white h-16">
          {/* 1st */}
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500 whitespace-nowrap">
              Tailwind Navbar
            </h1>
          </div>
          {/* mid */}
          <div
            className={`bg-[#a31e1e30] lg:bg-white absolute lg:static flex flex-col lg:flex-row lg:justify-between items-center gap-2 md:gap-5 text-sm md:text-lg font-semibold md:font-bold lg:z-auto z-[-1] left-0 w-full transition-all duration-1000 ease-in ${
              toggle ? "top-16" : "top-[-490px]"
            }`}
          >
            {/* <div className="flex justify-between items-center"> */}
            <ul className="flex justify-center flex-col lg:flex-row gap-5 items-center">
              {Links.map((link) => (
                <li key={link.name} className="text-xl">
                  <Link
                    to={link.link}
                    className="text-gray-800 focus:bg-green-400 duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* end */}
            <div className="flex justify-center items-center gap-1">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  {user ? (
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  ) : (
                    <Link to="">
                      <button className="text-white">Sign Up</button>
                    </Link>
                  )}
                </label>
                {user && (
                  <div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <div>
                        <li>
                          <h2 className="font-medium">
                            User:
                            {user?.displayName}
                          </h2>
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {user ? (
                  <button className="font-medium">Sign Out</button>
                ) : (
                  <Link to="">
                    <button className="">Sign Up</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* toggle icon */}
          <div
            onClick={() => setToggle(!toggle)}
            className="text-3xl cursor-pointer lg:hidden"
          >
            <button className="border p-3 bg-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
              >
                {" "}
                <line x1="4" x2="20" y1="12" y2="12" />{" "}
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />{" "}
              </svg>
            </button>
            {/* <button>{toggle ? <IoClose /> : <FaListUl />}</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarComponents01;
