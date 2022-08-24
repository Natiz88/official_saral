import React from "react";
import Banner from "./Banner";
import Edit from "../assets/edit.svg";

const Profile = () => {
  const profileData = {
    name: "Manish Rai",
    userName: "Manish",
    typeOfUser: "individual",
    email: "manish@gmail.com",
    mobileNumber: 9801919288,
  };
  const addressData ={
    city: "Dharan",
    streetAddress : "Itahari-6,Sunsari",
    mobileNumber: 9801919277,
  }
  return (
    <div>
      <Banner text="My Profile" />
      <div className="flex flex-col justify-center gap-[2rem] p-[2rem] md:px-[6rem] lg:flex-row lg:px-[8rem] xl:px-[10rem]">
        <div className="w-full bg-white border-[0.5px] shadow-xl flex flex-col gap-[1rem] p-[1rem]">
          <div className="flex gap-[1rem]">
            <h1 className="text-[20px] text-[#E5113C] font-semibold">Personal Profile</h1>
            <img src={Edit} alt="" className="w-[20px]"/>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            <div>
              <h1 className="font-semibold">Full Name</h1>
              {/* <p className="text-slate-600">{profileData.name}</p> */}
              <input type="text" placeholder=" Full Name" className="border-b-2"/>
            </div>
            <div>
              <h1 className="font-semibold">User Name</h1>
              <p className="text-slate-600">{profileData.userName}</p>
            </div>
            <div>
              <h1 className="font-semibold">Type of User</h1>
              <p className="text-slate-600">{profileData.typeOfUser}</p>
            </div>
            <div>
              <h1 className="font-semibold">Email</h1>
              <p className="text-slate-600">{profileData.email}</p>
            </div>
            <div>
              <h1 className="font-semibold">Mobile Number</h1>
              <p className="text-slate-600">{profileData.mobileNumber}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-[0.5px] shadow-2xl flex flex-col gap-[1rem] p-[1rem]">
            <div className="flex gap-[1rem]">
                <h1 className="text-[20px] text-[#1874D1] font-semibold">Address</h1>
                <img src={Edit} alt="" className="w-[20px]"/>
            </div>
            <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
                <div>
                    <h1 className="font-semibold">City</h1>
                    <p className="text-slate-600">{addressData.city}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Street Address</h1>
                    <p className="text-slate-600">{addressData.streetAddress}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Contact Number</h1>
                    <p className="text-slate-600">{addressData.mobileNumber}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
