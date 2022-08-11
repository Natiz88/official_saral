import React from "react";
import image from './../component/Images/Car.png';

function SelfAdv(props) {
  return (
    <div className="h-65 w-3/4 m-auto flex justify-evenly items-center mt-3 md:justify-evenly">
      <div className="mr-6 w-2/4 pl-10">
        <p className="text-[1.2rem] text-center mb-2 font-semibold text-red-600 md:text-3xl lg:text-5xl">
          Purbanchal's First
        </p>
        <p className="text-[1.1rem] font-semibold text-sky-600 sm:text-base-[1rem] md:text-5xl">
          Online Printing Platform
        </p>
        <p className="text-[0.6rem] text-center md:text-[1.2rem]">
        with variety of printing services and quality
        </p>
        <div className="flex justify-center mt-7">
          <button className=" bg-red-600 rounded-md w-45 text-[0.6rem] py-2  text-stone-50 text-lg md:text-[1.5rem] p-1 md:w-48">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-2/5">
        <img className="lg:object-cover" src={image} alt="" srcset="" />
      </div>
    </div>
  );
}

export default SelfAdv;
