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
import cod from "./../component/Images/PaymentProcess/Cod.png";
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
        <div className="flex flex-col w-4/5 m-auto text-white">
          {/* First div of four column */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full sm:w-[15%] text-15px">
              <p className="py-1 cursor-pointer">FAQs</p>
              <p className="py-1 cursor-pointer">Terms & Conditions</p>
              <p className="py-1 cursor-pointer">Privacy Policy</p>
              <p className="py-1 cursor-pointer">Delivery</p>
              <p className="py-1 cursor-pointer">Need Help?</p>
            </div>
            <div className="w-full sm:w-[30%] mt-4 sm:mt-0 text-[15px] ">
              <p className="font-bold uppercase">About us</p>
              <p className="pt-2">
                Saral Print is a complete e-commerce site and the first-ever
                online printing service in Purwanchal. We are a comprehensive
                solution partner guaranteeing the best quality at your door in a
                comparatively low rate. Connect with us to step ahead in the
                printing world.
              </p>
            </div>
            <div className="w-full sm:w-[15%]  mt-4 sm:mt-0 text-[15px]">
              <p className="font-bold uppercase mb-1 ">Payment Options</p>
              <div className=" flex sm:flex-col">
                <img
                  src={cod}
                  alt="logo"
                  className="h-[60px] w-[35%] sm:w-[60%]"
                />
                <img
                  src={khalti}
                  alt="logo"
                  className="h-[50px] w-[35%] sm:w-[80%]"
                />
                <img
                  src={connectIps}
                  alt="logo"
                  className="h-[40px] sm:mt-1 w-[35%] sm:w-[55%]"
                />
              </div>
            </div>
            <div className="w-full sm:w-[30%] text-[15px]  mt-4 sm:mt-0">
              <p className="font-bold uppercase"> Customer Services</p>
              <p className="my-2">
                Need assistance or have any special inquiries? We're here to
                help:
              </p>
              <p className="pb-4">
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
          <div className="flex mt-10 flex-col-reverse sm:justify-around  md:flex-row md:justify-between">
            <div className="w-[70%] sm:w-[50%] md:w-[30%]">
              <img src={FooterLogo} alt="logo" className="w-[60%]" />
              <p className="text-[13px] mt-1">
                @ 2022 Saral Print All Rights Reserved
              </p>
            </div>
            <div className="flex md:flex-row sm:justify-between">
              <div className="flex sm:mt-2 w-full gap-3 sm:w-[100%] mb-5">
                <GrFacebookOption className="text-[25px] md:text-[30px] border-2 hover:cursor-pointer hover:bg-red-400" />
                <AiFillInstagram className=" text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:bg-red-400" />
                <GrLinkedinOption className="text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:bg-red-400" />
                <AiFillYoutube className="text-[25px] border-2 md:text-[30px] hover:cursor-pointer hover:bg-red-400" />
                <AiOutlineTwitter className="text-[25px] border-2 md:text-[30px]  hover:cursor-pointer hover:bg-red-400" />
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
