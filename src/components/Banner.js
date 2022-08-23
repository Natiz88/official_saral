import React, { useState } from "react";
import NavbarBottom from "./NavbarBottom";
import About from "../assets/About.png";
import Cancellation from "../assets/Cancellation Policy.png";
import ContactUs from "../assets/Contact Us.png";
import Delivery from "../assets/Delivery Terms.png";
import FAQ from "../assets/Faq.png";
import Privacy from "../assets/Privacy Policies.png";
import Quality from "../assets/Quality Terms.png";
import Refund from "../assets/Refund Policy.png";
import Terms from "../assets/Terms & Conditions.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Banner = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const BannerPNGs = [
    About,
    Cancellation,
    ContactUs,
    Delivery,
    FAQ,
    Privacy,
    Quality,
    Refund,
    Terms,
  ];
  const BannerPNGsIndex = Math.floor(Math.random() * 8);
  return (
    <div>
      <div className="hidden w-full shadow-lg h-[35px] md:flex items-center border-b-2 border-gray-200">
        <div
          onMouseEnter={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          className="ml-[9%] h-full"
        >
          <p
            onClick={() => setToggle(!toggle)}
            className="w-full h-full cursor-pointer flex items-center justify-between"
          >
            Categories {!toggle ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </p>
          {toggle && <NavbarBottom />}
        </div>
      </div>
      <div className="h-[120px] bg-gradient-to-r from-sky-400 to-sky-200 flex justify-between items-center relative">
        <h1 className="pl-[10%] text-[38px] text-white font-semibold left-[20%]">
          {text}
        </h1>
        <img
          src={BannerPNGs[BannerPNGsIndex]}
          alt=""
          className="w-[150px] absolute animate-run right-[10%] -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Banner;
