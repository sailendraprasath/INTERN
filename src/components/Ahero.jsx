import React from "react";
import Ahero2 from "./Ahero2";
import AIMG from "../assets/Coffee/Coffee2.png";
import AIMG1 from "../assets/Aimg/Aimg1.png";

const Ahero = () => {
  return (
    <>
      <div className="max-w-[1640px] max-sm:max-w-[350px] mx-auto p-4 cursor-default select-none">
        <div className="max-h-[500px] relative ">
          <div className="  lg:grid grid grid-cols-2 lg:grid-cols-2  ">
            <img
              src={AIMG1}
              alt=""
              className="rounded-xl w-[150px] max-sm:ml-[1px] lg:w-[290px] lg:ml-6  "
            />
            <div>
              <h1 className="lg:-ml-[350px] font-playfairDisplay text-mytext1  lg:text-6xl ml-8 text-[20px]">
                Our Story
              </h1>
              <div className=" text-myfont2  ">
                <p className="text-myfont2 text-[6px]  lg:text-xl ml-6  lg:-mt-1 lg:py-10 mt-8 lg:-ml-[350px] lg:w-[700px]">
                  Welcome to PurePerk Cafe, where we're dedicated to crafting
                  exceptional coffee experiences. Our philosophy centers on
                  sourcing the finest beans, roasting them with precision, and
                  creating a welcoming space for our community. Sustainability
                  is key, and we prioritize ethical practices from bean to cup.
                  Join us in our commitment to excellence , where every sip
                  tells a story. PurePerk Cafe – Elevate your coffee journey.
                </p>
                <div className="text-myfont2 mt-6 lg:-mt-5 rounded-3xl bg-mytext1 -ml-[-30px] lg:-ml-[360px] max-sm:w-[80px] max-sm:h-[30px]  w-[100px]">
                  <button className=" ml-6  text-[8px] lg:text-[15px] lg:ml-3 lg:py-3  ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full max-h-[500px] object-fill cursor-default select-none  "
        src={AIMG}
        alt=""
      />
      <Ahero2 />
    </>
  );
};

export default Ahero;
