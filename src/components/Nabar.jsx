import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import NAVIMG from "../assets/Coffee/Coffee.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [nav, setNav] = useState(false);

  const handlePageChange = (name) => {
    setActivePage();
    <Home />;
  };

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Reservation", link: "/reservation" },
    { name: "Contact", link: "/" },
  ];

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 table-fixed bg-myfont3 cursor-default select-none">
        <div className="flex items-center lg:-mt-10">
          <div>
            <img src={NAVIMG} alt="" className="w-[132px] h-[156px]" />
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

        <div className="bg-gray-200 flex lg:hidden rounded-full items-center px-2 w-[200px] ">
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
          ""
        )}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[250px] lg:hidden h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] lg:hidden h-screen bg-white z-10 duration-300"
          }
        >
          {/* Left Side Closer */}
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-6 top-12 lg:hidden cursor-pointer text-black duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300 "
          />{" "}
          {/* nav links */}
          <div className="flex items-center lg:hidden z-50">
            <ul className=" gap-20 mt-[150px] ml-10 grid grid-rows-5">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={`my-2 font-playfairDisplay text-xl ml-8 text-black ${
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
