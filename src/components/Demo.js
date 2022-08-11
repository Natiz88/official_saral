import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //axios calls
  const login = async (e) => {
    try {
      e.preventDefault();
      const url = "http://192.168.1.98:8081/api/login";
      const loginData = {
        email: email,
        password: password,
        device_name: window.navigator.userAgentData.platform,
      };
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      await axios.post(url, loginData, config).then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data);
          navigate("/");
        } else if (response.status === 522) {
        } else if (response.status === 404) {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-gray-400 flex justify-center items-center ">
        <div className="h-[70%] w-[70%] bg-white rounded bg lg:w-[60%] pt-10">
          <div className="w-full flex items-center flex-col mt-6 gap-2">
            <Link className="w-full flex justify-center" to="/">
              <img
                className="w-[50%] md:w-[40%] lg:w-[30%]"
                src={logo}
                alt=""
              />
            </Link>
            <p className="text-[1.35rem] font-bold mt-5 text-red-500 border-b-2 border-red-500">
              Login
            </p>
          </div>
          <div className="mt-3">
            <form
              action=""
              onSubmit={login}
              className="flex flex-col items-center gap-3 "
            >
              <input
                className="h-10 w-[80%] border-red-500 border rounded-lg"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
                placeholder="Enter your email"
              />
              <input
                className="h-10 w-[80%] border-red-500 border rounded-lg"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
                placeholder="Enter your password"
              />
              <button
                className="p-1 bg-red-500 w-[45%] text-[1.2rem] rounded-lg font-semibold text-white"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
