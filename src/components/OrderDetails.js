import React from "react";
import { useState } from "react";
import ProductCartData from "./ProductCartData";

const OrderDetails = ({ isOrderDetails, quantity }) => {
  const initialTotalWeight = ProductCartData.weight * quantity;
  const [totalWeight, setTotalWeight] = useState();
  // setTotalWeight(initialTotalWeight);
  // setTotalWeight(ProductCartData.weight * quantity);
  const kg = parseInt((totalWeight / 1000).toString().split(".")[0]);
  const calGram = (totalWeight) => {
    if (totalWeight < 1000) {
      return totalWeight;
    } else {
      return parseInt((totalWeight / 1000).toString().split(".")[1]) * 10;
    }
  };
  const gram = calGram(totalWeight);
  const newTotalWeight = `${kg} kg ${gram} grams`;
  const [orderData, setOrderData] = useState({
    time: "0 day 8 hours",
    // totalWeight: newTotalWeight,
    // totalWeight: `${kg} kg ${gram} grams`,
    // totalWeight issue
    price: 200,
    discount: 0,
    additionalCost: 0,
    totalPrice: 200,
  });
  // setOrderData({ ...orderData, totalWeight: `${kg} kg ${gram} grams` });
  console.log(`${totalWeight} totalWeight`);
  // console.log(`${kg} kg`);
  // console.log(`${gram} gram`);
  // console.log(`${kg} kg ${gram} grams`);
  // console.log(newTotalWeight + "new");

  return (
    <div className="flex flex-col shadow-lg">
      <div className="bg-[#E5113C] text-center text-white text-[26px]">
        Order Details
      </div>
      <div
        className={!isOrderDetails ? "px-[2rem] py-[1rem] bg-white" : "hidden"}
      >
        Quantity must be greater than minimum quantity.
      </div>
      <div
        className={
          !isOrderDetails
            ? "hidden"
            : "bg-white flex flex-col gap-[1rem] px-[2rem] py-[1rem]"
        }
      >
        <div className="flex-flex-col gap-[0.5rem]">
          <h3 className="font-semibold">Time</h3>
          <p className="text-sm">{quantity}</p>
          <h3 className="font-semibold">Total Weight</h3>
          <p className="text-sm">{orderData.totalWeight}</p>
        </div>
        <div className="flex-flex-col gap-[0.5rem]">
          <h3 className="font-semibold">Price</h3>
          <p className="text-sm">Rs. {orderData.price.toFixed(2)}</p>
          <h3 className="font-semibold">Discount (0%)</h3>
          <p className="text-sm">Rs. {orderData.discount.toFixed(2)}</p>
          <h3 className="font-semibold">Additional Cost</h3>
          <p className="text-sm">Rs. {orderData.additionalCost.toFixed(2)}</p>
          <h3 className="font-semibold">Total Price</h3>
          <p className="text-sm">Rs. {orderData.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
