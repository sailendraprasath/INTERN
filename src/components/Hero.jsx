import React from "react";
import HEROIMG from "../assets/Coffee/Coffee2.png";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 cursor-default select-none">
        <div className="max-h-[500px] relative ">
          <div className="text-center text-myfont2 text-[35px] lg:text-8xl lg:-ml-16 lg:-mt-14 font-playfairDisplay">
            <h1>welcome to</h1>
            <h1 className="text-mytext1">pure perk café</h1>
          </div>
          <div className="py-10 text-center font-inter lg:text-lg text-white/65 lg:px-80">
            <p>
              Visit us today at Pure Perk Cafe and elevate your coffee
              experience to a whole new level. Because here, it's not just
              coffee; it's a celebration of the pure joy in every cup.
            </p>
          </div>
          <div className="lg:mx-auto lg:w-1/2 max-sm:px-24 lg:ml-[680px] lg:mt-8 mx-4">
            <button className="bg-mytext1 px-4 py-2 rounded-lg text-myfont2 w-full lg:w-auto">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-full max-h-[500px] py-10 object-fill   "
        src={HEROIMG}
        alt=""
      />
    </>
  );
};

export default Hero;
