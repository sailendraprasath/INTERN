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
      <footer className="bg-black/80 py-10 sm:py-10 md:py-12 lg:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About us */}
            <div className="max-sm:text-center">
              <h1 className="text-2xl lg:ml-5 lg:text-4xl mb-4 font-playfairDisplay">
                About Us
              </h1>
              <p className="text-sm lg:-ml-26 lg:text-base">
                Our coffee shop offers a cozy ambiance and a diverse menu of
                premium, globally sourced coffees. With skilled baristas, we
                ensure each cup is crafted with passion. Join us for a
                delightful and enriching coffee experience!
              </p>
            </div>

            {/* Contact Us */}
            <div className="max-sm:ml-[20px] lg:ml-10">
              <h1 className="text-2xl lg:text-4xl mb-4 font-playfairDisplay">
                Contact Us
              </h1>
              <ul className="space-y-2">
                <li className="flex items-center text-xs lg:text-base">
                  <MdOutlineMail size={16} className="mr-2 " />
                  <span>iorem@gmail.com</span>
                </li>
                <li className="flex items-center text-xs lg:text-base">
                  <FiPhoneCall size={16} className="mr-2" />
                  <span>(+91-111 333 8888)</span>
                </li>
                <li className="flex items-center text-xs lg:text-base">
                  <MdOutlineHome size={18} className="mr-2" />
                  <span>Your Home Address Here</span>
                </li>
              </ul>
            </div>

            {/* Open Hours */}
            <div className="max-sm:mt-[-145px] lg:ml-6 max-sm:ml-[210px]">
              <h1 className="text-2xl lg:text-4xl mb-4 font-playfairDisplay">
                Open Hours
              </h1>
              <p className="text-xs lg:text-base">
                Monday - Friday....6Am - 10Pm
              </p>
              <p className="text-xs lg:text-base">
                Weekend days....12Am - 12Pm
              </p>
            </div>

            {/* Newsletter */}
            <div className="text-center max-sm:-mt-10 ">
              <h1 className="text-2xl lg:text-4xl mb-4 font-playfairDisplay">
                Newsletter
              </h1>
              <div className="flex">
                <input
                  className="flex-grow mr-2 text-center border border-white bg-transparent rounded-lg lg:text-lg outline-none"
                  type="email"
                  placeholder="Enter your mail"
                />
                <button className="bg-mytext1 text-white px-4 py-2  rounded-md text-sm lg:text-base">
                  <IoMdSend />
                </button>
              </div>
              <div className="flex space-x-5 lg:ml-10 max-sm:ml-[100px] lg:mt-8 mt-4">
                <SiFacebook size={24} />
                <BsTwitterX size={24} />
                <FaYoutube size={24} />
                <FaInstagram size={24} />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-white/55 py-6 text-center mt-6 text-xs lg:text-sm">
        Copyright @ 2024 Pure Perk Café. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
