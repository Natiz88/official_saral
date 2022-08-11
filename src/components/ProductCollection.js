
import React from "react";

import ProductCard from "./ProductCard";
import Advertise from "./Advertise";
import image1 from "../assets/image1.jpg";
import BusinessCard from "../assets/photo_gift.webp";
import Cap from "../assets/cap.webp";
import T_Shirt from "../assets/t_shirt.webp";
import Stationary_1 from "../assets/stationary_1.webp";
import Stationary_2 from "../assets/stationary_2.webp";
import Stationary_3 from "../assets/stationary_3.webp";
import Stationary_4 from "../assets/stationary_4.webp";
import Stationary_5 from "../assets/stationary_5.webp";
import Stationary_6 from "../assets/stationary_6.webp";
import Stationary_7 from "../assets/stationary_7.webp";
import Stationary_8 from "../assets/stationary_8.webp";
import Stationary_9 from "../assets/stationary_9.webp";
const ProductCollection = () => {
  const products= [
    {
      id: 1,
      image: BusinessCard,
      title: "Photo Frames",
      price: 177,
    },
    {
      id: 2,
      image: Cap,
      title: "Caps",
      price: 177,
    },
    {
      id: 3,
      image: T_Shirt,
      title: "T-Shirt",
      price: 177,
    },
    {
      id: 4,
      image: Stationary_4,
      title: "Stationary",
      price: 177,
      // items: [Stationary_1, Stationary_2, Stationary_3, Stationary_4, Stationary_5, Stationary_6, Stationary_7, Stationary_8, Stationary_9]
    },
    {
        id: 5,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 6,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 7,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 8,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 9,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 10,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 11,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      },
      {
        id: 12,
        image: BusinessCard,
        title: "Business Cards",
        price: 177,
      }
  ];
  return (
    <>
      <div className="w-ful p-4 flex flex-col gap-2 md:px-10 lg:px-20 xl:px-[13rem] ">
        {/* <div className=" w-full mb-5"><Advertise image={image1} /></div> */}
        <div className=" w-full grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
          {products.map((products) => {
            return (
              <div className="">
                <ProductCard
                  key={products.id}
                  products={products}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCollection;