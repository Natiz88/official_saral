import React, { useState } from "react";

import Product from "./Product";
import Advertisement from "./Advertisement";

import BusinessCard from "../assets/Business-Card.jpg";

const Page = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      image: BusinessCard,
      title: "Business Cards",
      price: 177,
    },
    {
      id: 2,
      image: BusinessCard,
      title: "Business Cards",
      price: 177,
    },
    {
      id: 3,
      image: BusinessCard,
      title: "Business Cards",
      price: 177,
    },
    {
      id: 4,
      image: BusinessCard,
      title: "Business Cards",
      price: 177,
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
  ]);
  return (
    <>
      <div className="w-full bg-slate-800 p-4 flex flex-col gap-2 md:px-10 lg:px-20 xl:px-[13rem] ">
        <div className="h-[10rem] w-full bg-slate-400"><Advertisement/></div>
        <div className=" bg-red-400 h-[30rem] w-full  grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:gap-4">
          {products.map((products) => {
            return (
              <div className="bg-green-400 ">
                <Product
                  key={products.id}
                  setproducts={setproducts}
                  products={products}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default Page;
