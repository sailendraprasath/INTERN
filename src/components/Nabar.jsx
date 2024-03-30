import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import NAVIMG from "../assets/Coffee/Coffee.png";
import { FaHome } from "react-icons/fa";
import { MdRoundaboutRight, MdOutlineRestaurantMenu } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [nav, setNav] = useState(false);

  const handlePageChange = (name) => {
    setActivePage();
    <Home />;
  };

  const Links = [
    { name: "HOME", link: "/", icon: <FaHome size={26} /> },
    { name: "ABOUT", link: "/about", icon: <MdRoundaboutRight size={26} /> },
    {
      name: "MENU",
      link: "/menu",
      icon: <MdOutlineRestaurantMenu size={26} />,
    },
    {
      name: "RESERVATION",
      link: "/reservation",
      icon: <RiReservedFill size={26} />,
    },
    { name: "CONTACT", link: "/", icon: <IoMdContact size={26} /> },
  ];

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 table-fixed bg-myfont3 cursor-default select-none">
        <div className="flex items-center lg:-mt-6">
          <div>
            <img
              src={NAVIMG}
              alt=""
              className="lg:w-[132px] lg:h-[156px] max-sm:size-28"
            />
          </div>
        </div>
        {/* nav links */}
        <div className="flex items-center max-md:hidden">
          <ul className="flex gap-2">
            {Links.map((link) => (
              <li
                key={link.name}
                className={`my-2 font-playfairDisplay text-lg ml-8 text-white ${
                  activePage === link.name ? "" : ""
                }`}
              >
                <Link
                  to={link.link}
                  onClick={() => handlePageChange(link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* large screen la Search input */}
        <div className=" flex rounded-full items-center px-8  cursor-pointer text-white border-[10px] border-transparent max-md:hidden ">
          <AiOutlineSearch size={25} />
        </div>

        {/* mobile Search input */}

        <div className="bg-gray-200 flex lg:hidden rounded-full items-center h-[25px] px-2 w-[200px] ">
          <input
            className="bg-transparent p-2 focus:outline-none w-full"
            type="text"
            placeholder="Search"
          />
          <AiOutlineSearch size={25} />
        </div>

        {/* Mobile menu and overlay */}
        {nav ? (
          <div className="bg-black/80 lg:hidden fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          " "
        )}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[250px] lg:hidden h-screen bg-myfont3 z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] lg:hidden h-screen bg-myfont3 z-10 duration-300"
          }
        >
          {/* Left Side Closer */}
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-6 top-12 lg:hidden cursor-pointer text-white  duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300 "
          />
          <h2 className="text-[25px] mt-[25px] ml-6 p-4 font-playfairDisplay  text-myfont2">
            Coffee<span className="font-bold">Shop</span>
          </h2>
          {/* nav links */}
          <div className="flex items-center lg:hidden z-50">
            <ul className=" gap-14 mt-[30px] ml-6 grid grid-rows-5">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={`my-2 font-playfairDisplay text-xl -ml-16 bg-myfont3/35 text-center px-8 text-white/60 rounded-full py-1 ${
                    activePage === link.name ? "" : ""
                  }`}
                >
                  <Link
                    to={link.link}
                    onClick={() => handlePageChange(link.name)}
                  >
                    <span className="grid px-12  grid-cols-2">
                      {link.icon}
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <img src={NAVIMG} alt="" className="w-[200px]  h-[156px] ml-[40px]" />
        </div>
        {/* mobile nav  */}
        <div
          onClick={() => setNav(!nav)}
          className="flex items-center lg:hidden px-4"
        >
          <div className="cursor-pointer text-white duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
