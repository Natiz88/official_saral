import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineLogin } from "react-icons/hi";
import { GrUserNew } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPermIdentity } from "react-icons/md";
import { AiOutlinePrinter } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import logo from "./../component/Images/Logo/logo.png";
import CustomerService from "./CustomerService";
import Login from "./Login";
// import MobileMenu from "./MobileMenu";

function Header(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  // const [isToggleActive, setToggleActive] = useState(false);
  // const toggleBurger = () => {
  //   setToggleActive(!isToggleActive);
  // };

  return (
    <>
      <CustomerService />
      <div className="sticky z-50 top-0 sm:top-6 shadow-lg h-[150px] sm:h-[70px] bg-white">
        <nav className="flex flex-col pt-1 items-center justify-around sm:flex-row sm:justify-between relative w-full sm:w-4/5 sm:m-auto h-full sm:h-[60px] bg-white text-sm sm:text-md md:text-lg lg:text-xl">
          <div className="w-11/12 flex justify-between items-center sm:w-1/5 h-[45%] sm:h-full">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-11 xl:h-12  focus:outline-none"
              />
            </Link>
            {/* <i class="sm:hidden cursor-pointer" onClick={toggleBurger}>
              {!isToggleActive ? (
                <GiHamburgerMenu className="text-[25px]" />
              ) : (
                <ImCross />
              )}
            </i> */}
            <div
              onClick={props.handler}
              className="flex relative sm:hidden cursor-pointer w-[10%] h-1/5 mr-4 flex-col justify-between items-center"
            >
              <span
                className={
                  props.isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                    : "rotate-45 translate-y-1.5 block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                }
              ></span>
              <span
                className={
                  props.isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 delay-500 ease-in-out"
                    : "hidden h-0.5 w-6 bg-current transform transition duration-700 delay-200 ease-in-out"
                }
              ></span>
              <span
                className={
                  props.isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                    : "-rotate-45 -translate-y-1.5 h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                }
              ></span>
            </div>
          </div>
          <div className="flex items-center w-[80%] sm:w-[40%] h-[28%] sm:h-full relative sm:ml-[10%]">
            <input
              type="text"
              className="h-full sm:h-[65%] w-full m-auto sm:w-full pl-8 text-[16px] relative rounded-[10px] bg-slate-200 focus:outline-none"
              placeholder="search a product..."
            />
            <i className="absolute right-2 text-[15px] sm:text-[20px] cursor-pointer">
              <AiOutlineSearch />
            </i>
          </div>
          {isLoggedIn ? (
            <div className="w-full sm:w-[25%] h-[25%] text-[15px] sm:h-full flex items-center justify-center sm:justify-around">
              <div className="w-[25%]  px-6 py-1 sm:w-[40%] flex justify-around items-center rounded-sm cursor-pointer sm:border-2 border-black">
                <button
                  className=" text-black "
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
                <HiOutlineLogin className="text-[18px]" />
              </div>
              <div className="w-[25%] px-4 py-1 sm:w-[40%] ml-2 sm:ml-0 flex justify-around items-center rounded-sm cursor-pointer sm:border-2 border-black">
                <button
                  className=" text-black "
                  onClick={() => setLoginOpen(true)}
                >
                  Register
                </button>
                <GrUserNew className="text-[18px]" />
              </div>
              {/* <div className="w-[25%] sm:w-[40%] px-6 py-1flex justify-around items-center rounded:sm cursor-pointer border-2 border-black">
                <button
                  className="text-[16px] text-black sm:block"
                  onClick={toggleBurger}
                >
                  Register
                </button>
                <GrUserNew />
              </div> */}
            </div>
          ) : (
            <div className="w-full sm:w-[30%] h-[25%] sm:h-full sm:ml-8 text-[15px] text-gray-600 flex items-center justify-around">
              <div className="hidden w-[30%] sm:flex justify-around items-center rounded:sm">
                <TbTruckDelivery className="text-[18px]" />
                <button>Track Order</button>
              </div>
              <div className="hidden w-[20%] bg-blue-400 text-white sm:flex justify-center items-center rounded:sm">
                <AiOutlinePrinter className="text-[18px]" />
                <span className="ml-1">[0]</span>
              </div>
              <div className="w-[30%] sm:w-[40%] flex justify-around items-center rounded:sm">
                <MdPermIdentity className="text-[18px]" />
                <button>Name profile</button>
                <IoIosArrowDown className="text-[18px]" />
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* <MobileMenu isMenuOpen={isToggleActive} /> */}
      {/* <Links isToggleActive={isToggleActive} /> */}
      {isLoginOpen === true && <Login setLoginOpen={setLoginOpen} />}
    </>
  );
}

export default Header;
