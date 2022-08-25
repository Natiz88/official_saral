import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Banner from "./Banner";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import Show from "../assets/show.svg";
import Download from "../assets/download.svg";
import Contact from "../assets/Contact Us.png";

const Profile = () => {
  const [typeOfUser, setTypeOfUser] = useState("individual");
  const users = [
    { value: "individual", label: "Individual" },
    { value: "corporate", label: "Corporate" },
  ];
  const profileData = {
    name: "Manish Rai",
    userName: "Manish",
    typeOfUser: "individual",
    email: "manish@gmail.com",
    mobileNumber: 9801919288,
  };
  const addressData = {
    city: "Dharan",
    streetAddress: "Itahari-6,Sunsari",
    mobileNumber: 9801919277,
  };
  const documentData = {
    docType: "Pan Certificate",
    panNumber: 1234567,
    certificateImg: Contact,
  };
  return (
    <div>
      <Banner text="My Profile" />
      <div className="grid grid-cols-1 justify-center gap-[2rem] p-[2rem] md:px-[6rem] lg:flex-row lg:px-[8rem] lg:grid-cols-2 xl:px-[10rem]">
        <div className="w-full bg-white border-[0.5px] shadow-xl flex flex-col gap-[1rem] p-[1rem]">
          <div className="flex gap-[1rem]">
            <h1 className="text-[20px] text-[#E5113C] font-semibold">
              Personal Profile
            </h1>
            <img
              src={Edit}
              alt=""
              className="w-[20px] cursor-pointer hover:border-[#E5113C] hover:border-b-[2px]"
            />
            {/* <button className=" border-[#E5113C] border-2 rounded-md hover:bg-[#E5113C] hover:shadow-[#E5113C] hover:shadow-md hover:text-white w-[100px]"> */}
            <button className=" border-[#E5113C] border-2 rounded-md hover:bg-[#E5113C] hover:text-white w-[100px]">
              Update
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            <div>
              {/* <h1 className="font-semibold">Full Name</h1> */}
              {/* <p className="text-slate-600">{profileData.name}</p> */}
              <TextField
                required
                id="outlined-required"
                label="Full Name"
                defaultValue={profileData.name}
              />
            </div>
            <div>
              {/* <h1 className="font-semibold">User Name</h1> */}
              {/* <p className="text-slate-600">{profileData.userName}</p> */}
              <TextField
                required
                id="outlined-required"
                label="User Name"
                defaultValue={profileData.userName}
              />
            </div>
            <div>
              {/* <h1 className="font-semibold">Type of User</h1> */}
              {/* <p className="text-slate-600">{profileData.typeOfUser}</p> */}
              <TextField
                id="outlined"
                select
                label="Select"
                value={typeOfUser}
                onChange={(e) => {
                  setTypeOfUser(e.target.value);
                }}
                className="w-full"
              >
                {users.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              {/* <h1 className="font-semibold">Email</h1> */}
              {/* <p className="text-slate-600">{profileData.email}</p> */}
              <TextField
                required
                id="outlined-required"
                type="email"
                label="Email"
                defaultValue={profileData.email}
              />
            </div>
            <div>
              {/* <h1 className="font-semibold">Mobile Number</h1> */}
              {/* <p className="text-slate-600">{profileData.mobileNumber}</p> */}
              <TextField
                id="outlined-required"
                type="number"
                label="Mobile Number"
                defaultValue={profileData.mobileNumber}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-[0.5px] shadow-2xl flex flex-col gap-[1rem] p-[1rem]">
          <div className="flex gap-[1rem]">
            <h1 className="text-[20px] text-[#1874D1] font-semibold">
              Address
            </h1>
            <img
              src={Edit}
              alt=""
              className="w-[20px] cursor-pointer hover:border-[#1874D1] hover:border-b-[2px]"
            />
            {/* <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-md hover:text-white w-[100px]"> */}
            <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:text-white w-[100px]">
              Update
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            <div>
              {/* <h1 className="font-semibold">City</h1> */}
              {/* <p className="text-slate-600">{addressData.city}</p> */}
              <TextField
                id="outlined-required"
                label="City"
                defaultValue={addressData.city}
              />
            </div>
            <div>
              {/* <h1 className="font-semibold">Street Address</h1> */}
              {/* <p className="text-slate-600">{addressData.streetAddress}</p> */}
              <TextField
                id="outlined-required"
                label="Street Address"
                defaultValue={addressData.streetAddress}
              />
            </div>
            <div>
              {/* <h1 className="font-semibold">Contact Number</h1> */}
              {/* <p className="text-slate-600">{addressData.mobileNumber}</p> */}
              <TextField
                id="outlined-required"
                type="number"
                label="Contact Number"
                defaultValue={addressData.mobileNumber}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-[0.5px] shadow-2xl flex flex-col gap-[1rem] p-[1rem]">
          <div className="flex gap-[1rem] text-base">
            <h1 className="text-[20px] text-[#1874D1] font-semibold">
              Document Details
            </h1>
            <img
              src={Edit}
              alt=""
              className="w-[20px] cursor-pointer hover:border-[#1874D1] hover:border-b-[2px]"
            />
            <p className="text-[13px] text-[#E5113C]">*Unverified</p>
            {/* <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-md hover:text-white w-[100px]"> */}
            <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:text-white w-[100px]">
              Update
            </button>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-[1rem] md:grid-cols-3">
              <div>
                <h1 className="font-semibold">Document Type</h1>
                <p className="text-slate-600">{documentData.docType}</p>
              </div>
              <div>
                <h1 className="font-semibold">Pan/VAT Number</h1>
                <p className="text-slate-600">{documentData.panNumber}</p>
              </div>
            </div>
            <div className="flex gap-[5px] items-center">
              <div>
                <h1 className="font-semibold">Cerificate Image</h1>
                <div className="bg-[#1875d174] h-[85px] w-[165px] flex justify-center">
                  <img
                    src={documentData.certificateImg}
                    alt="Certificate Image"
                  />
                </div>
              </div>
              <div className="w-[20px] flex flex-col gap-[1rem]">
                {/* <img src={Show} alt="" className="cursor-pointer hover:border-b-[2px] border-black"/> */}
                {/* <img src={Download} alt="" className="cursor-pointer hover:border-b-[2px] border-black"/> */}
                <Button variant="contained" component="label">
                  Upload
                  <input
                    accept="image/*"
                    multiple
                    type="file"
                    className="hidden"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
