import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Done from "../assets/done.svg";

const Contact = () => {
  // const navigate = useNavigate();
  const [messageSuccess, setMessageSuccess] = useState(true);

  const [address, setAddress] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [landline, setLandline] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setlinkedIn] = useState("");

  const [mName, setMName] = useState("");
  const [mEmail, setMEmail] = useState("");
  const [mPhone, setMPhone] = useState("");
  const [mMessage, setMMessage] = useState("");

  const [src, setSrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.4656688965665!2d87.2750432149648!3d26.66558548323467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d74c533b773%3A0x9feb33f6bd3009fd!2sBlue%20Fox%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1658379489469!5m2!1sen!2snp")

  const details = async (e) => {
    try {
      // const token = localStorage.getItem('token');
      const token = "RcSZx1bJobuyGvfku0DLb3ZdEeAVJI9TMjvkTnn8";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios
        .get("http://192.168.1.98:8081/api/about", config)
        .then((response) => {
          setAddress(response.data[0].address);
          setMobile_number(response.data[0].mobile_number);
          setLandline(response.data[0].landline);
          setEmail(response.data[0].email);
          setFacebook(response.data[0].facebook);
          setTwitter(response.data[0].twitter);
          setInstagram(response.data[0].instagram);
          setlinkedIn(response.data[0].linkedIn);

          
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    details();
  }, []);

  // const sendMessage = async (e) => {
  //   try {
      
  //     const messageData = {
  //       name: mName,
  //       email: mEmail,
  //       phone: mPhone,
  //       message: mMessage
  //     }
  //     const config = {
        
  //     }
  //     await axios.post("/api",messageData,config)
  //     .then((response)=>{
  //       if(response.status ===200)
  //       {
  //         setMessageSuccess(!messageSuccess);
  //       }
  //     });
  //   } catch (error) {
      
  //   }
  // }
  return (
    <>
      {/* page */}
      <div className=" flex flex-col justify-center items-center gap-[2rem]">
        <div className=" h-[8rem] w-full text-[40px] text-center text-white bg-blue-800">
          CONTACT US
        </div>
        <div className=" w-[90%] flex flex-col gap-[4rem] md:w-[80%] lg:flex-row lg:w-[80%] lg:gap-[2rem]">
          {/* map */}
          <div className=" h-[20rem] w-[100%] lg:h-[28rem] lg:w-[50%]">
            <iframe
            title="map"
              src={src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onClick={(e)=>console.log("hello",e)}
            />
          </div>
          {/* form */}
          <div className=" flex flex-col gap-4 lg:w-[50%]">
            <h1 className="text-[24px] font-semibold ">Message Us</h1>
            <div>
              <p
                className={
                  !messageSuccess ? "bg-green-400 flex gap-2 p-2" : "hidden"
                }
              >
                Massage Sent <img src={Done} alt="done" className="w-[23px]" />
              </p>
            </div>
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setMName(e.target.value);
                }}
                value={mName}
                className="border-b border-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setMEmail(e.target.value);
                }}
                value={mEmail}
                className="border-b border-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={(e) => {
                  setMPhone(e.target.value);
                }}
                value={mPhone}
                className="border-b border-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                rows="5"
                cols="10"
                name="message"
                onChange={(e) => setMMessage(e.target.value)}
                value={mMessage}
                className="border-b border-black"
              />
            </div>
            <button
              className="bg-blue-800 hover:bg-blue-900 rounded text-white p-1"
              // onClick={details}
              onClick={() => {
                setMessageSuccess(!messageSuccess);
              }}
            >
              Send
            </button>
          </div>
        </div>
        {/* footer */}
        <div className=" w-full flex flex-col justify-around gap-6 lg:flex-row lg:w-[80%]">
          <div className="flex flex-1 flex-col justify-center items-center">
            <img src={Location} alt="location" className="w-[2rem]" />
            <h2 className="font-semibold">Location</h2>
            <p>{address.charAt(0).toUpperCase() + address.slice(1)}</p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <img src={Phone} alt="phone" className="w-[2rem]" />
            <h2 className="font-semibold">Phone</h2>
            <p>{mobile_number}</p>
            <p>{landline}</p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <img src={Mail} alt="mail" className="w-[2rem]" />
            <h2 className="font-semibold">Mail</h2>
            <p>{email}</p>
          </div>
        </div>
        {/* socials */}
        <h1 className=" text-[24px]">Talk in Socials</h1>
        <div className="flex justify-evenly w-full p-4">
          <a href={facebook} className="">
            <img
              src={Facebook}
              alt="facebook"
              className="w-[3rem] hover:w-[calc(100%+1rem)] "
            />
          </a>
          <a href={twitter}>
            <img src={Twitter} alt="facebook" />
          </a>
          <a href={instagram}>
            <img src={Instagram} alt="facebook" />
          </a>
          <a href={linkedIn}>
            <img src={Linkedin} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
