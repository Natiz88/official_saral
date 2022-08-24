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
import NavbarBottom from "./NavbarBottom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./../Redux/LoginReducer";
// import MobileMenu from "./MobileMenu";

function Header({ handler, isMenuOpen }) {
  const [showProfile, setShowProfile] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.userDetails);
  console.log("user", user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("authentication");
    localStorage.removeItem("user");
  };

  // const [isToggleActive, setToggleActive] = useState(false);
  // const toggleBurger = () => {
  //   setToggleActive(!isToggleActive);
  // };

  return (
    <>
      <CustomerService />
      <div className="sticky z-50 top-0  border-gray-200 border-b-2 h-[150px] md:h-[70px] bg-white">
        <nav className="flex flex-col pt-1 items-center justify-around md:flex-row md:justify-between relative w-full md:w-[90%] lg:w-[85%] md:m-auto h-full md:h-[60px] bg-white text-md md:text-md md:text-lg lg:text-xl">
          <div className="w-11/12 flex justify-between items-center md:w-[25%] h-[45%] md:h-full">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-11 xl:h-12  focus:outline-none"
              />
            </Link>
            {/* <i class="md:hidden cursor-pointer" onClick={toggleBurger}>
              {!isToggleActive ? (
                <GiHamburgerMenu className="text-[25px]" />
              ) : (
                <ImCross />
              )}
            </i> */}
            <div
              onClick={handler}
              className="flex relative md:hidden cursor-pointer w-[10%] h-1/5 mr-4 flex-col justify-between items-center"
            >
              <span
                className={
                  !isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                    : "rotate-45 translate-y-1.5 block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                }
              ></span>
              <span
                className={
                  !isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 delay-500 ease-in-out"
                    : "hidden h-0.5 w-6 bg-current transform transition duration-700 delay-200 ease-in-out"
                }
              ></span>
              <span
                className={
                  !isMenuOpen
                    ? "block h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                    : "-rotate-45 -translate-y-1.5 h-0.5 w-6 bg-current transform transition duration-700 ease-in-out"
                }
              ></span>
            </div>
          </div>
          <div className="flex items-center w-[80%] md:w-[40%] lg:w-[40%] h-[28%] md:h-full relative md:ml-[8%] lg:ml-[10%]">
            <input
              type="text"
              className="h-full md:h-[65%] lg:pl-8 w-full m-auto md:w-full pl-8 text-[16px] relative rounded-[10px] bg-slate-200 focus:outline-none"
              placeholder="search a product..."
            />
            <i className="absolute right-2 text-[15px] md:text-[20px] cursor-pointer">
              <AiOutlineSearch />
            </i>
          </div>
          {!isLoggedIn ? (
            <div className="w-full md:w-[35%] lg:w-[20%] h-[25%] text-[15px] md:h-full flex items-center justify-center md:justify-around">
              <div className="w-[30%] px-6 py-1 md:w-[45%] flex justify-between items-center rounded-md cursor-pointer">
                <button
                  className=" text-black "
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
                <HiOutlineLogin className="text-[18px]" />
              </div>
              <div className="w-[25%] px-4 py-1 md:w-[45%] ml-2 md:ml-0 flex justify-around items-center rounded-md cursor-pointer">
                <Link to="/signup">
                  <button className=" text-black ">Register</button>
                </Link>
                <GrUserNew className="text-[16px]" />
              </div>
              {/* <div className="w-[25%] md:w-[40%] px-6 py-1flex justify-around items-center rounded:md cursor-pointer border-2 border-black">
                <button
                  className="text-[16px] text-black md:block"
                  onClick={toggleBurger}
                >
                  Register
                </button>
                <GrUserNew />
              </div> */}
            </div>
          ) : (
            <div className="w-[90%] md:w-[50%] lg:w-[40%] h-[30%] md:h-full lg:ml-8 text-[15px] text-gray-600 flex items-center justify-around">
              <div className="w-[28%] md:w-[32%] lg:w-[28%] flex justify-around items-center rounded:md">
                <TbTruckDelivery className="text-[16px]" />
                <button>Track Order</button>
              </div>

              <div className="w-[20%] md:w-[16%] lg:w-[20%] h-4/5 md:h-[60%] bg-blue-400 text-white flex justify-center items-center rounded:md">
                <Link to="/payment" className="flex items-center">
                  <AiOutlinePrinter className="text-[16px]" />

                  <span className="ml-1">{cart.length}</span>
                </Link>
              </div>
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="relative max-w-[45%] min-w-[150px] md:max-w-[42%] lg:max-w-[42%] flex items-center justify-evenly rounded:md cursor-pointer"
              >
                <MdPermIdentity className="text-[14px]" />
                <p className="text-[14px] px-1 overflow-hidden">{user?.name}</p>
                <IoIosArrowDown className="text-[16px]" />
                {showProfile && (
                  <div className="absolute w-full border-2 border-gray-100 bg-white shadow-md top-full left-0">
                    <div className="w-full h-1/3 bg-blue hover:bg-gray-200 hover:text-red cursor-pointer p-2">
                      Profile
                    </div>

                    <Link to="/changepassword">
                      <div className="w-full h-1/3 bg-blue hover:bg-gray-200 hover:text-red cursor-pointer p-2">
                        Change Password
                      </div>
                    </Link>
                    <div className="w-full h-1/3 bg-blue hover:bg-gray-200 hover:text-red cursor-pointer p-2">
                      Order History
                    </div>
                    <div
                      onClick={logoutHandler}
                      className="w-full h-1/3 bg-blue hover:bg-gray-200 hover:text-red cursor-pointer p-2"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* <MobileMenu imdenuOpen={isToggleActive} /> */}
      {/* <Links isToggleActive={isToggleActive} /> */}
      {/* <NavbarBottom /> */}
      {isLoginOpen === true && <Login setLoginOpen={setLoginOpen} />}
    </>
  );
}

export default Header;
