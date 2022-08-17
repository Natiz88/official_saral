import React, { useState } from "react";
import axios from "axios";
import Char from "../component/Images/PaymentProcess/khalti.png";
import Base from "../component/Images/PaymentProcess/khalti.png";

export default function Signup() {
  const [type, setType] = useState("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tphone, setTphone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [pphoto, setPphoto] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const callApi = (e) => {
    e.preventDefault();

    const url = "http://192.168.100.17:8081/api/signup";
    let formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("mobile_number", phone);
    formData.append("password", password);
    formData.append("password_confirmation", cpassword);
    formData.append("email", email);
    // formData.append("pan", pan);
    formData.append("gender", gender);
    formData.append("type", type);

    formData.forEach((data, value) => console.log(data, value));

    console.log("api callled");

    const headers = {
      accept: "application/json",
      "content-type": "multipart/form-data;",
    };

    axios({ method: "POST", url, data: formData, headers })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const options = [
    "",
    "Itahari",
    "Inaruwa",
    "Jhumkaa",
    "Dharan",
    "Duhabi",
    "Biratnagar",
    "Rangeli",
    "Darmravitaa",
    "Hoklabari",
    "Buddha nagar",
    "Pathari",
    "Urlabari",
    "Letang",
    "Bayarban",
    "Damak",
    "Birtamod",
    "Kakarbhitta",
    "Chandragadi",
    "Kechana",
    "Gaungani",
    "Bhadrapur",
    "Dhulabari",
    "Surunga",
    "Haldibari",
    "Baniyani",
    "Prithivinagar",
    "Gauradaha",
    "Topgachhi",
    "Ilam",
    "Fikal",
    "Pasupatinagar",
    "Maimajuwa",
    "Ektappa",
    "Earutar",
    "Danabari",
    "Sidiithumukha",
    "Ebhang",
    "Naya bazzar",
    "Phidim",
    "Tharpu",
    "Panchami",
    "Yangnam",
    "Ekteen",
    "Lungruppa",
    "Memeng",
    "Nawomi dada",
    "Taplejung",
    "Funling",
    "Maylung",
    "Jirikhimti",
    "Sagranti",
    "Lasune",
    "Basantapur",
    "Sukrabare",
    "Khandbari",
    "Tumlingtar",
    "Chainpur",
    "Mudesanischare",
    "Pokhari",
    "Dhankuta",
    "Hile",
    "Siduwa",
    "Jitpur",
    "Ranibas",
    "Pakhribas",
    "Rajarani",
    "Bhojpur",
    "Udayapur",
    "Gaighat",
    "Beltar",
    "Phhatepur",
    "Rampur",
    "Belaka",
    "Katari",
    "Prakashpur",
    "Lahan",
    "Mirchaiya",
    "Rajbiraj",
    "Diktel",
  ];

  return (
    <>
      {/* main page */}
      <div className=" lg:px-40  md:flex ">
        {/* form container */}
        <div className=" bg-white m-6  space-x-0 shadow-2xl  md:flex  lg:justify-center lg:flex lg:w-[90%]">
          {/* form label & input */}

          <form className="flex flex-col p-3 space-x-0 md:w-[26rm] lg:flex lg:w-[65%]   ">
            {/* user type */}
            <div className=" ">
              <h1>Types of user</h1>
              {/* Individual */}
              <div
                onClick={() => setType("individual")}
                className=" font-semibold  text-white  bg-blue-500 ml-4  hover:bg-blue-600 px-4 py-2 rounded-md h-11 inline-flex hover:shadow-lg hover:shadow-blue-500"
              >
                <input
                  type="radio"
                  class="form-radio "
                  name="accountType"
                  value="individual"
                  checked={type === "individual" ? true : false}
                  className="mr-2 mt-1.5 cursor-pointer w-4 h-4"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
                <label>Individual</label>
              </div>
              {/* Corporate */}
              <div
                onClick={() => setType("corporate")}
                className=" font-semibold  text-white  bg-blue-500 ml-4  hover:bg-blue-600 px-4 py-2 rounded-md h-11 inline-flex hover:shadow-lg hover:shadow-blue-500"
              >
                <input
                  type="radio"
                  class="form-radio "
                  name="accountType"
                  value="corporate"
                  checked={type === "corporate" ? true : false}
                  className="mr-2 mt-1.5 cursor-pointer w-4 h-4"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
                <label>Corporate</label>
              </div>
            </div>
            {/* Name */}
            <div className="flex flex-col ">
              <label for="Name" className="mt-3 text-base">
                {type === "individual" ? " Full Name" : "Company Name"}
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name=""
                placeholder={
                  type === "individual" ? " Full Name" : "Company Name"
                }
                className="border h-9 shadow-inner m-1 px-1 text-base "
              />
              {/* Email */}
              <label for="Name" className="pt-2 text-base">
                Email*
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name=""
                placeholder=" email"
                className="border h-9 shadow-inner m-1 text-base px-1"
              />
              {/* Corporate Contact */}
              <div
                className={
                  type === "individual"
                    ? "hidden"
                    : " md:flex md:flex-row md:justify-evenly   "
                }
              >
                <div className="flex flex-col w-full">
                  <label for="Name" className="pt-2 text-base">
                    Telephone No*
                  </label>
                  <input
                    onChange={(e) => {
                      setTphone(e.target.value);
                    }}
                    type="text"
                    name=""
                    placeholder=" Phone Number"
                    className="border h-9 shadow-inner m-1 px-1 text-base"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label for="Name" className="pt-2 text-base">
                    Phone No*
                  </label>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    name=""
                    placeholder=" Phone Number"
                    className="border h-9 shadow-inner m-1 px-1 text-base"
                  />
                </div>
              </div>
              {/* Individual Contact */}
              <div
                className={type === "corporate" ? "hidden" : " flex flex-col "}
              >
                <label for="Name" className="pt-2 text-base">
                  Phone No*
                </label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="text"
                  name=""
                  placeholder=" Phone Number"
                  className="border h-9 shadow-inner m-1 px-1 text-base"
                />
              </div>
              {/* City */}
              <div className="md:flex md:flex-row md:justify-evenly ">
                <div className="flex flex-col  w-full">
                  <label for="City" className="pt-2 text-base">
                    City*
                  </label>
                  <select
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className=" border h-9 shadow-inner m-1 px-1 text-base"
                  >
                    {options.map((place) => (
                      <option>{place}</option>
                    ))}
                  </select>
                </div>
                {/* Address */}
                <div className="flex flex-col  w-full">
                  <label for="Name" className="pt-2 text-base">
                    Address*
                  </label>
                  <input
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    type="text"
                    name=""
                    placeholder="Address"
                    className="border h-9 shadow-inner m-1 px-1 text-base"
                  />
                </div>
              </div>
              {/* PAN Container */}
              <div
                className={
                  type === "individual"
                    ? "hidden"
                    : " md:flex md:flex-row md:justify-evenly   "
                }
              >
                <div className="flex flex-col w-full">
                  <label for="Name" className="pt-2 text-base">
                    PAN*
                  </label>
                  <input
                    onChange={(e) => {
                      setPan(e.target.value);
                    }}
                    type="text"
                    name=""
                    placeholder=" Phone Number"
                    className="border h-9 shadow-inner m-1 px-1 text-base"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label for="Name" className="pt-2 text-base">
                    PAN photo*
                  </label>
                  <input
                    onChange={(e) => {
                      setPphoto(e.target.value);
                    }}
                    type="file"
                    name="Pan Photo"
                    accept="image/*"
                    placeholder=" Phone Number"
                    className="border h-9 shadow-inner m-1 px-1 text-base md:w-[190px] "
                  />
                </div>
              </div>
              {/* Gender Container */}
              <div
                className={type === "corporate" ? "hidden" : "flex flex-col "}
              >
                <label for="Gender" className="pt-2 text-base">
                  Gender
                </label>
                <select
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className="h-9 shadow-inner m-1 px-1 text-base border"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              {/* Password */}
              <label for="Name" className="pt-2 text-base">
                Password*
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name=""
                placeholder=" Password"
                className="border h-9 shadow-inner  m-1 px-1 text-base"
              />
              {/* Conform Password */}
              <label for="password" className="pt-2 text-base">
                Confirm password*
              </label>
              <input
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
                type="password"
                name=""
                placeholder=" Confirm Password"
                className="border  shadow-inner h-9  m-1 px-1 text-base"
              />

              <div className="flex justify-center">
                <button
                  onClick={callApi}
                  type="Signup"
                  className="bg-red-500 m-3 rounded-md px-9 hover:shadow-lg hover:shadow-red-400 py-2 text-white font-medium"
                >
                  Signup
                </button>
              </div>
            </div>
            <div className="justify-center  inline-flex">
              <p>Already have account?</p>
              <a
                href="#"
                className="hover:underline hover:font-bold ml-1 text-blue-500"
              >
                login
              </a>
            </div>
          </form>
          {/* footer for form */}
          <div className=" md:w-1/2 bg-sky-100  md:pt-14 md:relative">
            <div className=" justify-center flex">
              <img src={Char} alt="" className="h-44 md:h-56 lg:h-64 " />
            </div>
            <div className=" items-center flex flex-col  md:mt-24">
              <label
                for="bottom"
                className="text-red-500 text-2xl md:text-2xl font-bold"
              >
                Purwanchal First
              </label>
              <label className="font-bold text-sky-600 text-2xl md:pt-5 md:text-2xl">
                Online Printing Platform
              </label>
            </div>
            <div className="md:absolute bottom-0 left-0">
              <img src={Base} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
