import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Account from "../assets/account.svg";
import Menu from "../assets/menu-icon.svg";
import Close from "../assets/close-icon.svg";
import Login from "./Login";
import CustomerService from "./CustomerService";
import logo from "./../component/Images/Logo/logo.png";

function Header(props) {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div div className="w-full h-[60px] sm:flex items-center bg-white">
      <div className="sticky w-full sm:w-[80%] m-auto top-0 z-10 bg-red-400">
        <CustomerService />
        <div className="flex justify-center items-center flex-col gap-2 w-full border-b-2 pb-1 md:gap-3 lg:flex-row">
          {/*Header Logo section  */}
          <div className="flex items-center justify-between w-full relative">
            <Link to="/">
              <img className="h-10 md:h-11 xl:h-12 " src={logo} alt="logo" />
            </Link>
            {/* Menu for small device */}
            <button
              onClick={(e) => {
                setToggleMenu(!toggleMenu);
              }}
              className="mr-4 transition bg-sky-400 rounded-full flex items-center justify-center lg:hidden"
            >
              <img
                className="w-6 p-2 bg-gray-300 text-center rounded-full"
                src={toggleMenu ? Menu : Close}
              />
            </button>
            <div
              className={
                toggleMenu
                  ? "hidden"
                  : "absolute backdrop-blur-lg rounded-md p-5 w-[60%] right-4 top-12 md:w-[50%] md:top-14 text-[1.2rem] lg:hidden"
              }
            ></div>
          </div>
          {/* Login button/User Icon */}
          <div
            className={
              !token
                ? "w-full flex flex-col items-center md:flex-row justify-center"
                : "mb-1 w-full flex justify-center items-center md:flex-row md:gap-36 lg:gap-1"
            }
          >
            {/* Search bar */}
            <input
              className="h-10 w-4/5 mx-4 border-2 radius px-2 rounded md:w-3/5 focus:outline-none"
              type="search"
              placeholder="Search Product"
            />
            {/* <Link to="/login">
            <div>
              {!token ? (
                <button
                  className="bg-sky-600 rounded-md h-10 min-w-min p-2 pb-9 text-stone-50 text-lg md:text-lg lg:px-5"
                  onClick={() => {}}
                >
                  LogIn or Create Account
                </button>
              ) : (
                <Link to={"/user"}>
                  <img
                    className="w-[3em] bg-gray-100 p-1 rounded-lg"
                    src={Account}
                    alt="account"
                  />
                </Link>
              )}
            </div>
          </Link> */}
            <div>
              <button
                className="bg-sky-600 rounded-md h-10 min-w-min p-2 pb-9 text-stone-50 text-lg md:text-lg lg:px-5"
                onClick={() => setLoginOpen(true)}
              >
                LogIn or Create Account
              </button>
              {isLoginOpen === true && <Login setLoginOpen={setLoginOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
