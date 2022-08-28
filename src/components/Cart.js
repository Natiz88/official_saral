import React from "react";
// import COD from "./../component/Images/PaymentProcess/cod.png";
import Connectips from "./../component/Images/PaymentProcess/Connectips.png";
import Khalti from "./../component/Images/PaymentProcess/khalti.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { CartItemData } from "./CartItemData";
import OrderSummary from "./OrderSummary";

const Payment = () => {
  // const CartItemData = {
  //   cart_amount: 1500,
  //   cart_tax: 113,
  //   cart_shipping: 100,
  //   cart_net_amount: 1513,
  //   cart_item: [
  //     {
  //       id: 1,
  //       image: Khalti,
  //       productname: "Pin Badge",
  //       quantity: 5,
  //       discount: 0,
  //       additionalCost: 0,
  //       total: 100,
  //     },
  //     {
  //       id: 2,
  //       image: Khalti,
  //       productname: "Pin Badge",
  //       quantity: 5,
  //       discount: 0,
  //       additionalCost: 0,
  //       total: 100,
  //     },
  //     {
  //       id: 1,
  //       image: Khalti,
  //       productname: "Pin Badge",
  //       quantity: 5,
  //       discount: 0,
  //       additionalCost: 0,
  //       total: 100,
  //     },
  //     {
  //       id: 2,
  //       image: Khalti,
  //       productname: "Pin Badge",
  //       quantity: 5,
  //       discount: 0,
  //       additionalCost: 0,
  //       total: 100,
  //     },
  //   ],
  // };

  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [totalCost, setTotalCost] = useState(0);
  // const [shipping, setShipping] = useState(0.0);
  // const [tax, setTax] = useState(0);
  // const [netTotal, setNetTotal] = useState(0);
  // const [shippingAddressPrice, setShippingAddressPrice] = useState(0);

  const address = [{ address: "itahari", mobile: "98099000", shipping: 600 }];

  // useEffect(() => {
  //   let val = 0;
  //   let taxamount = 0;
  //   CartItemData.forEach((items) => (val += items.total));
  //   CartItemData.forEach((items) => (taxamount += (13 / 100) * items.total));
  //   let numberOfItems = CartItemData.length;
  //   console.log(address.shipping);
  //   const totalshipping = numberOfItems * shippingAddressPrice;
  //   setShipping(totalshipping);
  //   setTax(taxamount);
  //   setTotalCost(val);
  //   setNetTotal(shipping + tax + totalCost);
  // });
  // }, [totalMRP, CartItemData]);

  return (
    <>
      <Banner text=" Cart" />
      <div className="w-full flex flex-col lg:flex-row md:p-8 relative justify-between">
        {/* Card Items  */}
        <div className="p-2 md:p-0 flex flex-col lg:w-2/3 font-semibold text-[20px]">
          <div className="flex border-2 flex-col">
            {CartItemData.cart_item.map((items) => {
              return (
                <div className="h-[150px] flex flex-col shadow-xl md:flex-row mb-2 border-2 border-gray-200">
                  <div className="flex justify-start h-[40%] md:h-full md:w-[30%] ">
                    <img
                      src={items.image}
                      alt="cardImg"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className=" flex w-full md:w-[80] items:center">
                    <div className="w-[80%]">
                      <h1 className="font-bold text-[16px] pl-5 md:pt-[35px]">
                        {items.productname}
                      </h1>
                      <div className="flex justify-around text-[14px] font-normal">
                        <div className="flex flex-col justify-center items-center w-[20%]">
                          <h1>Quantity</h1>
                          {/* <span className="flex justify-between items-center w-full">
                            <AiOutlinePlus className="cursor-pointer" />
                            <p>{items.quantity}</p>
                            <AiOutlineMinus className="cursor-pointer" />
                          </span> */}
                          <input
                            type="number"
                            className="w-4/5 border-2 border-gray-300 outline-none"
                            defaultValue={0}
                          />
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

                    <span className="text-red-500 w-[20%] overflow-hidden lg:w-[15%] flex items-center justify-around">
                      <GrView className="cursor-pointer" />
                      <AiFillDelete className="cursor-pointer" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="flex justify-end mt-2 shadow-xl">
            <p className="text-red-500">Card Total: Rs.770.00</p>
          </div> */}
        </div>
        <div className="w-full lg:w-[30%] p-2 md:p-0 mt-4 lg:mt-0">
          <OrderSummary />
          <div className="w-full flex justify-end">
            <Link to="/checkout">
              <button className=" bg-red-500 rounded py-2 px-4 cursor-pointer text-white mt-4 ">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
