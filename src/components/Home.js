import React, { useEffect } from "react";
import reminder from "../assets/reminder.svg";
import interf from "../assets/interface.svg";
import image1 from "../assets/image1.jpg";
import photo_gift from "../assets/sweater.jpg";
import Banner from "../assets/banner.webp";
import MyCarousel from "./MyCarousel";
import Steps from "./Steps";
import PopularProduct from "./PopularProduct";
import Advertise from "./Advertise";
import SelfAdv from "./SelfAdv";
import ProductCategoryHeading from "./ProductCategoryHeading";
import MoreInfo from "./MoreInfo";
import ProductCard from "./ProductCard";
import ProductCollection from "./ProductCollection";
import step1 from "./../component/Images/Steps/Step-1.png";
import step2 from "./../component/Images/Steps/Step-2.png";
import step3 from "./../component/Images/Steps/Step-3.png";
import step4 from "./../component/Images/Steps/Step-4.png";
import NavbarBottom from "./NavbarBottom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      {/* Image Slider section */}
      <MyCarousel />
      <div className=" w-full flex justify-center flex-col">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold md:text-[1.5rem] lg:text-3xl">
            How
            <span className="mx-2 text-pink-700 ">Saral</span>
            <span className="mr-2 text-blue-800">Print</span>
            Works?
          </h1>
          <p className="text-[0.7rem] md:text-[0.9rem] lg:text-base font-normal">
            Be a part of Saral Print in 4 simple steps. <br />
          </p>
        </div>
        {/* How saral prints works */}
        <div className=" flex justify-center mt-4">
          <div className="grid grid-flow-row gap-2 px-1 my-5 w-[80%] lg:w-[85%] m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 ">
            <Steps
              reminder={step1}
              step="Step 1"
              todo="Create Account"
              message="Create your account and verify"
            />
            <Steps
              reminder={step2}
              step="Step 2"
              todo="Place Your Order"
              message="Define your items and upload your design"
            />
            <Steps
              reminder={step3}
              step="Step 3"
              todo="Online Payment"
              message="Pay online with any mobile banking"
            />
            <Steps
              reminder={step4}
              step="Step 4"
              todo="Delivery"
              message="Confirm your order and location details"
            />
          </div>
        </div>
        <div className=" mt-3">
          <Advertise image={image1} />
          <SelfAdv image={interf} />
        </div>

        {/* Product section */}
        <div className="w-full">
          {/* Popular Product section */}
          <div>
            <div className=" flex justify-center">
              <ProductCategoryHeading heading="Popular Products" />
            </div>
            <div className=" flex justify-center">
              <div className="grid my-5 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
              </div>
            </div>
          </div>
          <Advertise image={image1} />
          {/* New Launches section */}
          <div>
            <div className="flex justify-center">
              <ProductCategoryHeading heading="Hot Deals" />
            </div>
            <div className=" flex justify-center">
              <div className="grid my-5 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
                <PopularProduct product={photo_gift} />
              </div>
            </div>
          </div>
          {/* Trending Section */}
          {/* <div className="">
            <div className="border-b-2 flex justify-center">
              <ProductCategoryHeading heading="Trending" />
            </div>
            <div>
              <ProductCollection/>
            </div>
          </div> */}
          {/* <div className="">
            <MoreInfo photo={photo_gift} direction="flex-row" />
            <MoreInfo photo={photo_gift} direction="flex-row-reverse" />
            <MoreInfo photo={photo_gift} direction="flex-row" />
          </div>
          <Advertise image={image1} />
          <div className="w-full flex justify-center">
          <img 
          className="w-[95%]"
          src={Banner} alt="" />
          </div> */}
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default Home;
