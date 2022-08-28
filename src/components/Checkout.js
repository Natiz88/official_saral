import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItemData from "./CartItemData";
import Khalti from "./../component/Images/PaymentProcess/khalti.png";
import { useSelector } from "react-redux";

import Banner from "./Banner";
import OrderSummary from "./OrderSummary";

function Checkout() {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState(true);
  const [address, setAddress] = useState("");

  const user = useSelector((state) => state.login.userDetails);
  console.log("checkout", user);

  const city = ["itahari", "dharan", "biratnagar"];

  return (
    <div className="w-full">
      <Banner text=" Checkout" />

      {/* SubMain Div */}
      <div className="bg-white  p-3 flex flex-col lg:flex-row gap-8 shadow-lg border-gray-200">
        {/* first Div */}
        <div className="flex flex-col gap-2 lg:w-2/3 border-2 border-gray-200 p-4 shadow-lg">
          <div>
            <h1 className="font-semibold text-red-500 p-2 text-[20px]">
              Shipping Address
            </h1>

            <div className="bg-slate-400 h-[1px]" />
          </div>
          <div></div>
          <div className="flex gap-8 mt-3">
            <button
              className={
                !active
                  ? "border border-red-500 rounded p-3"
                  : "border border-gray-500 rounded p-3"
              }
              onClick={() => {
                setActive(!active);
                setModal(true);
              }}
            >
              Home Delivery
            </button>
            <button
              className={
                active
                  ? "border border-red-500 rounded p-3"
                  : "border border-gray-500 rounded p-3"
              }
              onClick={() => {
                setActive(!active);
                setModal(false);
              }}
            >
              Pick from our Store
            </button>
          </div>
          <div className={!active ? "p-2 mt-5" : "hidden"}>
            <h1 className="font-normal mb-1 ">Shipping Address</h1>
            <div className="w-full flex">
              <input
                type="radio"
                checked={defaultAddress}
                onClick={() => setDefaultAddress(true)}
                className="text-green-400"
              />
              <p className=" ml-4" onClick={() => setDefaultAddress(true)}>
                {user.address},{user.address}
              </p>
            </div>
            <button
              onClick={() => setDefaultAddress(false)}
              className="py-2 px-4 bg-red-600 text-white rounded-md mt-4"
            >
              Deliver to Different Address
            </button>

            {!defaultAddress && (
              <div className="border p-3 mt-3">
                <form className="flex flex-col">
                  <label htmlFor="city">
                    City<span className="text-red-500">*</span>
                  </label>
                  {/* <input
                  type="text"
                  name=""
                  id=""
                  className="mt-1 border-b-2 outline-none border-gray-300 pl-1"
                /> */}
                  <select className="h-[35px] bg-white border-b-2 border-gray-300">
                    <option value=""></option>
                    {city.map((c) => (
                      <option value={c}>{c}</option>
                    ))}
                  </select>
                  <label className="mt-2" htmlFor="street">
                    Street Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mt-1 border-b-2 outline-none border-gray-300 pl-1"
                  />
                  <label className="mt-2" htmlFor="number">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="mt-1 border-b-2 outline-none border-gray-300 pl-1"
                  />
                  <p className="text-xs font-normal text-gray-500">
                    Transportation cost will be charged on the basis of the
                    weight
                  </p>
                </form>
              </div>
            )}

            {/* <button className="mt-2 text-red-500">
            + Add new address
          </button> */}
          </div>
          {/* <div className="p-2">
            <h1 className="font-bold mb-2">
              Payment Options <span className="text-red-500">*</span>
            </h1>
            <div className="flex gap-3 p-3">
              <input
                type="radio"
                value="COD"
                name="paymentOption"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <img
                // src={COD}
                alt=""
                className="w-[15%]"
              />
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
          </div> */}
          {/* <div className="w-full border-2 border-gray-200">
            <p className="w-full flex justify-between p-2 border-gray-200 font-bold">
              Total Cost<span className="font-normal">Rs.{totalCost}</span>
            </p>
            <p className="w-full flex justify-between p-2 border-gray-200 font-bold">
              Shipping Cost per Item{" "}
              <span className="font-normal">Rs.{shipping}</span>
            </p>
            <p className="w-full flex justify-between p-2 border-gray-200 font-bold">
              Tax 13%<span className="font-normal">Rs.{tax}</span>
            </p>
            <p className="w-full flex justify-between p-2 border-gray-200 font-bold">
              Net Total<span className="font-normal">Rs.{netTotal}</span>
            </p>
          </div> */}
        </div>
        <div className="w-full lg:w-[30%]">
          <OrderSummary />
          <div className="w-full flex justify-end">
            <Link to="/payment">
              <button className="bg-red-500 mt-5 rounded-[5px] py-2 px-4 text-white">
                {" "}
                Proceed To Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
