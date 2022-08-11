import React from "react";

function PopularProduct(props) {
  return (
    <div className={`w-52 text-center h-full duration-100 overflow-hidden p-4 mb-3 flex flex-col items-center hover:shadow-md hover:h-full md:w-64 md:h-full lg:h-full`}>
      <img className="h-full w-full rounded" src={props.product} alt="" srcset="" />
      <div className="">
        <p className="text-sky-600 text-xl font-semibold md:text-[1rem]]">
          ID Card PVC Matte
        </p> 
        <div className="">
          <p className="text-[0.8rem] text-gray-600 font-normal md:text-[0.75rem]">
            Make a perfect piece of PVC card to display...
          </p>
          <p className="text-sky-600 font-semibold text-2xl mt-2">Rs 56</p>
          <div className="flex gap-3 justify-center ">
            <strike className="text-gray-400">Rs 80</strike>
            <p className="text-red-600 font-bold">30% Off</p>
          </div>

          {/* <p className="text-gray-400 mb-1 font-semibold text-[0.8rem] md:text-[1rem]">
            Minimum order 100pcs
          </p> */}
          <button className="bg-red-600 rounded-md w-32 text-[0.9rem] text-stone-50  md:text-lg p-1">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;
