import React from "react";
import { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Banner from "./Banner";
import Edit from "../assets/edit.svg";
import Show from "../assets/show.svg";
import Download from "../assets/download.svg";
import Contact from "../assets/Contact Us.png";

import ModalPop from "./ModalPop";

const Profile = ({ isModalPop, setModalPop }) => {
  const [panImg, setPanImg] = useState(Contact);

  const [name, setName] = useState("Manish Rai");
  const [userName, setUserName] = useState("Manish");
  const [email, setEmail] = useState("manish@gmail.com");
  const [typeOfUser, setTypeOfUser] = useState("Individual");
  const [mobileNumber, setMobileNumber] = useState(9801919288);

  const [city, setCity] = useState("Dharan");
  const [streetAddress, setStreetAddress] = useState("Itahari-6,Sunsari");
  const [contactNumber, setContactNumber] = useState(9801919288);

  const [panNumber, setPanNumber] = useState(1234567);

  const [editProfile, setEditProfile] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editDocument, setEditDocument] = useState(false);

  const users = [
    { value: "Individual", label: "Individual" },
    { value: "Corporate", label: "Corporate" },
  ];
  const profileData = {
    // name: "Manish Rai",
    name: name,
    // userName: "Manish",
    userName: userName,
    // typeOfUser: "individual",
    typeOfUser: typeOfUser,
    // email: "manish@gmail.com",
    email: email,
    // mobileNumber: 9801919288,
    mobileNumber: mobileNumber,
  };
  const addressData = {
    // city: "Dharan",
    // streetAddress: "Itahari-6,Sunsari",
    // mobileNumber: 9801919277,
    city: city,
    streetAddress: streetAddress,
    mobileNumber: contactNumber,
  };
  const documentData = {
    docType: "Pan Certificate",
    panNumber: panNumber,
    certificateImg: panImg,
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setPanImg(URL.createObjectURL(file));
  };
  const details = async (e) => {
    try {
      const token = localStorage.getItem("token");
      // const token = "6|p0DSoCMJSkgefsCJvTRNdv58ETeFwj27ewzvglXy";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
<<<<<<< HEAD
      await axios
        .get("http://192.168.100.17:8081/api/profile", config)
        .then((response) => {
          setName(response.data.name);
          setUserName(response.data.name);
          setTypeOfUser(response.data.type.charAt(0).toUpperCase()+response.data.type.slice(1));
          setEmail(response.data.email);
          setMobileNumber(response.data.mobile_number);
          // setCity(response.data.city);
          setCity(response.data.address.split(" ")[0]);
          setStreetAddress(response.data.address);
          setContactNumber(response.data.mobile_number);
          // setPanNumber(response.data.pan_number);
          // setPanImg(response.data.pan_document);
          console.log(response.data);
        });
=======
      const response = await axios.get(
        "http://192.168.100.17:8081/api/profile",
        config
      );
      setName(response.data.name);
      setUserName(response.data.name);
      setTypeOfUser(
        response.data.type.charAt(0).toUpperCase() + response.data.type.slice(1)
      );
      setEmail(response.data.email);
      setMobileNumber(response.data.mobile_number);
      // setCity(response.data.city);
      setCity(response.data.address.split(" ")[0]);
      setStreetAddress(response.data.address);
      setContactNumber(response.data.mobile_number);
      // setPanNumber(response.data.pan_number);
      console.log(response.data);
>>>>>>> 8b4b6a732308bb50486b604342b835efe21bd4c6
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    details();
  }, []);
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
              className={
                editProfile
                  ? "hidden"
                  : "w-[20px] cursor-pointer hover:border-[#E5113C] hover:border-b-[2px]"
              }
              onClick={() => {
                setEditProfile(true);
              }}
            />
            {/* <button className=" border-[#E5113C] border-2 rounded-md hover:bg-[#E5113C] hover:shadow-[#E5113C] hover:shadow-md hover:text-white w-[100px]"> */}
            <button
              className={
                !editProfile
                  ? "hidden"
                  : " border-[#E5113C] border-2 rounded-md hover:bg-[#E5113C] hover:text-white w-[100px]"
              }
              onClick={() => {
                setEditProfile(false);
              }}
            >
              Update
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            <div>
              <h1 className={editProfile ? "hidden" : "font-semibold"}>
                Full Name
              </h1>
              <p className={editProfile ? "hidden" : "text-slate-600"}>
                {profileData.name}
              </p>
              <div className={!editProfile ? "hidden" : ""}>
                <TextField
                  required
                  id="outlined-required"
                  label="Full Name"
                  defaultValue={profileData.name}
                  onChange={(e) => setName(e.target.value)}
                  // className={!editProfile?"hidden":""}
                />
              </div>
            </div>
            <div>
              <h1 className={editProfile ? "hidden" : "font-semibold"}>
                User Name
              </h1>
              <p className={editProfile ? "hidden" : "text-slate-600"}>
                {profileData.userName}
              </p>
              <div className={!editProfile ? "hidden" : ""}>
                <TextField
                  required
                  id="outlined-required"
                  label="User Name"
                  defaultValue={profileData.userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h1 className={editProfile ? "hidden" : "font-semibold"}>
                Type of User
              </h1>
              <p className={editProfile ? "hidden" : "text-slate-600"}>
                {profileData.typeOfUser}
              </p>
              <div className={!editProfile ? "hidden" : ""}>
                <TextField
                  id="outlined"
                  select
                  label="Type of User"
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
            </div>
            <div>
              <h1 className={editProfile ? "hidden" : "font-semibold"}>
                Email
              </h1>
              <p className={editProfile ? "hidden" : "text-slate-600"}>
                {profileData.email}
              </p>
              <div className={!editProfile ? "hidden" : ""}>
                <TextField
                  required
                  id="outlined-required"
                  type="email"
                  label="Email"
                  defaultValue={profileData.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h1 className={editProfile ? "hidden" : "font-semibold"}>
                Mobile Number
              </h1>
              <p className={editProfile ? "hidden" : "text-slate-600"}>
                {profileData.mobileNumber}
              </p>
              <div className={!editProfile ? "hidden" : ""}>
                <TextField
                  id="outlined-required"
                  type="number"
                  label="Mobile Number"
                  defaultValue={profileData.mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
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
              className={
                editAddress
                  ? "hidden"
                  : "w-[20px] cursor-pointer hover:border-[#1874D1] hover:border-b-[2px]"
              }
              onClick={() => {
                setEditAddress(true);
              }}
            />
            {/* <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-md hover:text-white w-[100px]"> */}
            <button
              className={
                !editAddress
                  ? "hidden"
                  : " border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:text-white w-[100px]"
              }
              onClick={() => {
                setEditAddress(false);
              }}
            >
              Update
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            <div>
              <h1 className={editAddress ? "hidden" : "font-semibold"}>City</h1>
              <p className={editAddress ? "hidden" : "text-slate-600"}>
                {addressData.city}
              </p>
              <div className={!editAddress ? "hidden" : ""}>
                <TextField
                  id="outlined-required"
                  label="City"
                  defaultValue={addressData.city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h1 className={editAddress ? "hidden" : "font-semibold"}>
                Street Address
              </h1>
              <p className={editAddress ? "hidden" : "text-slate-600"}>
                {addressData.streetAddress}
              </p>
              <div className={!editAddress ? "hidden" : ""}>
                <TextField
                  id="outlined-required"
                  label="Street Address"
                  defaultValue={addressData.streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h1 className={editAddress ? "hidden" : "font-semibold"}>
                Contact Number
              </h1>
              <p className={editAddress ? "hidden" : "text-slate-600"}>
                {addressData.mobileNumber}
              </p>
              <div className={!editAddress ? "hidden" : ""}>
                <TextField
                  id="outlined-required"
                  type="number"
                  label="Contact Number"
                  defaultValue={addressData.mobileNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            typeOfUser === "Individual"
              ? "hidden"
              : "w-full bg-white border-[0.5px] shadow-2xl flex flex-col gap-[1rem] p-[1rem]"
          }
        >
          <div className="flex gap-[1rem] text-base">
            <h1 className="text-[20px] text-[#1874D1] font-semibold">
              Document Details
            </h1>
            <img
              src={Edit}
              alt=""
              className={
                editDocument
                  ? "hidden"
                  : "w-[20px] cursor-pointer hover:border-[#1874D1] hover:border-b-[2px]"
              }
              onClick={() => {
                setEditDocument(true);
              }}
            />
            <p className="text-[13px] text-[#E5113C]">*Unverified</p>
            {/* <button className=" border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-md hover:text-white w-[100px]"> */}
            <button
              className={
                !editDocument
                  ? "hidden"
                  : " border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:text-white w-[100px]"
              }
              onClick={() => {
                setEditDocument(false);
              }}
            >
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
                <div className="bg-[#1875d119] h-[85px] w-[165px] flex justify-center">
                  <img
                    src={documentData.certificateImg}
                    alt="Certificate Image"
                  />
                </div>
                <div className={!editDocument ? "hidden" : "mt-[0.5rem]"}>
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      onChange={onImageChange}
                      accept="image/*"
                      multiple
                      type="file"
                      className="hidden"
                    />
                  </Button>
                </div>
              </div>
              <div className="w-[20px] flex flex-col gap-[1rem]">
                <img
                  src={Show}
                  alt=""
                  className={
                    editDocument
                      ? "hidden"
                      : "cursor-pointer hover:border-b-[2px] border-black"
                  }
                  onClick={() => {
                    setModalPop(true);
                  }}
                />
                <ModalPop
                  isModalPop={isModalPop}
                  setModalPop={setModalPop}
                  bodyImg={documentData.certificateImg}
                  btn1="Done"
                  onclickBtn1={() => {
                    setModalPop(false);
                  }}
                />
                <button>
                  <a href={documentData.certificateImg} download>
                    <img
                      src={Download}
                      alt=""
                      className={
                        editDocument
                          ? "hidden"
                          : "cursor-pointer hover:border-b-[2px] border-black"
                      }
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
