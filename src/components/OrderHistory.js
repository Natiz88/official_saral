import React, { useState } from "react";
import Stationary_4 from "../assets/stationary_4.webp";
import Stationary_5 from "../assets/stationary_5.webp";
import Stationary_6 from "../assets/stationary_6.webp";
import Stationary_7 from "../assets/stationary_7.webp";
import Stationary_8 from "../assets/stationary_8.webp";
import image1 from "../assets/image1.jpg";
import Advertise from "./Advertise";

function Test() {
  const orderData = [
    {
      orderID: "8783r7387943",
      orderedDate: "24/07/2022",
      title: "Title 1",
      image: Stationary_4,
      price: 500,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "02/07/2022",
      image: Stationary_5,
      title: "Title 2",
      price: 1000,
    },
    {
      orderID: "djsnj76349",
      orderedDate: "15/06/2022",
      image: Stationary_6,
      title: "Title 3",
      price: 100,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "30/06/2022",
      image: Stationary_7,
      title: "Title 4",
      price: 700,
    },
    {
      orderID: "H39u54h",
      orderedDate: "10/07/2022",
      image: Stationary_8,
      title: "Title 5",
      price: 2300,
    },
    {
        orderID: "H39u54h",
        orderedDate: "10/07/2022",
        image: Stationary_8,
        title: "Title 5",
        price: 2300,
      },
      {
        orderID: "H39u54h",
        orderedDate: "10/07/2022",
        image: Stationary_8,
        title: "Title 5",
        price: 2300,
      },
      {
        orderID: "H39u54h",
        orderedDate: "10/07/2022",
        image: Stationary_8,
        title: "Title 5",
        price: 2300,
      },
  ];
  return (
    <>
      <Advertise image={image1} />
      <div className="w-full m-2 p-2 flex flex-col items-center justify-center">
        <div className="w-[80%] relative bg-gray-200 rounded-lg h-[100%] lg:w-[60%] before:content-[''] before:bg-gray-400 before:absolute before:left-10 before:h-[100%] before:w-1 md:before:left-16 lg:before:left-20">
          {orderData.map((orderItem) => {
            return (
              <div className="flex gap-3 ml-[1.15em] my-[1.5em] isolate md:ml-[2.53em] lg:ml-[3.6em]">
                <img
                  className="w-12 h-12 rounded-full"
                  src={orderItem.image}
                  alt="ordered item"
                />
                <div>
                  <p>{orderItem.orderedDate}</p>
                  <p>{orderItem.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Test;
