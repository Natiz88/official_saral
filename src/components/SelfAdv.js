import React from "react";
import image from "./../component/Images/Car.png";

function SelfAdv(props) {
  return (
    <div className="h-65 w-3/4 m-auto flex flex-col sm:flex-row justify-evenly items-center mt-3 md:justify-evenly">
      <div className="mr-6 w-full sm:w-2/4 pt-2 sm:pt-0 sm:pl-10">
        <p className="text-[24px] text-center font-semibold text-red-600 sm:text-[30px] md:text-[35px]">
          Purbanchal's First
        </p>
        <p className="text-[18px] font-semibold text-center text-sky-600 sm:text-base-[1rem]  sm:text-[26px] md:text-[30px]">
          Online Printing Platform
        </p>
        <p className="text-[14px] text-center md:text-[16px]">
          with variety of printing services and quality
        </p>
        <div className="flex justify-center mt-2 sm:mt-5">
          <button className=" bg-red-600 rounded-md text-[14px] px-4 py-1 sm:px-6 sm:py-2  text-stone-50 text-lg md:text-[16px] p-1 md:w-48">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full sm:w-2/5">
        <img className="lg:object-cover" src={image} alt="" srcset="" />
      </div>
    </div>
  );
}

export default SelfAdv;
