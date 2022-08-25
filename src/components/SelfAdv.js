import React from "react";
import image from "./../component/Images/Car.png";
import { Link } from "react-router-dom";

function SelfAdv(props) {
  return (
    <div className="h-65 w-3/4 m-auto flex flex-col sm:flex-row justify-evenly items-center my-3 lg:justify-evenly">
      <div className="mr-6 w-full md:w-2/4 pt-2 lg:pt-0 lg:pl-10">
        <p className="text-[24px] text-center font-semibold text-red-600 lg:text-[30px]">
          Purbanchal's First
        </p>
        <p className="text-[18px] font-semibold text-center text-sky-600 md:text-base-[1rem] lg:text-[26px]">
          Online Printing Platform
        </p>
        <p className="text-[14px] text-center lg:text-[16px]">
          with variety of printing services and quality
        </p>
        <div className="flex justify-center mt-2 md:mt-5">
          <Link to="/signup">
            <button className=" bg-red-600 rounded-md text-[14px] px-4 py-1 lg:px-6 lg:py-2  text-stone-50 text-lg lg:text-[16px] p-1 md:w-48">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-2/5">
        <img className="lg:object-cover" src={image} alt="" srcset="" />
      </div>
    </div>
  );
}

export default SelfAdv;
