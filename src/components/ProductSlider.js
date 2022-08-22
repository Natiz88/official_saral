import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

import BusinessCard1 from "../assets/BusinessCard1.png";
// import BusinessCard2 from "../assets/BusinessCard2.png";
import BusinessCard2 from "../assets/image3.jpg";

const ProductSlider = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div className=" border-2 md:w-[22rem] lg:w-[20rem] xl:w-[21rem]">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="flex justify-center items-center m-auto">
          <img src={BusinessCard1} alt="hello" className="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center m-auto">
          <img src={BusinessCard2} alt="hello" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
