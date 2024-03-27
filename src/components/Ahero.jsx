import React from "react";
import Ahero2 from "./Ahero2";

const Ahero = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 cursor-default select-none">
        <div className="max-h-[500px] relative ">
          <div className="  lg:grid grid grid-cols-2 lg:grid-cols-2  ">
            <img
              src="src/assets/Aimg/Aimg1.png"
              alt=""
              className="rounded-xl w-[150px] lg:w-[290px] lg:ml-6  "
            />
            <div>
              <h1 className="lg:-ml-[350px] font-playfairDisplay text-mytext1 lg:text-6xl text-4xl">
                Our Story
              </h1>
              <div className="flex flex-col text-myfont2 ">
                <p className="text-myfont2 text-[8px] lg:text-xl lg:-mt-1 lg:py-10 mt-8 lg:-ml-[350px] lg:w-[700px]">
                  Welcome to PurePerk Cafe, where we're dedicated to crafting
                  exceptional coffee experiences. Our philosophy centers on
                  sourcing the finest beans, roasting them with precision, and
                  creating a welcoming space for our community. Sustainability
                  is key, and we prioritize ethical practices from bean to cup.
                  Join us in our commitment to excellence , where every sip
                  tells a story. PurePerk Cafe – Elevate your coffee journey.
                </p>
                <div className="text-myfont2 mt-4 lg:-mt-5 rounded-3xl bg-mytext1 -ml-1 lg:-ml-[360px]  w-[100px]">
                  <button className="ml-6 text-[12px] lg:text-[15px] lg:ml-3 lg:py-3 py-2">
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
        src="src/assets/Coffee/Coffee2.png "
        alt=""
      />
      <Ahero2 />
    </>
  );
};

export default Ahero;
