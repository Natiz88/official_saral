import React from "react";

import BusinessCard1 from "../assets/BusinessCard1.png";
import ProductSlider from "./ProductSlider";
// import BusinessCard2 from "../assets/BusinessCard2.png";

const ProductDetails = () => {
  const productDetails= {
    description: "Standard Business Card to communicate your brand. Print your business card online and carry your well printed, best quality card.",
    size: "55x88",
    paper: 300,
    finishing: "Plastic Coated",
  }
  const designTips={
    resolution: 300,
    colorMode: "CMYK",
    fileFormat: [
      "PDF",
      "JPG",
      "TIFF",
      "PSD",
    ],
    message: "(One design card is accepted in one order)"
  }
  return (
    <div className="w-[18rem] flex flex-col gap-[1rem] md:w-[22rem] lg:w-full">
      {/* <img src={BusinessCard1} alt="hello" className="" /> */}
      <ProductSlider />
      <div className="flex flex-col">
        <p className="">
          {productDetails.description}
        </p>
        <p>Size: {productDetails.size} mm</p>
        <p>Paper: {productDetails.paper} GSM</p>
        <p>Finishing: {productDetails.finishing} </p>
      </div>
      <div>
        <h1 className="font-semibold">Design Tips:</h1>
        <p>Resolution: {designTips.resolution} Dpi</p>
        <p>Color Mode: {designTips.colorMode}</p>
        <p>Supported File Format: {designTips.fileFormat.join('/')}</p>
        <p>{designTips.message}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
