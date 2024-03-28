import React from "react";
import AIMG2 from "../assets/Aimg/Aimg2.png";
import AIMG3 from "../assets/Aimg/Aimg3.png";
import AIMG4 from "../assets/Aimg/Aimg4.png";
import AIMG5 from "../assets/Aimg/Aimg5.png";
import AIMG6 from "../assets/Aimg/Aimg6.png";
import AIMG7 from "../assets/Aimg/Aimg7.png";

const Ahero2 = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 cursor-default select-none">
        <div className="max-h-[500px] relative ">
          <h1 className="text-mytext1 font-playfairDisplay text-center mt-10 lg:text-6xl text-2xl ">
            Our Popular Picks
          </h1>
          <img
            src={AIMG2}
            alt="Aimg2"
            className="w-[90px] ml-[140px] mt-8 lg:w-[300px] lg:mt-14  -rotate-[20deg] lg:ml-[570px]"
          />
          <div>
            {/* Left side container 1 ahmm pa  */}
            <div className="lg:-mt-[260px] lg:ml-[140px] -mt-[30px] ">
              <div className="grid grid-cols-2 ">
                <h1 className="font-leckerli text-mytext2/60 text-[10px] lg:text-[30px] ">
                  Latte
                </h1>
                <div className="max-sm:hidden text-mytext2/60 lg:text-4xl  lg:-mt-6 lg:-ml-[545px]">
                  _____________________
                </div>
              </div>
              <div className="lg:py-4 grid grid-cols-2 ">
                <div>
                  <h1 className="font-leckerli lg:text-2xl  lg:-mt-3 text-[10px]  text-mytext2/60">
                    2/3 Coffee
                  </h1>
                  <h1 className="font-leckerli lg:text-2xl lg:mt-2 text-[10px] text-mytext2/60">
                    1/3 Milk
                  </h1>
                </div>
                <div className="grid grid-cols-2 -ml-[130px]">
                  <div>
                    <h1 className="font-leckerli text-mytext2/60 lg:text-[50px] lg:-ml-[410px] lg:-mt-1">
                      50%
                    </h1>
                  </div>
                  <div className="lg:hidden text-mytext2/60  -mt-2 -ml-[125px]">
                    _________
                  </div>
                </div>
              </div>
            </div>
            {/* Left side container 2 ahm pa  */}
            <div className="lg:mt-[100px] lg:ml-[140px] -mt-[110px] ">
              <div className="grid grid-cols-2 ">
                <h1 className="font-leckerli text-mytext2/60 text-[10px] lg:text-[30px] ">
                  Latte
                </h1>
                <div className="max-sm:hidden text-mytext2/60 lg:text-4xl  lg:-mt-6 lg:-ml-[545px]">
                  _____________________
                </div>
              </div>
              <div className="lg:py-4 grid grid-cols-2 ">
                <div>
                  <h1 className="font-leckerli lg:text-2xl  lg:-mt-3 text-[10px]  text-mytext2/60">
                    2/3 Coffee
                  </h1>
                  <h1 className="font-leckerli lg:text-2xl lg:mt-2 text-[10px] text-mytext2/60">
                    1/3 Milk
                  </h1>
                </div>
                <div className="grid grid-cols-2 -ml-[130px]">
                  <div>
                    <h1 className="font-leckerli text-mytext2/60 lg:text-[50px] lg:-ml-[410px] lg:-mt-1">
                      50%
                    </h1>
                  </div>
                  <div className="lg:hidden text-mytext2/60  -mt-2 -ml-[125px]">
                    _________
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side container 1 ahm pa  */}
        <div className="lg:ml-[1400px] lg:mt-[-345px] mt-[-40px]">
          <div className="grid grid-cols-2 ">
            <h1 className="font-leckerli text-mytext2/60 text-[10px] lg:text-[30px] ml-[330px] -mt-[10px] lg:-mt-1.5  lg:ml-[-180px] ">
              Black
            </h1>
            <div className="max-sm:hidden text-mytext2/60 lg:text-4xl  lg:-mt-6 lg:-ml-[545px]">
              _____________________
            </div>
            <h1 className="font-leckerli text-mytext2/60 text-[8px] lg:text-[30px] ml-[112px] lg:-mt-1.5 lg:ml-[-280px]">
              1 cup of coffee <br />
              Not Sugar 50%
            </h1>
            <div className="lg:hidden text-mytext2/60  -mt-10 ml-[235px]">
              _________
            </div>
          </div>
        </div>
        {/* Right side container 2 ahm pa  */}
        <div className="lg:ml-[1400px] lg:mt-[125px] mt-[40px]">
          <div className="grid grid-cols-2 ">
            <h1 className="font-leckerli text-mytext2/60 text-[10px] lg:text-[30px] ml-[330px] -mt-[10px] lg:-mt-1.5  lg:ml-[-180px] ">
              Black
            </h1>
            <div className="max-sm:hidden text-mytext2/60 lg:text-4xl  lg:-mt-6 lg:-ml-[545px]">
              _____________________
            </div>
            <h1 className="font-leckerli text-mytext2/60 text-[8px] lg:text-[30px] ml-[112px] lg:-mt-1.5 lg:ml-[-280px]">
              1 cup of coffee <br />
              Not Sugar 50%
            </h1>
            <div className="lg:hidden text-mytext2/60  -mt-10 ml-[235px]">
              _________
            </div>
          </div>
        </div>

        {/* Icons images container uhhhhhhh  */}
        <div>
          <div className="lg:grid lg:grid-cols-4 lg:px-32 lg:mt-14 grid grid-cols-2 px-14 mt-8 -ml-10">
            <div className="mt-10 ml-16">
              <img
                src={AIMG3}
                alt="Aimg3"
                className="rounded-full lg:p-12 lg:w-[250px] lg:h-[250px] w-[55px] h-[55px] ml-3  "
              />
              <h1 className="font-leckerli text-mytext2 lg:ml-12 lg:text-[30px] mt-2 text-[14px] ">
                Picked bean
              </h1>
              <p className="lg:w-[200px] lg:ml-10 text-center lg:text-[18px] text-[12px] w-[125px] -ml-5 text-mytext2 ">
                Handpicked, sun-dried, aromatic coffee beans.
              </p>
            </div>
            <div className="mt-10 ml-16">
              <img
                src={AIMG4}
                alt="Aimg4"
                className="rounded-full lg:p-12 lg:w-[250px] lg:h-[250px] w-[55px] h-[55px] ml-3  "
              />
              <h1 className="font-leckerli text-mytext2 lg:ml-12 lg:text-[30px] mt-2 text-[14px] ">
                French Press
              </h1>
              <p className="lg:w-[200px] lg:ml-10 text-center lg:text-[18px] text-[12px] w-[125px] -ml-5 text-mytext2 ">
                Bold, robust, rich, full-bodied delight.
              </p>
            </div>
            <div className="mt-10 ml-16">
              <img
                src={AIMG5}
                alt="Aimg5"
                className="rounded-full lg:p-12 lg:w-[250px] lg:h-[250px] w-[55px] h-[55px] ml-3  "
              />
              <h1 className="font-leckerli text-mytext2 lg:ml-12 lg:text-[28px] mt-2 text-[12px] ">
                Ready to Drink
              </h1>
              <p className="lg:w-[200px] lg:ml-12 lg:text-center lg:text-[18px] text-[12px] w-[110px] -ml-2 text-center text-mytext2 ">
                {" "}
                an instant escape in every cup
              </p>
            </div>
            <div className="mt-10 ml-16">
              <img
                src={AIMG6}
                alt="Aimg6"
                className="rounded-full lg:p-12 lg:w-[250px] lg:h-[250px] w-[55px] h-[55px] ml-3  "
              />
              <h1 className="font-leckerli text-mytext2 lg:ml-12 lg:text-[30px] mt-2 text-[14px] ">
                Quality coffee
              </h1>
              <p className="lg:w-[200px] lg:ml-10 text-center lg:text-[18px] text-[12px] w-[100px]  -ml-2 text-mytext2 ">
                {" "}
                unparalleled flavor experience
              </p>
            </div>
          </div>
        </div>

        {/* Why choose us ?? eyyyyy  */}
        <div className="">
          <h1 className="lg:text-6xl mt-20 text-4xl  text-center font-playfairDisplay text-mytext1">
            Why choose us ?{" "}
          </h1>
          <div>
            <div className="lg:grid lg:grid-cols-2 py-10 grid grid-cols-1">
              {/* Large screen  */}
              <div className="max-sm:hidden lg:w-[540px] lg:mt-[85px]  lg:ml-[280px] lg:text-lg">
                <p className="text-myfont2">
                  Discover a haven of culinary delight at our cafe, where every
                  detail reflects our commitment to excellence. Nestled in
                  [location], our site exudes warmth and charm, inviting you to
                  savor a unique blend of flavors. From the first sip of our
                  meticulously crafted coffees to the last bite of our
                  delectable pastries, your senses will be transported to a
                  world of unparalleled taste. Our cozy ambiance and attentive
                  service create a memorable experience, making our cafe the
                  perfect destination for coffee enthusiasts and food
                  connoisseurs alike. Join us and embark on a culinary journey
                  that transcends the ordinary, leaving an indelible mark on
                  your taste buds and memories
                </p>
              </div>
              <div className="max-sm:hidden lg:mt-[60px] lg:ml-[200px]">
                <img
                  src={AIMG7}
                  alt="Aimg7"
                  className="rounded-full w-[380px] h-[380px]"
                />
              </div>
              {/* Mobile screen  */}
              <div className="lg:hidden lg:mt-[60px] ml-[130px]">
                <img
                  src={AIMG7}
                  alt="Aimg7"
                  className="rounded-full w-[110px] h-[110px]"
                />
              </div>
              <div className="lg:hidden w-[300px] mt-[15px]  text-[10px] text-center ml-[25px] lg:text-sm">
                <p className="text-myfont2">
                  Discover a haven of culinary delight at our cafe, where every
                  detail reflects our commitment to excellence. Nestled in
                  [location], our site exudes warmth and charm, inviting you to
                  savor a unique blend of flavors. From the first sip of our
                  meticulously crafted coffees to the last bite of our
                  delectable pastries, your senses will be transported to a
                  world of unparalleled taste. Our cozy ambiance and attentive
                  service create a memorable experience, making our cafe the
                  perfect destination for coffee enthusiasts and food
                  connoisseurs alike. Join us and embark on a culinary journey
                  that transcends the ordinary, leaving an indelible mark on
                  your taste buds and memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ahero2;
