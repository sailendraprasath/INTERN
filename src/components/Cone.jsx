import React from "react";
import Footer from "./Footer";

const Cone = () => {
  return (
    <>
      <div className="mx-auto">
        <div className=" flex flex-col border-2 border-black/50 bg-mytext1/80  py-10  ">
          <h1 className="lg:text-6xl  mx-auto max-sm:px-2 text-4xl font-playfairDisplay text-myfont3 text-center">
            Contact Us
          </h1>
          <p className="text-center py-5 font-playfairDisplay text-white/75 max-sm:text-[20px] lg:text-[40px]">
            115'Mela kailasapuram thathaneri main road madurai 625018 <br />
            lorem@gmail.com <br />
            (+91-111 333 8888)
          </p>
        </div>

        <iframe
          className="mx-auto flex relative  w-full h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.621995079346!2d78.09678044449755!3d9.94182059256838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf597ec3fcd5%3A0xb9d914694a72bb44!2sKalathupottal%2C%20Thathaneri%2C%20Tamil%20Nadu%20625018!5e0!3m2!1sen!2sin!4v1711880786876!5m2!1sen!2sin"
        ></iframe>

        <div className="py-10 border-2 border-black/50 bg-mytext1/80">
          <h1 className="lg:text-6xl py-10  max-sm:ml-[25px] max-sm:px-2 text-4xl font-playfairDisplay text-myfont3 text-center">
            Opening hours
          </h1>
          <p className="text-center -mt-3 font-playfairDisplay  text-white/75 max-sm:text-[20px] lg:text-[40px]  ">
            Monday - Friday: 6am - 10pm
            <br />
            Weekend days: 12am - 12pm
          </p>
        </div>
        <div className="py-5 border-2 border-black/50">
          <h1 className="lg:text-6xl py-10  max-sm:ml-[25px] max-sm:px-2 text-4xl font-playfairDisplay text-mytext1 text-center">
            Coffee Shop
          </h1>
          <p className="text-center -mt-5 font-playfairDisplay  text-white/75 max-sm:text-[20px] lg:text-[40px]  ">
            Contact@lorem_Coffe_shop.com
            <p className="text-white/55 pb-3 lg:py-6 text-center mt-6 text-xs lg:text-sm">
              Copyright @ 2024 Pure Perk Café. All Rights Reserved.
            </p>
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Cone;
