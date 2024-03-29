import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/sweater.jpg";

function ProductDescription({ products }) {
  console.log("prodss", products);
  return (
    <>
      <div
        className={`w-[260px] h-[420px] group relative cursor pointer border-2 rounded-[5px] text-center overflow-hidden m-4 mb-3 flex flex-col items-center`}
      >
        <img
          className="w-full scale-[1.9] cursor-pointer mt-20 rounded group-hover:scale-[2.1] transition-all ease-in"
          src={
            products.image ||
            "https://api.printsewa.com.np/Files/Images/Products/Business%20card-single%20side.png"
          }
          alt=""
          srcset=""
        />
        <div className="w-full h-1/2 absolute top-[50%] bg-[rgba(255,255,255,0.8)]">
          <p className="text-gray-600 text-[20px] font-semibold pt-3">
            {products.name}
          </p>
          <div className="">
            <p className="text-[15px] h-[50px] px-2 pt-1 overflow-hidden text-gray-600 font-light">
              {products.desc}
            </p>
            <p className="text-sky-600 font-semibold text-[18px] mt-1">
              Rs. {products.prices[0].indPrice}
            </p>
            <div className="flex gap-3 justify-center text-[14px]">
              {/* <strike className="text-gray-400">Rs 80</strike> */}
              <p className="text-red-600 font-bold">
                {products.prices[0].indDiscount}% Off
              </p>
            </div>

            {/* <p className="text-gray-400 mb-1 font-semibold text-[0.8rem] md:text-[1rem]">
            Minimum order 100pcs
          </p> */}
            <Link to="/product/1">
              <button className="mt-3 bg-red-500 rounded-md w-32 text-[15px] text-stone-50 p-1">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
