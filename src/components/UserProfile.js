import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Menu from "../assets/menu-icon.svg";
import Close from "../assets/close-icon.svg";
import LogOut from "../assets/logout-icon.svg";
import Stationary_4 from "../assets/stationary_4.webp";
import Stationary_5 from "../assets/stationary_5.webp";
import Stationary_6 from "../assets/stationary_6.webp";
import Stationary_7 from "../assets/stationary_7.webp";
import Stationary_8 from "../assets/stationary_8.webp";

function UserProfile() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [togglePersonal, setTogglePersonal] = useState(true);
  const [toggleDefaultShippingAddress, setToggleDefaultShippingAddress] =
    useState(true);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("Bikal Dhimal");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("bikal@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [address, setAddress] = useState("Belbari-1, Morang");
  const [newAddress, setNewAddress] = useState("");
  const [street, setStreet] = useState("Province-1, Belbari-Paschim Bus park");
  const [newStreet, setNewStreet] = useState("");
  const [phone, setPhone] = useState("9876543210");
  const [newPhone, setNewPhone] = useState("");
  const orderData = [
    {
      orderID: "8783r7387943",
      orderedDate: "24/07/2022",
      orderItem: Stationary_4,
      price: 500,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "02/07/2022",
      orderItem: Stationary_5,
      price: 1000,
    },
    {
      orderID: "djsnj76349",
      orderedDate: "15/06/2022",
      orderItem: Stationary_6,
      price: 100,
    },
    {
      orderID: "94868940jf9",
      orderedDate: "30/06/2022",
      orderItem: Stationary_7,
      price: 700,
    },
    {
      orderID: "H39u54h",
      orderedDate: "10/07/2022",
      orderItem: Stationary_8,
      price: 2300,
    },
  ];
  const checkLoginStatus = async (e) => {
    e.preventDefault();
    await axios
      .get("http://192.168.1.98:8081/api/login", { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    // checkLoginStatus();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-200 flex p-5">
        <div className=" hidden lg:block w-[25%]">
          <p>Hello {name}</p>
          {/* logout section */}
          <button
            className="flex items-center gap-1 m-2"
            onClick={(e) => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            <img className="h-6" src={LogOut} alt="logout" />
            Logout
          </button>
        </div>
        <div className="w-full ">
          <div className="flex items-center relative justify-between mb-5">
            <p className="font-semibold md:text-[1.3em] lg:text-[1.5rem]">
              Manage My Account
            </p>
            <button
              onClick={(e) => {
                setToggle(!toggle);
              }}
            >
              <img
                className="bg-slate-50 h-[2.5em] mr-2 rounded-full p-2 lg:hidden"
                src={toggle ? Menu : Close}
                alt=""
              />
            </button>
            <div className={
              toggle ? "hidden":"absolute right-1 top-12 backdrop-blur-md p-5 w-[80%] rounded lg:hidden"
            }>
              <div className="">
                <p>Hello {name}</p>
                {/* logout section */}
                <button
                  className="flex items-center gap-1 m-2"
                  onClick={(e) => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  <img className="h-6" src={LogOut} alt="logout" />
                  Logout
                </button>
              </div>
            </div>
          </div>
          {/* User details */}
          <div className="flex flex-col justify-around gap-3 md:flex-row">
            <div className="flex-1 bg-slate-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <p className=" text-[1.1rem]">Personal Profile</p>
                <button
                  onClick={(e) => {
                    setTogglePersonal(!togglePersonal);
                  }}
                  className="uppercase font-semibold text-blue-700 hover:text-blue-500"
                >
                  Edit
                </button>
              </div>
              {/* Hidden div for personal detail */}
              <div
                className={
                  togglePersonal
                    ? "hidden"
                    : "bg-gray-300 rounded-md w-[85%] z-10 absolute top-52 py-5 md:w-[50%] md:left-52 lg:w-[45%] lg:left-96 lg:top-60"
                }
              >
                <div className="flex justify-end mr-3">
                  <button
                    onClick={(e) => {
                      setTogglePersonal(!togglePersonal);
                    }}
                  >
                    <img className="h-8" src={Close} alt="" />
                  </button>
                </div>
                {/* new values */}
                <div className="px-5 flex flex-col gap-3 items-center">
                  <div className="flex flex-col w-[90%]">
                    <label className="text-[1.08rem] mb-1">Name</label>
                    <input
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="text"
                      name="new-email"
                      placeholder="Enter name"
                      value={newName}
                    />
                  </div>
                  <div className="flex flex-col mb-2 w-[90%]">
                    <label className="text-[1.08rem] mb-1">Email</label>
                    <input
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="email"
                      name="new-name"
                      placeholder="Enter email"
                      value={newEmail}
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      if (!newName || !newEmail) {
                        setName(name);
                        setEmail(email);
                      } else {
                        setName(newName);
                        setEmail(newEmail);
                      }
                      setNewName("");
                      setNewEmail("");
                      setTogglePersonal(!togglePersonal);
                    }}
                    className="bg-blue-700 text-white h-[2.3em] w-[45%] rounded-md"
                  >
                    Set
                  </button>
                </div>
              </div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
            <div className="flex-1 bg-slate-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <p>Personal Profile</p>
                <button
                  onClick={(e) => {
                    setToggleDefaultShippingAddress(
                      !toggleDefaultShippingAddress
                    );
                  }}
                  className="uppercase font-semibold text-blue-700 hover:text-blue-500"
                >
                  Edit
                </button>
              </div>
              {/* Hidden div for shipping address */}
              <div
                className={
                  toggleDefaultShippingAddress
                    ? "hidden"
                    : "bg-gray-300 rounded-md w-[85%] z-10 absolute top-52 py-5 md:w-[50%] md:left-52 lg:w-[45%] lg:left-96 lg:top-60"
                }
              >
                <div className="flex justify-end mr-3">
                  <button
                    onClick={(e) => {
                      setToggleDefaultShippingAddress(
                        !toggleDefaultShippingAddress
                      );
                    }}
                  >
                    <img className="h-8" src={Close} alt="" />
                  </button>
                </div>
                {/* new values */}
                <div className="px-5 flex flex-col gap-3 items-center">
                  <div className="flex flex-col w-[90%]">
                    <label className="text-[1.08rem] mb-1">Name</label>
                    <input
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="text"
                      name="new-name"
                      placeholder="Enter name"
                      value={newName}
                    />
                  </div>
                  <div className="flex flex-col w-[90%]">
                    <label className="text-[1.08rem] mb-1">Address</label>
                    <input
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="text"
                      name="new-address"
                      placeholder="Enter Address"
                      value={newAddress}
                      onChange={(e) => {
                        setNewAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-[90%]">
                    <label className="text-[1.08rem] mb-1">Street</label>
                    <input
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="text"
                      name="new-street"
                      placeholder="Enter Street"
                      value={newStreet}
                      onChange={(e) => {
                        setNewStreet(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-[90%]">
                    <label className="text-[1.08rem] mb-1">Phone</label>
                    <input
                      className="pl-2 h-[2.05em] rounded outline-none"
                      type="text"
                      name="new-phone"
                      placeholder="Enter phone"
                      value={newPhone}
                      onChange={(e) => {
                        setNewPhone(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      if (!newName || !newPhone || !newAddress || !newStreet) {
                        setName(name);
                        setAddress(address);
                        setStreet(street);
                        setPhone(phone);
                      } else {
                        setName(newName);
                        setAddress(newAddress);
                        setStreet(newStreet);
                        setPhone(newPhone);
                      }
                      setNewName("");
                      setNewPhone("");
                      setNewAddress("");
                      setNewStreet("");
                      setToggleDefaultShippingAddress(
                        !toggleDefaultShippingAddress
                      );
                    }}
                    className="bg-blue-700 text-white h-[2.3em] w-[45%] rounded-md"
                  >
                    Set
                  </button>
                </div>
              </div>
              <p className="font-light uppercase mb-1">
                Default Shipping Address
              </p>
              <p className="mb-1">{name}</p>
              <p>{address}</p>
              <p>{street}</p>
              <p>{phone}</p>
            </div>
            <div className="flex-1 bg-slate-50 p-5">
              <p className="font-light uppercase mb-1">
                Default Billing Address
              </p>
              <p className="mb-1">{name}</p>
              <p>{address}</p>
              <p>{street}</p>
              <p>{phone}</p>
              <p></p>
            </div>
          </div>
          <div className="mt-5 p-3 bg-slate-50">
            <p className="text-[1.2rem] font-semibold">Recent Order</p>
            <table className="w-full border mt-2 text-center">
              <thead>
                <th className="border">Order</th>
                <th className="border">Placed On</th>
                <th className="border">Items</th>
                <th className="border">Total</th>
              </thead>
              <tbody>
                {orderData.map((orderData) => {
                  return (
                    <tr>
                      <td className="border ">{orderData.orderID}</td>
                      <td className="border">{orderData.orderedDate}</td>
                      <td className="border p-1 flex justify-center">
                        <img
                          className=" rounded-md w-20"
                          src={orderData.orderItem}
                          alt="product"
                        />
                      </td>
                      <td className="border min-w-24">Rs.{orderData.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
