import React from "react";
// import NavLogo from './assets/NavLogo.jpeg'
// import Modal from './Modal'
// import LoginOrSignup from './LoginOrSignup'
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";

const Nav = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <div className="mx-auto grid-rows-3 fixed bg-white w-full">
        <div className="flex gap-4 bg-blue-600">
          <Link to="/resetpassword" className="border-black border p-1">Reset</Link>
          <Link to="/page" className="border-black border p-1">Page</Link>
          <Link to="contact" className="border-black border p-1">Contact</Link>
          <Link to="/hiredesigner" className="border-black border p-1">Hire Desginer</Link>
          {/* <Link to="">Terms &amp; Condition</Link>
                <Link to="">Contact Us</Link> */}
        </div>
        <div className="grid-row-2">
          <div className="relative">
            {/* <p className="absolute right-0 h-10">
              Customer service: 9811017093, 9817303073, 9817012085
            </p> */}
          </div>
          <div className="grid grid-cols-3 gap-2">
          <Link to="/home">
          <img className="max-w-xs" src="" alt="Photo" />
        </Link>
            {/* <div className="flex justify-center items-center relative bg-slate-400">
              <input type="text" placeholder="Search Product ..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div> */}
            {/* <Modal/> */}
            {/* <LoginOrSignup/> */}
            <div>
              <button
                className="bg-blue-700 col text-white p-1"
                onClick={() => setLoginOpen(true)}
              >
                LogIn or Create Account
              </button>
              {isLoginOpen === true && (
                <ModalLogin setLoginOpen={setLoginOpen} />
              )}
            </div>
          </div>
        </div>
        <div className="bot"></div>
      </div>
      {/* <Modal/>
        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />} */}
    </>
  );
};

export default Nav;
