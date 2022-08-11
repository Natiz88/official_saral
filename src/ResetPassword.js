import axios from "axios";
import React from "react";
import { useState } from "react";

import PasswordSVG from "./assets/password.svg";
import Show from "./assets/show.svg";
import Hide from "./assets/hide.svg";
import Done from "./assets/done.svg";
import NotDone from "./assets/notDone.svg";

const ResetPassword = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [showPop, setshowPop] = useState(false);
  const [showPopText, setShowPopText] = useState("hello world");

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reset = (e) => {
    e.preventDefault();
    if (password === "" || newPassword === "" || confirmPassword === "") {
      setTimeout(() => {
        setshowPop(false);
      }, 3000);
      setshowPop(true);
      setShowPopText("Password Field Empty");
      return;
    }

    const token = "Bob5PvFtKuqleTCroxeoYh4KkPwnFy2dthvo8WjR";
    // const token = localStorage.getItem("token");

    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let data = {
      old_password: password,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    axios
      .post(
        "http://192.168.100.21:8081/api/profile/change-password",
        data,
        config
      )
      .then((response) => {
        setMessageSuccess(true);
        setShowPopText(response.data.message);
        setTimeout(() => {
          setshowPop(false);
        }, 3000);
        setshowPop(true);
      })
      .catch((error) => {
        setMessageSuccess(false);
        setShowPopText(error.response.data.message);
        setTimeout(() => {
          setshowPop(false);
        }, 3000);
        setshowPop(true);
      });
  };
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div
          className={
            !showPop
              ? "h-[26rem] w-[28em] px-7 shadow-lg border-gray-300 border-[1px] rounded-3xl p-4 md:w-[50%] lg:w-[40%]"
              : "h-[29rem] w-[28em] px-7 shadow-lg border-gray-300 border-[1px] rounded-3xl p-4 md:w-[50%] lg:w-[40%]"
          }
        >
          <div className="flex flex-col justify-center items-center ">
            <img src={PasswordSVG} alt="Logo" className="w-[5rem] " />
            <h1 className="text-[24px] font-bold text-blue-600">
              Reset Password
            </h1>
          </div>
          <form className="flex flex-col mt-1 gap-2">
            <label className="flex justify-between">
              Old Password
              <img
                src={showPass1 ? Show : Hide}
                alt=""
                className="w-[20px]"
                onClick={() => {
                  setShowPass1(!showPass1);
                }}
              />
            </label>
            <input
              // type="password"
              type={showPass1 ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              autoComplete="off"
              className="border border-grey-light rounded"
            />
            {/* <label className="flex justify-between">New Password</label> */}
            <label className="flex justify-between">
              New Password
              <img
                src={showPass2 ? Show : Hide}
                alt=""
                className="w-[20px]"
                onClick={() => {
                  setShowPass2(!showPass2);
                }}
              />
            </label>
            <input
              // type="password"
              type={showPass2 ? "text" : "password"}
              name="newPassword"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              value={newPassword}
              autoComplete="off"
              className="border border-grey-light rounded"
            />
            <label className="flex justify-between">
              Confirm Password
              <img
                src={showPass3 ? Show : Hide}
                alt=""
                className="w-[20px]"
                onClick={() => {
                  setShowPass3(!showPass3);
                }}
              />
            </label>
            <input
              // type="password"
              type={showPass3 ? "text" : "password"}
              name="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              autoComplete="off"
              className="border border-grey-light rounded"
            />
            <div className={showPop ? "block" : "hidden"}>
              {/* <div className="hidden "> */}
              <p
                className={
                  messageSuccess
                    ? "bg-green-400 flex gap-2 p-2"
                    : "bg-red-400 flex gap-2 p-2"
                }
              >
                {/* {messageSuccess? "Password Changed": "Invalid credentail"  }<img src={messageSuccess? Done:NotDone} alt="done" className="w-[23px]" /> */}
                {showPopText}
                <img
                  src={messageSuccess ? Done : NotDone}
                  alt="done"
                  className="w-[23px]"
                />
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="bg-blue-600 rounded-xl mt-1 p-1 text-lg w-[50%] hover:bg-blue-700"
                // onClick={(e)=>{
                //   reset();
                //   e.preventDefault();
                //   setMessageSuccess(!messageSuccess);
                // }}
                onClick={reset}
              >
                Reset Password
              </button>
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-800 hover:underline"
              >
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;