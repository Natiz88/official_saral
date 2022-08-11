import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className=" w-full h-10 bg-pink-700 hidden lg:block">
      <ol className=" flex justify-end text-l text-white font-semibold ">
        <li className=" h-6 mt-2 pb-1 border-r-2 pr-6 ">
          <Link to="/history">Order History</Link>
        </li>
        <li className="h-6 mt-2 pb-1 pl-6 pr-3">
          <Link to="/about">About Us</Link>
        </li>
        <li className="h-6 mt-2 pb-1 px-3">FAQs</li>
        <li className="h-6 mt-2 pb-1 px-3">Terms and Conditions</li>
        <li className="mr-10 mt-2 pb-1 h-6 px-3 ">
          <Link to="contact">Contact Us</Link>
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
