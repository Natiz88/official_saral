import React from "react";

function CustomerService() {
  const numbers = [9801919285, 9801919291, 9801919299, +97714593222];
  const time = " 6:00 AM - 9:00 PM";
  return (
    <div className="hidden md:flex justify-end items-center w-full h-[40px]">
      <div className="w-3/4 lg:w-1/2 flex">
        <h3 className="text-[14px] text-gray-700">
          <span className="font-semibold text-black">Customer Service: </span>
          {numbers.map((num) => ` ${num},`)},{time}
        </h3>
      </div>
    </div>
  );
}
export default CustomerService;
