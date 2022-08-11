import React, { useState } from "react";
import { Timeline } from "rsuite";
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
      orderItem: Stationary_4,
      price: 500,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "02/07/2022",
      orderItem: Stationary_5,
      price: 1000,
    },
    {
      orderID: "djsnj76349",
      orderedDate: "15/06/2022",
      orderItem: Stationary_6,
      price: 100,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "30/06/2022",
      orderItem: Stationary_7,
      price: 700,
    },
    {
      orderID: "H39u54h",
      orderedDate: "10/07/2022",
      orderItem: Stationary_8,
      price: 2300,
    },
  ];
  return (
    <>
      <Advertise image={image1} />
      <div className="w-full h-[100vh] m-2 p-2 flex flex-col items-center justify-center">
        <div className="w-[80%] relative bg-gray-200 rounded-lg h-[100%] before:content-[''] before:bg-gray-400 before:absolute before:left-10 before:h-[100%] before:w-1 md:before:left-16 lg:before:left-20"></div>
        {/* <Timeline className="ml-[20px] ">
        <Timeline.Item 
        // dot={Stationary_8}
        >
          <p>March 1, 10:20</p>
          <p>Your order starts processing</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>March 1, 11:34</p>
          <p>The package really waits for the company to pick up the goods</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>March 1, 16:20</p>
          <p>[Packed]</p>
          <p>Beijing company has received the shipment</p>
        </Timeline.Item>
        <Timeline.Item 
        // dot={<Plane />}
        >
          <p>March 2, 06:12</p>
          <p>[In transit]</p>
          <p>Order has been shipped from Beijing to Shanghai</p>
        </Timeline.Item>
        <Timeline.Item 
        // dot={<Truck />}
        >
          <p>March 2, 09:20</p>
          <p>[In transit]</p>
          <p>
          Sended from the Shanghai Container Center to the distribution center
          </p>
        </Timeline.Item>
        <Timeline.Item 
        // dot={<User />}
        >
        <p>March 3, 14:20</p>
        <p>[Delivery]</p>
        <p>
        Shanghai Hongkou District Company Deliverer: Mr. Li, currently
        sending you a shipment
        </p>
        </Timeline.Item>
        <Timeline.Item
        // dot={<Check style={{ background: "#15b215", color: "#fff" }} />}
        >
        <p>March 3, 17:50</p>
        <p>[Received]]</p>
        <p>Your courier has arrived and the signer is the front desk</p>
        </Timeline.Item> 
      </Timeline> */}

        {/* <div>
        <Timeline>
          <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
          <Timeline.Item>
            16:28:43 Your order to be ready for delivery
          </Timeline.Item>
          <Timeline.Item>
            16:28:45 Your parcel has been out of the library
          </Timeline.Item>
          <Timeline.Item>
            02:34:41 Send to Shanghai Hongkou Company
            </Timeline.Item>
            <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
            </Timeline>
          </div> */}
      </div>
    </>
  );
}
export default Test;
