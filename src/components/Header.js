import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Account from "../assets/account.svg";
import Menu from "../assets/menu-icon.svg";
import Close from "../assets/close-icon.svg";
import Login from "./Login";
import logo from './../component/Images/Logo/logo.png';


function Header(props) {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const [toggleMenu, setToggleMenu] = useState(true);
  const navElement = [
    { title: "Business Card", link: "products" },
    {
      title: "Stationary",
      link: "products",
    },
    {
      title: "Marketing Tools",
      link: "products",
    },
    {
      title: "Business Essentials",
      link: "products",
    },
    {
      title: "Events",
      link: "products",
    },
    {
      title: "Signage",
      link: "products",
    },
    {
      title: "Gift & Promotion",
      link: "products",
    },
    {
      title: "Flex",
      link: "products",
    },
    {
      title: "Appeals",
      link: "products",
    },
    {
      title: "Digital Print",
      link: "products",
    },
  ];
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex mt-2 justify-center items-center flex-col gap-2 w-full border-b-2 pb-1 md:gap-3 lg:flex-row">
        {/*Header Logo section  */}
        <div className="flex items-center justify-between w-full relative">
          <Link to="/">
            <img
              className="h-12 md:h-16 xl:h-20 "
              src={logo}
              alt="logo"
            />
          </Link>
          {/* Menu for small device */}
          <button
            onClick={(e) => {
              setToggleMenu(!toggleMenu);
            }}
            className="mr-4 transition bg-sky-400 rounded-full flex items-center justify-center lg:hidden"
          >
            <img
              className="w-10 p-2 bg-gray-300 text-center rounded-full"
              src={toggleMenu ? Menu : Close}
            />
          </button>
          <div
            className={
              toggleMenu
                ? "hidden"
                : "absolute backdrop-blur-lg rounded-md p-5 w-[60%] right-4 top-12 md:w-[50%] md:top-14 text-[1.2rem] lg:hidden"
            }
          >
            <ol>
              {navElement.map((element) => {
                return (
                  <li className="my-2 font-semibold text-[1.1rem]">
                    <Link to={element.link}>{element.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>
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
              {isLoginOpen === true && (
                <Login setLoginOpen={setLoginOpen} />
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
