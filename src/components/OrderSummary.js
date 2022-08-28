import React from "react";
import { CartItemData } from "./CartItemData";

function OrderSummary() {
  return (
    <>
      <div className="w-full min-h-[180px] border-2 border-gray-200">
        <h1 className="text-[20px] mx-3 my-2 font-semibold">Order Summary</h1>
        <p className="w-full flex justify-between p-2 border-gray-200 font-normal">
          Total Cost
          <span className="font-normal">Rs.{CartItemData.cart_amount}</span>
        </p>
        <p className="w-full flex justify-between p-2 border-gray-200 font-normal">
          Shipping Cost{" "}
          <span className="font-normal">Rs.{CartItemData.cart_shipping}</span>
        </p>
        <p className="w-full flex justify-between p-2 border-gray-200 font-normal">
          Tax<span className="font-normal">Rs.{CartItemData.cart_tax}</span>
        </p>
        <div className="w-full h-[40px] px-3 flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-[70%] h-full border-2 px-2 border-gray-200 outline-none"
          />
          <button className="w-[25%] h-full  bg-sky-600 text-white rounded-md">
            Apply
          </button>
        </div>
        <p className="w-full flex justify-between p-2 border-gray-200 font-normal">
          Discount
          <span className="font-normal">Rs.{CartItemData.cart_discount}</span>
        </p>
        <p className="w-full flex justify-between p-2 border-gray-200 font-semibold">
          Net Amount
          <span className="font-bold text-red-600">
            Rs.{CartItemData.cart_net_amount}
          </span>
        </p>
      </div>
    </>
  );
}

export default OrderSummary;
