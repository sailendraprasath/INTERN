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
                <div className="grid grid-rows-2 ">
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
                <div className="grid grid-rows-4  -ml-4 lg:ml-[15px]">
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
                    <span className="text-[7px] lg:text-[16px] ">
                      Your Home Address Here
                    </span>
                  </li>
                </div>

                {/* Open Hours ahm paa  */}
                <div className="grid grid-rows-4 -ml-2 ">
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
                <div className="grid grid-rows-2 grid-cols-4 ">
                  <h1 className="lg:text-4xl lg:px-8  max-md:text-sm mb-4 sm:mb-0 font-playfairDisplay">
                    NewsLetter
                  </h1>
                  {/* Email ahm paa  */}
                  <div className="border border-white grid grid-rows-5 lg:mt-20 mt-10  -ml-8 rounded-lg lg:rounded-none items-center px-2  lg:w-[199px] lg:h-[41px] w-[90.5px] h-[20px]">
                    <div className="flex flex-row">
                      <input
                        className="bg-transparent lg:text-lg lg:mt-6 text-[6px] lg:w-[150px] mt-3 focus:outline-none "
                        type="email"
                        placeholder=" Enter your mail"
                      />
                      <span className="bg-mytext1 lg:rounded-r-sm rounded-md lg:w-[46px] lg:h-[38.5px] w-[23px] h-[18.5px] lg:mt-8  mt-[15px] lg:-ml-[7px]  -ml-2.5">
                        <IoMdSend
                          size={10}
                          className="ml-2 mt-1 lg:size-5 lg:mt-2 lg:ml-4 size-2 cursor-pointer"
                        />
                      </span>
                    </div>
                  </div>

                  {/* social media icon ahm pa  */}
                </div>
                <div className="ml-[295px] -mt-[80px] lg:ml-[1010px] lg:gap-14 grid grid-cols-4 gap-6">
                  <SiFacebook className="lg:size-8" />
                  <BsTwitterX className="lg:size-8" />
                  <FaYoutube className="lg:size-8" />
                  <FaInstagram className="lg:size-8" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <p className="text-white/55 ml-14 px-4 py-6 text-xs lg:px-1 lg:py-5 lg:text-sm lg:ml-[580px]">
        Copyright @ 2024 Pure Perk Café. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
