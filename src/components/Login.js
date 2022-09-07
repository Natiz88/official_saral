import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useHistory, Navigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "./../Redux/LoginReducer";
import { GrClose } from "react-icons/gr";
const sign = require("jwt-encode");

const Login = ({ setLoginOpen }) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(loginActions.login());
  };

  const userHandler = (user) => {
    dispatch(loginActions.updateUser(user));
    // const userEncoded = jwt.sign(user, "saralprint");
    localStorage.setItem("user");
  };
  const logined = useSelector((state) => state.login.isLoggedIn);
  console.log("logged in", logined);

  const login = async (e) => {
    e.preventDefault();
    setError(false);
    if (email === "" || password === "") {
      setError(true);
      setErrorMsg("Please fill up the required fields");
      return;
    }
    const loginData = {
      email: email,
      password: password,
      device_name: "acer",
    };
    const config = {
      header: {
        Accept: "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://192.168.100.17:8081/api/login",
        loginData,
        config
      );
      setLoginOpen(false);
      localStorage.setItem("token", response?.data?.token);
      loginHandler();
      const jwt =
        response?.data?.user && sign(response?.data?.user, "saralprint");
      localStorage.setItem("user", jwt);
      userHandler(response?.data?.user);
    } catch (err) {
      setError(true);
      setErrorMsg(err?.response?.data?.message);
    }

    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authenticated = localStorage.getItem("authenticated");
    if (token && authenticated) {
      navigate("/");
    }
  }, []);

  console.log(`email: ${email} password: ${password}`);
  return (
    <>
      {/* Main Container */}
      <div
        className={`h-full w-full backdrop-blur-sm z-50 fixed inset-0 `}
        onClick={() => {
          setLoginOpen(false);
        }}
      >
        {/* Form Container */}
        <div
          className="w-[85%] h-[30rem] md:h-[34rem] bg-white rounded-3xl z-20 mt-[25%] md:mt-[10%] lg:mt-[5%] shadow-lg border-gray-300 border-[1px] p-2 md:w-[60%] m-auto md:p-2 lg:w-[50%] lg:p-2 xl:w-[40%] relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Header */}
          <div className="flex justify-center items-center">
            <h1 className="text-[24px] mt-8 font-semibold">Login Page</h1>
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
          <form className="flex flex-col md:mt-4 p-4 md:px-[2rem]" autoComplete="off">
            {error && <p className="text-red-400">{errorMsg}</p>}
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder=" Enter Email"
              autoComplete="off"
              className="block border border-grey-light outline-none w-full p-2 rounded mb-2 mt-2"
            />
            <label className="font-medium mt-4">Password</label>
            <input
              type="password"
              name="name"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder=" Enter Password"
              autoComplete="off"
              className="block border border-grey-light outline-none w-full p-2 rounded mb-2 mt-2"
            />
            <div className="flex">
              <a
                href="/"
                className="mb-1 text-[14px] text-gray-400 hover:text-black mt-2"
              >
                Forgot Password?
              </a>
            </div>
            <div className="px-4 md:mt-2 flex flex-col justify-center items-center">
              <button
                type="submit"
                // className="h-[45px] bg-blue-600 hover:bg-blue-800 text-white rounded-[20px] w-[70%] text-[20px] lg:w-[50%]"
                className="bg-blue-600 hover:bg-blue-800 text-white rounded-[20px] h-[40px] w-[70%] lg:w-[50%] text-[16px] mt-4"
                onClick={login}
              >
                Login
              </button>
              <hr className="bg-slate-400 w-full h-[1.2px] mt-2 " />
            </div>
          </form>
          <div className="px-8 mb-1 md:mb-0 flex flex-col justify-center items-center">
            <button className="bg-red-600 hover:bg-red-800 text-white rounded-[20px] w-[70%] h-[40px] text-[16px] text-bold md:w-[60%] lg:w-[60%] xl:w-[50%]">
              Create Account
            </button>
            {/* <label className="mb-2 text-[14px]">or Signup with</label> */}
          </div>
          {/* <div className="flex justify-center gap-[1rem] md:gap-[2rem]">
            <button className="w-[7.5rem] flex justify-center py-3 px-2 lg:px-6 lg:w-[8rem] bg-red-50 rounded-xl transition hover:bg-red-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex justify-center items-center gap-2">
                <img src={Google} alt="Google" className="w-[22px] " />
                <span className="text-sm font-semibold tracking-wide text-red-400">
                  Google
                </span>
              </span>
            </button>
            <button className="w-[7.5rem] flex justify-center py-2 lg:px-6 lg:w-[8.5rem] bg-blue-50 rounded-xl transition hover:bg-blue-100 shadow-lg border-gray-300 border-[1px]">
              <span className="flex justify-center items-center gap-2 ">
                <img src={Facebook} alt="Facebook" className="w-[25px] " />
                <span className="text-sm font-semibold tracking-wide text-blue-400 ">
                  Facebook
                </span>
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
// https://codesandbox.io/s/21o46mkwnr?file=/src/index.js
export default Login;
