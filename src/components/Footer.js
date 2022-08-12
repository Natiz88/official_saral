import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import FooterLogo from "./../component/Images/FooterLogo/footerLogo.png";
import khalti from "./../component/Images/PaymentProcess/khalti.png";
import connectIps from "./../component/Images/PaymentProcess/Connectips.png";
import cod from "./../component/Images/PaymentProcess/COD.jpg";
import ItemsFooter from "./../components/ItemsFooter";

// import ItemsFooter from "./../components/ItemsFooter"
function Footer() {
  return (
    // <div className="w-full flex flex-col justify-around bg-sky-500 text-white">
    //   <div className="flex w-full justify-around items-center">
    //     <div className="w-1/4 text-lg font-bold">
    //       <p className="text-[1.1rem] mb-1">FAQs</p>
    //       <p className="text-[1.1rem] mb-1">Terms and Conditions</p>
    //       <p className="text-[1.1rem] mb-1">Contact us</p>
    //     </div>
    // <div className=" ">
    //   <p className="text-[1.1rem] mb-1 font-bold uppercase">About us</p>
    //   <p className="w-2/4 text-[14px]">
    //     Saral Print is a complete e-commerce site and the first-ever online
    //     printing service in Purwanchal. We are a comprehensive solution partner
    //     guaranteeing the best quality at your door in a comparatively low
    //     rate. Connect with us to step ahead in the printing world.
    //   </p>
    // </div>
    //     {/* <div className="flex-1">
    //       <p className="text-[1.1rem] mb-1 font-bold uppercase">
    //         Payment Options
    //       </p>
    //     </div> */}

    //       <div className="w-1/4">
    //         <p className="text-[1.1rem] mb-1 font-bold uppercase">
    //           {" "}
    //           Customer Services
    //         </p>
    //         <p className="mb-2">
    //           Need assistance or have any special inquiries? We're here to help:
    //         </p>
    //         <p>
    //           9801919288 <br />
    //           +97714593222 <br />
    //           6:00 AM - 9:00 PM <br />
    //           <br />
    //           print@saralprint.com.np
    //         </p>
    //       </div>

    //       <div className="w-1/4">
    //         <p className="text-[1.1rem] font-bold uppercase">
    //           Premium Program
    //         </p>
    //         <p>
    //           Are you a frequent corporate client? With our premium program,
    //           you'll be assigned a personal account mana-ger and enjoy plenty of
    //           benefits.
    //         </p>
    //       </div>
    //       </div>
    //       <div>
    //     <div className="">
    //       <p className="text-[1.1rem] font-bold uppercase">NewsLetter</p>
    //       <p>Stay Tunned</p>
    //     </div>
    //     <div className="">
    //       <p className="text-3xl font-bold my-2">SARAL PRINT</p>
    //       <p>@ 2022 Saral Print All Rights Reserved</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className=" bg-sky-500 py-8">
        <div className="flex flex-col w-4/5 m-auto text-white  sm:grid-cols-2    md: ">
          {/* First div of four column */}
          <div className="flex flex-col md:flex-row gap-[2rem]">
            <div className="  text-lg font-normal md:w-[25%]">
              <p className="text-[0.8rem] ">FAQs</p>
              <p className="text-[0.8rem] ">Terms & Conditions</p>
              <p className="text-[0.8rem] ">Privacy Policy</p>
              <p className="text-[0.8rem] ">Delivery</p>
              <p className="text-[0.8rem] ">Need Help?</p>
            </div>
            <div className="flex-2 flex-col gap-1 ">
              <p className="text-[1.1rem] font-bold uppercase">About us</p>
              <p className=" text-[14px]">
                Saral Print is a complete e-commerce site and the first-ever
                online printing service in Purwanchal. We are a comprehensive
                solution partner guaranteeing the best quality at your door in a
                comparatively low rate. Connect with us to step ahead in the
                printing world.
              </p>
            </div>
            <div className="">
              <p className="text-[1.1rem] font-bold uppercase mb-1 ">
                Payment Options
              </p>
              <img src={cod} alt="logo" className="w-[40%] md:w-[30%] sm:" />
              <img
                src={khalti}
                alt="logo"
                className="w-[50%] mt-1 md:w-[40%] sm:"
              />
              <img
                src={connectIps}
                alt="logo"
                className="w-[40%] mt-1 md:w-[30%] sm:"
              />
            </div>
            <div className="mb-2 flex-1">
              <p className="text-[1.1rem] mb-1 font-bold uppercase">
                {" "}
                Customer Services
              </p>
              <p className="mb-2">
                Need assistance or have any special inquiries? We're here to
                help:
              </p>
              <p>
                9801919288 <br />
                +97714593222 <br />
                6:00 AM - 9:00 PM <br />
                <br />
                print@saralprint.com.np
              </p>
            </div>
          </div>

          <hr className="bg-white w-full h-[1px]" />

          {/* below underline there is also another child div */}
          <div className="flex mt-10 flex-col sm:justify-around  md:flex-row md:justify-between  gap-[1rem] ">
            <div className="w-[70%] sm:w-[50%] md:w-[30%]">
              <img src={FooterLogo} alt="logo" className="" />
              <p>@ 2022 Saral Print All Rights Reserved</p>
            </div>
            <div className="flex md:flex-row sm:justify-between">
              <div className="flex mt-2 w-full gap-3 sm:w-[100%] mb-5">
                <GrFacebookOption className="text-[25px] md:text-[30px] border-2 hover:cursor-pointer hover:border-red-400" />
                <AiFillInstagram className=" text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:border-red-400" />
                <GrLinkedinOption className="text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:border-red-400" />
                <AiFillYoutube className="text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:border-red-400" />
                <AiOutlineTwitter className="text-[25px] border-2 md:text-[30px]  hover:cursor-pointer hover:border-red-400" />
              </div>
            </div>
          </div>
          {/* <hr className="bg-white w-full h-[1px] mt-10" /> */}
        </div>
        {/* <ItemsFooter /> */}
      </div>
      <ItemsFooter />
    </>
  );
}

export default Footer;
