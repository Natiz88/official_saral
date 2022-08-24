import React from "react";
// import COD from "./../component/Images/PaymentProcess/cod.png";
import Connectips from "./../component/Images/PaymentProcess/Connectips.png";
import Khalti from "./../component/Images/PaymentProcess/khalti.png";
import { useState, useEffect } from "react";
import CartItemData from "./CartItemData";
import Banner from "./Banner";

const Payment = () => {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [shipping, setShipping] = useState(0.0);
  const [tax, setTax] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [shippingAddressPrice, setShippingAddressPrice] = useState(0);

  const address = [{ address: "itahari", mobile: "98099000", shipping: 600 }];

  useEffect(() => {
    let val = 0;
    let taxamount = 0;
    CartItemData.forEach((items) => (val += items.total));
    CartItemData.forEach((items) => (taxamount += (13 / 100) * items.total));
    let numberOfItems = CartItemData.length;
    console.log(address.shipping);
    const totalshipping = numberOfItems * shippingAddressPrice;
    setShipping(totalshipping);
    setTax(taxamount);
    setTotalCost(val);
    setNetTotal(shipping + tax + totalCost);
  });
  // }, [totalMRP, CartItemData]);

  return (
    <div className="w-full">
      <Banner text=" Checkout" />

      {/* SubMain Div */}
      <div className="bg-white  p-3 flex flex-col md:flex-row gap-8 shadow-lg border-gray-200">
        {/* first Div */}
        <div className="flex flex-col gap-2 md:w-1/2 border-2 border-gray-200 p-4 shadow-lg">
          <div>
            <h1 className="font-semibold text-xl text-red-500 p-2">
              Shipping & Billing
            </h1>
            <div className="bg-slate-400 h-[1px]" />
          </div>
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
            <p className="text-xs font-semibold text-gray-500">
              Transportation cost will be charged on the basis of the weight,
              when delivered outside Provence.
            </p>
            <div className="border p-3 mt-3">
              <form className="flex flex-col">
                <label htmlFor="city">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="mt-1 border-b-2 outline-none border-gray-300 pl-1"
                />
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
                <button className="bg-blue-500 mt-5 w-[70%] md:w-1/2 rounded-[5px] lg:w-1/3 py-2 m-auto text-white font-bold">
                  {" "}
                  Save
                </button>
              </form>
            </div>

            {/* <button className="mt-2 text-red-500">
              + Add new address
            </button> */}
          </div>
          <div className="p-2">
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
              alt="" className="w-[15%]" />
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
          </div>
          <div className="w-full border-2 border-gray-200">
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
          </div>
          <div className="flex justify-end">
            <input
              type="button"
              value="Confirm Order"
              className=" bg-red-500 rounded  w-[9rem] h-[2rem] cursor-pointer text-white"
            />
          </div>
        </div>

        {/* Card Items  */}
        <div className="p-2 flex flex-col md:w-1/2 font-semibold">
          Cart Items
          <div className="flex border-2 flex-col gap-[1rem] max-h-[460px] overflow-auto">
            {CartItemData.map((items) => {
              return (
                <div className="h-[150px] flex flex-col shadow-xl lg:flex-row border-2 border-gray-200">
                  <div className="flex justify-start h-[40%] md:h-full md:w-[30%] ">
                    <img
                      src={items.image}
                      alt="cardImg"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className=" flex w-full md:w-[80] items:center">
                    <div className="w-[80%]">
                      <h1 className="font-bold text-[16px] pl-5 lg:pt-[35px]">
                        {items.productname}
                      </h1>
                      <div className="flex justify-around text-[14px] font-normal">
                        <div className="flex flex-col justify-center items-center">
                          <h1>Quantity</h1>
                          <p className="pt-2">{items.quantity}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1>Discount</h1>
                          <p className="pt-2">{items.discount}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1>Additional Cost</h1>
                          <p className="pt-2">{items.additionalCost}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1>Sub Total</h1>
                          <p className="pt-2">{items.total}</p>
                        </div>
                      </div>
                    </div>

                    <button className="text-red-500 w-[20%] overflow-hidden lg:w-[20%]">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-2 shadow-xl">
            <p className="text-red-500">Card Total: Rs.770.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
