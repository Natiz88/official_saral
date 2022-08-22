import React from "react";
import About from "../assets/About.png";
import Cancellation from "../assets/Cancellation Policy.png";
import ContactUs from "../assets/Contact Us.png";
import Delivery from "../assets/Delivery Terms.png";
import FAQ from "../assets/Faq.png";
import Privacy from "../assets/Privacy Policies.png";
import Quality from "../assets/Quality Terms.png";
import Refund from "../assets/Refund Policy.png";
import Terms from "../assets/Terms & Conditions.png";


const Banner = ({text}) => {
  const BannerPNGs = [About, Cancellation, ContactUs, Delivery, FAQ, Privacy, Quality, Refund, Terms]
  const BannerPNGsIndex = Math.floor(Math.random() * 8);
  return (
    <div>
      <div className="h-[120px] bg-gradient-to-r from-sky-400 to-sky-200 flex justify-between items-center relative">
        <h1 className="absolute text-[38px] text-white font-semibold left-[20%] ">{text}</h1>
        <img
          src={BannerPNGs[BannerPNGsIndex]}
          alt=""
          className="w-[150px] absolute animate-run right-[20%] -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Banner;
