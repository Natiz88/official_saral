import React from "react";
import { useEffect } from "react";
import Banner from "./Banner";

function Delivery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Banner text="Delivery Terms" />
      <div className="w-4/5 m-auto py-12">
        <li className="list-decimal ml-4 mt-4 font-semibold text-[20px] text-gray-600">
          Selecting the best option for you to deliver your booked order
        </li>
        <p className="text-[15px] text-gray-500 mt-4">
          At Saral Print we are dedicated to delivering your booked order
          quickly and inexpensively. We offer a range of delivery and pickup
          options, so you can choose the shipping method that best meets your
          needs.
        </p>
        <br />

        <li className="text-[20px] text-gray-600 list-decimal ml-4 mt-4 font-semibold">
          When can I expect my order?
        </li>
        <p className="text-[15px] text-gray-500 mt-4">
          Your order will arrive based on the printing turnaround option and
          shipping options you chose. Printing turnaround time typically ranges
          from the same day to 7 business days depending on your selection and
          order. Turnaround time starts when you approve your order by making
          the payment and includes the printing and packaging time. Once the
          order is ready it will be shipped immediately.
          <br />
          For more information, please call or WhatsApp our customer service
          team @ +977-9802755603, Monday-Saturday (10 am-6 pm).
        </p>
        <br />

        <li className="text-[20px] text-gray-600 list-decimal ml-4 mt-4 font-semibold">
          Order Tracking
        </li>
        <p className="text-[15px] text-gray-500 mt-4">
          Kindly make sure to provide a valid email address or phone number when
          you order as you will receive an email / text message from Saral Print
          that contains your shipping tracking number once the order is shipped.
          With this number, you will have the access to monitor the journey of
          your package from the time it leaves our facility on its way to you.
        </p>
        <br />

        <li className="text-[20px] text-gray-600 list-decimal ml-4 mt-4 font-semibold">
          Pickup Order
        </li>
        <p className="text-[15px] text-gray-500 mt-4">
          If you live in the Itahari area, you can choose "Will Pick up My
          Order" and pick it up from our facility located in Itahari. By
          selecting "Will Pick up My Order" you do not need to pay the shipping
          charges when you place an order. Your order will be available for
          pickup when you receive an email notifying you that it's ready or you
          can also get a call from us.
        </p>
      </div>
    </div>
  );
}

export default Delivery;
