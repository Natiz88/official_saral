import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-10 w-full bg-pink-700 hidden lg:block">
      <div className=" w-[85%] m-auto h-6">
        <ol className=" flex justify-end items-center text-l text-white text-[14px] ">
          <li className=" h-6 pb-1 border-r-2 pr-6 ">
            <Link to="/history">Order History</Link>
          </li>
          <li className="h-6 pb-1 pl-6 pr-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="h-6 pb-1 px-3">FAQs</li>
          <li className="h-6 pb-1 px-3">Terms and Conditions</li>
          <li className="mr-10 pb-1 h-6 px-3 ">
            <Link to="contact">Contact Us</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
