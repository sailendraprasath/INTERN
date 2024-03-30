import React from "react";
import Ahero2 from "./Ahero2";
import AIMG from "../assets/Coffee/Coffee2.png";
import AIMG1 from "../assets/Aimg/Aimg1.png";

const Ahero = () => {
  return (
    <>
      <div className="max-w-[1640px] max-sm:max-w-[350px] mx-auto p-4 cursor-default select-none">
        <div className="max-h-[500px] relative ">
          <div className="  lg:grid grid grid-rows-3 max-sm:ml-3 lg:grid-cols-2  ">
            <img
              src={AIMG1}
              alt=""
              className="rounded-xl w-[225px] max-sm:h-[400px] max-sm:ml-[1px] lg:w-[290px] lg:ml-6  "
            />

            <div>
              <h1 className="lg:-ml-[350px]  font-playfairDisplay text-mytext1  lg:text-6xl ml-[260px] max-sm:-mt-[408px]  text-[30px]">
                <span className="lg:hidden ">
                  O<br />
                  U<br />
                  R<br />
                  <br />
                  S<br />
                  T<br />
                  O<br />
                  R<br />Y
                </span>
                <span className="max-sm:hidden"> Our Story</span>
              </h1>
              <div className=" text-myfont2 max-sm:mt-[40px] w-[320px]  ">
                <p className="text-myfont2 text-[13px]  max-sm:text-center px-1 max-sm:max-w-full lg:text-xl -ml-2  lg:-mt-1 lg:py-10 mt-8 lg:-ml-[350px] lg:w-[700px]">
                  Welcome to PurePerk Cafe, where we're dedicated to crafting
                  exceptional coffee experiences. Our philosophy centers on
                  sourcing the finest beans, roasting them with precision, and
                  creating a welcoming space for our community. Sustainability
                  is key, and we prioritize ethical practices from bean to cup.
                  Join us in our commitment to excellence , where every sip
                  tells a story. PurePerk Cafe – Elevate your coffee journey.
                </p>
                <div className="text-myfont2 mt-6 lg:-mt-2  rounded-3xl bg-mytext1 -ml-[-100px] lg:-ml-[348px] max-sm:w-[110px] max-sm:h-[30px] lg:h-[30px] w-[100px]">
                  <button className=" ml-6 mt-1 lg:-mt-2 text-[14px] lg:text-[15px] lg:ml-3 lg:py-3  ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full max-sm:pt-56 max-h-[500px] object-fill cursor-default select-none  "
        src={AIMG}
        alt=""
      />
      <Ahero2 />
    </>
  );
};

export default Ahero;
