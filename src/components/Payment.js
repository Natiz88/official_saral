import React, { useState } from "react";
import COD from "./../component/Images/PaymentProcess/Cod.png";
import Connectips from "./../component/Images/PaymentProcess/Connectips.png";
import Khalti from "./../component/Images/PaymentProcess/khalti.png";
import Banner from "./Banner";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <>
      <Banner text="Payment" />
      <div className="md:w-[90%] m-auto lg:m-0 lg:w-[65%] px-4 py-2 md:px-32 md:py-8">
        <h1 className="text-[20px] font-semibold">Select Payment Method</h1>
        <div className="flex gap-3 p-3">
          <input
            type="radio"
            value="COD"
            name="paymentOption"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <img src={COD} alt="" className="w-[15%]" />
          <input
            type="radio"
            value="Connectips"
            name="paymentOption"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <img src={Connectips} alt="" className="w-[16%]" />
          <input
            type="radio"
            value="Khalti"
            name="paymentOption"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <img src={Khalti} alt="" className="w-[20%]" />
        </div>
        <button className="py-2 px-4 bg-red-600 text-white mt-4 rounded-md">
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Payment;
