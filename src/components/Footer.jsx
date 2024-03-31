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
      <footer className="bg-black/80 py-4 sm:py-10 md:py-12 lg:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Us */}
            <div className="max-sm:text-center  lg:text-center sm:text-left ">
              <h1 className="text-2xl  lg:text-4xl mb-4 font-playfairDisplay">
                About Us
              </h1>
              <p className="max-sm:text-[12px] lg:-ml-8 lg:text-base">
                Our coffee shop offers a cozy ambiance and a diverse menu of
                premium, globally sourced coffees. With skilled baristas, we
                ensure each cup is crafted with passion. Join us for a
                delightful and enriching coffee experience!
              </p>
            </div>

            {/* Contact Us */}
            <div className="max-sm:text-center  sm:text-left lg:ml-16">
              <h1 className="text-2xl lg:text-4xl  mb-4 font-playfairDisplay">
                Contact Us
              </h1>
              <div className="flex flex-col lg:gap-2 max-sm:gap-4 lg:text-[18px] lg:-ml-20">
                <div className="flex items-center gap-2 justify-center">
                  <MdOutlineMail className="size-4" />
                  <span className="max-sm:text-[13px]">lorem@gmail.com</span>
                </div>
                <div className="flex items-center lg:gap-2 lg:ml-2 max-sm:gap-0 justify-center">
                  <FiPhoneCall className="size-4" />
                  <span className="max-sm:text-[13px] max-sm:ml-1">
                    (+91-111 333 8888)
                  </span>
                </div>
                <div className="flex items-center gap-1 lg:ml-12 justify-center">
                  <MdOutlineHome className="size-5" />
                  <span className="max-sm:text-[10px]">
                    Your Home Address Here
                  </span>
                </div>
              </div>
            </div>

            {/* Open Hours */}
            <div className="max-sm:text-center sm:text-left lg:ml-14">
              <h1 className="text-2xl lg:text-4xl mb-4 font-playfairDisplay">
                Open Hours
              </h1>
              <p className="text-[10px] lg:text-base">
                Monday - Friday: 6am - 10pm
                <br />
                Weekend days: 12am - 12pm
              </p>
            </div>

            {/* Newsletter */}

            <div className="text-center lg:ml-16  sm:text-right">
              <h1 className="text-2xl lg:flex lg:ml-8 lg:text-4xl mb-4 font-playfairDisplay">
                Newsletter
              </h1>
              <div className="flex flex-col  lg:mt-6 sm:flex-row items-center sm:items-start">
                <input
                  className="flex-grow mr-2 max-sm:w-[150px] text-center border max-sm:text-[13px] border-white bg-transparent rounded-lg lg:text-lg outline-none mb-2 sm:mb-0"
                  type="email"
                  placeholder="Enter your mail"
                />
                <button className="bg-mytext1 max-sm:w-8 max-sm:h-5 text-white px-4 py-2 max-sm:py-0 max-sm:px-2.5 rounded-md text-sm lg:text-base">
                  <IoMdSend />
                </button>
              </div>
              <div className="flex justify-center sm:justify-start  space-x-5 max-sm:py-2 max-sm:mx-auto lg:ml-10  lg:mt-8 mt-4">
                <SiFacebook size={24} className="max-sm:-ml-[180px]" />
                <BsTwitterX size={24} />
                <FaYoutube size={24} />
                <FaInstagram size={24} />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-white/55 pb-3 lg:py-6 text-center mt-6 text-xs lg:text-sm">
        Copyright @ 2024 Pure Perk Café. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
