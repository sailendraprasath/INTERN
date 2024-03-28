import React from "react";
import { MdOutlineMail, MdOutlineHome } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" cursor-default select-none py-10">
        <footer className="bg-black/80 py-20 sm:py-10 md:py-12 lg:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {/* Footer row 1  */}
              <div className="lg:grid lg:grid-cols-4 lg:gap-16 grid grid-cols-4 -mt-5 gap-6 ">
                {/* About us ahm paa  */}
                <div className="grid grid-rows-2 max-sm:-ml-1 ">
                  <h1 className="lg:text-4xl lg:px-8  max-md:text-sm mb-4 sm:mb-0 font-playfairDisplay">
                    About Us
                  </h1>
                  <p className="lg:-mt-14 lg:text-sm lg:w-[300px] lg:-ml-5 -mt-8 -ml-0 text-[5px] w-[60px]  ">
                    Our coffee shop offers a cozy ambiance and a diverse menu of
                    premium, globally sourced coffees. With skilled baristas, we
                    ensure each cup is crafted with passion. Join us for a
                    delightful and enriching coffee experience!{" "}
                  </p>
                </div>

                {/* contact ahm paa  */}
                <div className="grid grid-rows-4  -ml-5 lg:ml-[15px]">
                  <h1 className="lg:text-4xl  lg:px-8  max-md:text-sm mb-4 sm:mb-0 font-playfairDisplay">
                    Contact Us
                  </h1>
                  <li className=" lg:text-xl lg:gap-2 lg:ml-3  mt-1 flex text-[8px] ">
                    <MdOutlineMail
                      size={13}
                      className=" lg:size-6 lg:mt-0 -mt-0.5 mr-1"
                    />
                    <span className="text-[7px] -mt-0.5 lg:text-[16px] ">
                      iorem@gmail.com
                    </span>
                  </li>
                  <li className="lg:text-xl lg:gap-2 lg:ml-3  -mt-1.5 flex text-[8px]">
                    <FiPhoneCall
                      size={13}
                      className=" lg:size-6 lg:mt-0 mr-1 -mt-0.5"
                    />
                    <span className="text-[7px] lg:text-[16px] ">
                      (+91-111 333 8888)
                    </span>
                  </li>
                  <li className=" lg:text-xl lg:gap-2  lg:ml-3  -mt-4 flex text-[4px]">
                    <MdOutlineHome
                      size={13}
                      className=" lg:size-8 lg:mt-0 mr-1 -mt-0.5"
                    />
                    <span className="text-[6px] mt-0.5 lg:text-[16px] ">
                      Your Home Address Here
                    </span>
                  </li>
                </div>

                {/* Open Hours ahm paa  */}
                <div className="grid grid-rows-4 -ml-5 ">
                  <h1 className="lg:text-4xl lg:px-8  max-md:text-sm mb-4 sm:mb-0 font-playfairDisplay">
                    Open Hours
                  </h1>
                  <p className="text-[6px] lg:text-xl lg:flex lg:w-[300px] w-[90px] mt-1">
                    Monday - Friday....6Am - 10Pm
                  </p>
                  <p className="text-[6px] lg:text-xl lg:flex lg:w-[300px] w-[90px] -mt-5">
                    Weekend days....12Am - 12Pm
                  </p>
                </div>

                {/* Newsletter bar  */}
                <div className="grid grid-rows-2 grid-cols-4 -ml-3 ">
                  <h1 className="lg:text-4xl lg:px-8  max-md:text-sm mb-4 sm:mb-0 font-playfairDisplay">
                    NewsLetter
                  </h1>
                  {/* Email ahm paa  */}
                  <div className="border max-sm:grid max-sm:grid-rows-2 border-white  lg:mt-20 mt-10  -ml-6 rounded-lg lg:rounded-none items-center px-2  lg:w-[199px] lg:h-[41px] w-[80px] h-[20px]">
                    <div className="flex flex-row">
                      <input
                        className="bg-transparent lg:text-lg lg:-mt-2 text-[6px] lg:w-[150px] mt-2 focus:outline-none "
                        type="email"
                        placeholder=" Enter your mail"
                      />
                      <span className="bg-mytext1 lg:rounded-r-sm rounded-md lg:w-[46px] lg:h-[38.5px] w-[22px] h-[18.5px] lg:mt-[0.1px]  mt-[9px] lg:ml-[3px]  -ml-[20px]">
                        <IoMdSend
                          size={10}
                          className="ml-2 mt-1 lg:size-5 lg:mt-2 lg:ml-4 size-2 cursor-pointer"
                        />
                      </span>
                    </div>
                    <div className="  lg:mt-6 max-sm:w-[80px] -ml-2 -mt-[-60px] lg:ml-[-20px] lg:gap-14 grid grid-cols-4 gap-4">
                      <SiFacebook className="lg:size-8 max-sm:size-3 ml-3" />
                      <BsTwitterX className="lg:size-8 max-sm:size-3 ml-1 " />
                      <FaYoutube className="lg:size-8 max-sm:size-3 -ml-1" />
                      <FaInstagram className="lg:size-8 max-sm:size-3 ml-[-10px] " />
                    </div>
                  </div>

                  {/* social media icon ahm pa  */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <p className="text-white/55  max-sm:ml-8 px-4  py-6 text-xs lg:px-1 lg:py-5 lg:text-sm lg:ml-[580px]">
        Copyright @ 2024 Pure Perk Café. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
