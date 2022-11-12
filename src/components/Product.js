import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "./../utils/URL";
import { useParams } from "react-router-dom";

import PriceList from "../components/PriceList";
import BulkOrder from "./BulkOrder";
import ModalPop from "./ModalPop";
import OrderDetails from "./OrderDetails";
import ProductCartDetails from "./ProductCartDetails";
import ProductDetails from "./ProductDetails";

import Info from "../assets/info.svg";

const Product = ({ isModalPop, setModalPop }) => {
  const [isOrderDetails, setIsOrderDetails] = useState(false);
  const [showBulkButton, setShowBulkButton] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  // const [showBulkPop, setShowBulkPop] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/products/${id}`)
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("p", product);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://192.168.100.17:8081/api/product/${id}/data`
      );
      setProduct(response?.data);
    } catch (err) {
      console.log("product", err);
    }
  };

  return (
    <div className=" flex flex-col bg-blue-50 px-[2rem] py-[2rem] gap-[1rem] lg:flex-row xl:px-[8rem] ">
      <div className="flex flex-col bg-white gap-[1rem] px-[2rem] py-[1rem] shadow-lg lg:flex-row lg:justify-between lg:w-[70%] xl:w-[80%]">
        {/* Products Details */}
        <div className=" flex flex-col items-center lg:w-[calc(48%)]">
          {/* <div className="flex flex-col gap-[1rem] bg-yellow-200"> */}
          <ProductDetails />
        </div>
        {/* Add to Cart Details */}
        <div className=" flex flex-col gap-[1rem] lg:w-[calc(47%)] ">
          {/* <div className="flex flex-col gap-[1rem] bg-red-200"> */}
          <ProductCartDetails
            product={product}
            setIsOrderDetails={setIsOrderDetails}
            setShowBulk={setShowBulk}
            setModalPop={setModalPop}
            setShowBulkButton={setShowBulkButton}
            showBulkButton={showBulkButton}
            setShowOrderDetails={setShowOrderDetails}
            setQuantity={setQuantity}
          />
        </div>
      </div>
      {/* Deal Details */}
      <div className="flex flex-col gap-[1rem] w-full xl:w-[30%]">
        <div className={!showOrderDetails ? "hidden" : "block"}>
          <OrderDetails isOrderDetails={isOrderDetails} quantity={quantity} />
        </div>
        <PriceList />
        <div>
          <button
            className={
              !showBulkButton
                ? "hidden"
                : "w-[140px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]"
            }
            onClick={() => setShowBulk(true)}
          >
            Bulk Order
          </button>
          <div className={!showBulk ? "hidden" : ""}>
            <BulkOrder setShowBulk={setShowBulk} />
          </div>
          {/* <div className={!showBulkPop ? "hidden" : ""}> */}
          <div>
            <ModalPop
              isModalPop={isModalPop}
              setModalPop={setModalPop}
              title="Info"
              des="Quantity range exceeded. Please place a bulk order."
              headImg={Info}
              btn1="Ok"
              onclickBtn1={() => setModalPop(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
