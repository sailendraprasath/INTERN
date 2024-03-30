import React from "react";
import Footer from "./Footer";
import Navbar from "./Nabar";
import RIMG from "../assets/Reserveimg/Reserveimg1.png";

const Reservation = () => {
  return (
    <>
      <Navbar />
      <div className="cursor-default max-sm:mx-auto max-sm:max-w-[350px] select-none">
        <div>
          <h1 className="lg:text-6xl  max-sm:ml-[25px] max-sm:px-2 text-4xl font-playfairDisplay text-mytext1 text-center">
            Book Your Table
          </h1>
        </div>

        <div className="  text-center lg:text-2xl  -mt-6 py-4 text-mytext2/75 lg:text-mytext2/35 ">
          <h1 className="max-sm:hidden">
            ____________________________________
          </h1>
          <h1 className="max-sm:hidden lg:-mt-[20px] -mt-[18px]">
            ________________________
          </h1>
          <h1 className="lg:hidden ml-6">
            __________________________________________
          </h1>
          <h1 className="lg:hidden lg:-mt-[20px] ml-5 -mt-[18px]">
            _________________________________
          </h1>

          <div className="lg:-mt-[60px] py-4 -mt-[35px] ml-[173px] max-sm:relative lg:ml-[730px] lg:py-8">
            <img
              src={RIMG}
              alt=""
              className=" lg:w-[40px] w-[25px] h-[25px] lg:h-[40px] rounded-full"
            />
          </div>
        </div>
        <div>
          <p className="text-mytext2 text-center max-sm:text-[14px] max-sm:-mt-3 ml-[70px] lg:ml-[450px] w-[250px] lg:w-[600px]">
            Sip happens, but coffee helps. It's not just a beverage; it's a hug
            in a mug, a moment of sanity in a world gone latte
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 max-sm:text-[10px] gap-10 px-8 mt-16 lg:ml-10 ml-2 ">
          <input
            type="text"
            placeholder="Name"
            className="border  text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2  lg:w-[640px] "
          />
          <input
            type="text"
            placeholder="Phone"
            className="border text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2 lg:w-[640px]"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2 lg:w-[640px]"
          />
          <input
            type="text"
            placeholder="Number of people"
            className="border text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2 lg:w-[640px]"
          />
          <input
            type="text"
            placeholder="Date"
            className="border  text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2 lg:w-[640px]"
          />
          <input
            type="text"
            placeholder="Time"
            className="border text-white border-white/50 outline-none bg-transparent rounded-lg py-3 px-2 lg:w-[640px]"
          />
        </div>
        <div className="py-10 text-center">
          <button className="bg-mytext1 text-myMenu px-6 py-2 max-sm:text-[10px]  rounded-full">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reservation;
