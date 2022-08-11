import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Facebook from "./assets/facebook.svg";
import Google from "./assets/google.svg";

import SignUp from "./Signup";
import Signup2 from "./Signup2";

const ModalLogin = ({ setLoginOpen }) => {
  // const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {setActive(!isActive);};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    try {
      e.preventDefault();
      const loginData = {
        email: email,
        password: password,
        device_name: window.navigator.userAgentData.platform,
      };
      const config = {
        header: {
          Accept: "application/json",
        },
      };
      await axios
        .post("http://192.168.1.98:8081/api/login", loginData, config)
        .then((response) => {
          // console.log(response.status);
          if (response.status === 200) {
            const token = localStorage.setItem("token", response.token);
            // navigate('/forgetpassword');
          }
          console.log(response.status);
        });
    } catch (error) {
      
    }
  };
  const active =
    "absolute left-0 bg-blue-600 rounded-[20px] w-1/2 h-full transition-all duration-500 ease-in-out";
  return (
    <>
      {/* Main Container */}
      <div
        className="h-full w-full flex justify-center items-center z-10 fixed inset-0 top-0 backdrop-blur-sm"
        onClick={() => {
          setLoginOpen(false);
        }}
      >
        {/* Form Container */}
        <div
          className="w-[80%] h-[37rem] bg-white rounded-3xl z-20 shadow-lg border-gray-300 border-[1px] p-2 md:w-[60%] md:p-4 md:h-[38rem] lg:w-[50%] lg:p-6 xl:w-[40%] relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className="flex justify-center items-center">
            <h1 className="text-[30px] semi-bold">Login</h1>
          </div>
          {/* Toggle Container */}
          <div className="w-full relative z-10 text-sm sm:text-md md:text-lg lg:text-xl">
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
          {/* <Login Form /> */}
          <form className="flex flex-col mt-4 p-4">
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
            <div className="flex justify-between text-sm md:text-md">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label>Remember me</label>
              </div>
              <a href="/">Forget Password?</a>
            </div>
            <div className="px-4 mt-6 flex flex-col justify-center items-center">
              {/* <button className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg  w-full text-[20px] md:w-[70%] lg:w-[70%]"> */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white rounded-[20px] h-[45px] w-full text-[20px]"
                onClick={login}
              >
                Login
              </button>
              <hr className="bg-black w-full h-[1.2px] mt-4 " />
            </div>
          </form>
          <div className="px-8 mb-1 md:mb-0 flex flex-col justify-center items-center">
            {/* {isActive ? (
              <SignUp setLoginOpen={setLoginOpen} />
            ) : (
              <Signup2 setLoginOpen={setLoginOpen} />
            )} */}
            <button className="bg-red-600 hover:bg-red-800 text-white rounded-[20px] w-full h-[45px] text-[20px] text-bold md:w-[60%] lg:w-[60%] xl:w-[50%]">
              Create Account
            </button>
            <label>or Signup with</label>
          </div>
          <div className="flex justify-center gap-[1rem] md:gap-[2rem] m-2">
            <button className="py-3 px-2 lg:px-6 bg-red-50 rounded-xl transition hover:bg-red-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex gap-2">
                <img src={Google} alt="" className="w-[22px] " />
                <span className="text-sm font-semibold tracking-wide text-red-400">
                  Google
                </span>
              </span>
            </button>
            <button className="py-3 px-2 lg:px-6 bg-blue-50 rounded-xl transition hover:bg-blue-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex gap-2 ">
                <img src={Facebook} alt="" className="w-[25px] " />
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

export default ModalLogin;
