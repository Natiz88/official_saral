import React from "react";
import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import axios from "axios";

import Facebook from "../assets/facebook.png";
import Google from "../assets/google.svg";
import Home from "./Home";
import { GrClose } from "react-icons/gr";

const Login = ({ setLoginOpen }) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const name = () => {
    return localStorage.getItem("token");
  };
  const login = async (e) => {
    e.preventDefault();
    const loginData = {
      old_password: email,
      password: password,
      device_name: window.navigator.userAgentData.platform,
    };
    const config = {
      header: {
        Accept: "application/json",
      },
    };
    await axios
      .post("http://192.168.100.17:8081/api/login", loginData, config)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("success");
      })
      .catch((err) => console.log("error", err));

    // } catch (error) {
    //   console.log(error);
    // }
  };
  const active =
    "absolute left-0 bg-blue-600 rounded-[20px] w-1/2 h-full transition-all duration-500 ease-in-out";
  return (
    <>
      {/* Main Container */}
      <div
        className={`h-full w-full backdrop-blur-sm z-20 flex justify-center items-center fixed top-[65px] inset-0`}
        onClick={() => {
          setLoginOpen(false);
        }}
      >
        {/* Form Container */}
        <div
          className="w-[80%] h-[37rem] bg-white rounded-3xl z-20 shadow-lg border-gray-300 border-[1px] p-2 md:w-[60%] md:p-2 md:h-[36rem] lg:w-[50%] lg:p-2 xl:w-[40%] relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className="flex justify-center items-center">
            <h1 className="text-[20px] font-semibold">Login Page</h1>
            {/* <Link
              className="text-red-600 font-bold uppercase px-6 py-2 text-2xl md:text-3xl lg:text-3xl outline-none focus:outline-none absolute right-0 mr-1 mb-1 ease-linear transition-all duration-150 hover:text-red-800"
              to="/"
            >
              <button
                onClick={() => {
                  <Navigate to={<Home />} />;
                }}
              >
                X
              </button>
            </Link> */}
            <div className="text-red-600 font-bold uppercase px-6 py-2 text-2xl md:text-3xl lg:text-3xl outline-none focus:outline-none absolute right-0 mr-1 mb-1 ease-linear transition-all duration-150 hover:text-red-800">
              <button
                onClick={() => {
                  setLoginOpen(false);
                }}
              >
                <GrClose className="hover:text-red-300 text-[20px]" />
              </button>
            </div>
          </div>
          {/* Toggle Container */}
          <div className="w-full relative z-10 text-sm sm:text-md md:text-lg lg:text-xl text-[15px]">
            <i className="absolute top-4 right-4 cursor-pointer"></i>
            <div className="relative flex w-11/12 m-auto mt-5 bg-white justify-around items-center cursor-pointer h-[45px] shadow-lg border-gray-300 border-[1px] rounded-[20px]">
              <p
                className={
                  !isActive
                    ? "z-10 text-white w-1/2 text-center"
                    : "z-10 w-1/2 text-center"
                }
                onClick={toggleActive}
              >
                Individual Account
              </p>
              <p
                className={
                  isActive
                    ? "z-10 text-white w-1/2 text-center"
                    : "z-10 w-1/2 text-center"
                }
                onClick={toggleActive}
              >
                Corporate Account
              </p>
              <div
                className={
                  !isActive ? active : `${active} translate-x-full bg-red-400`
                }
              ></div>
            </div>
          </div>
          <form className="flex flex-col mt-4 p-4">
            <p>{errorMessage}</p>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder=" Enter Email"
              className="block border border-grey-light w-full p-2 rounded mb-4"
            />
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="name"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder=" Enter Password"
              className="block border border-grey-light w-full p-2 rounded mb-4"
            />
            <div className="flex">
              <a href="/">Forgot Password?</a>
            </div>
            <div className="px-4 mt-6 flex flex-col justify-center items-center">
              <button
                type="submit"
                // className="h-[45px] bg-blue-600 hover:bg-blue-800 text-white rounded-[20px] w-[70%] text-[20px] lg:w-[50%]"
                className="bg-blue-600 hover:bg-blue-800 text-white rounded-[20px] h-[45px] w-full md:w-1/2 text-[20px]"
                onClick={login}
              >
                Login
              </button>
              <hr className="bg-slate-400 w-full h-[1.2px] mt-4 " />
            </div>
          </form>
          <div className="px-8 mb-1 md:mb-0 flex flex-col justify-center items-center">
            <button className="bg-red-600 hover:bg-red-800 text-white rounded-[20px] w-full h-[45px] text-[20px] text-bold md:w-[60%] lg:w-[60%] xl:w-[50%]">
              Create Account
            </button>
            <label className="mb-2">or Signup with</label>
          </div>
          <div className="flex justify-center gap-[1rem] md:gap-[2rem]">
            <button className="w-[7.5rem] flex justify-center py-3 px-2 lg:px-6 lg:w-[8rem] bg-red-50 rounded-xl transition hover:bg-red-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex justify-center items-center gap-2">
                <img src={Google} alt="Google" className="w-[22px] " />
                <span className="text-sm font-semibold tracking-wide text-red-400">
                  Google
                </span>
              </span>
            </button>
            <button className="w-[7.5rem] flex justify-center py-3 lg:px-6 lg:w-[8.5rem] bg-blue-50 rounded-xl transition hover:bg-blue-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex justify-center items-center gap-2 ">
                <img src={Facebook} alt="Facebook" className="w-[25px] " />
                <span className="text-sm font-semibold tracking-wide text-blue-400 ">
                  Facebook
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
// https://codesandbox.io/s/21o46mkwnr?file=/src/index.js
export default Login;
