import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import FooterLogo from "./../component/Images/FooterLogo/footerLogo.png";
import khalti from "./../component/Images/PaymentProcess/khalti.png";
import connectIps from "./../component/Images/PaymentProcess/ips.png";
// import cod from "./../component/Images/PaymentProcess/cod.png";
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
      <div className=" bg-gradient-to-b from-gray-200 to-gray-200 py-8">
        <div className="flex flex-col w-4/5 lg:w-4/5  m-auto text-black">
          {/* First div of four column */}
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[15%] text-[15px]">
              <Link to="/faqs">
                <p className="py-1 cursor-pointer">FAQs</p>
              </Link>
              <Link to="/termsandconditions">
                <p className="py-1 cursor-pointer">Terms & Conditions</p>
              </Link>
              <Link to="/privacypolicy">
                <p className="py-1 cursor-pointer">Privacy Policy</p>
              </Link>
              <Link to="/refundpolicy">
                <p className="py-1 cursor-pointer">Refund Policy</p>
              </Link>
              <Link to="/cancellation">
                <p className="py-1 cursor-pointer">Cancellation Policy</p>
              </Link>
              <Link to="/deliveryterms">
                <p className="py-1 cursor-pointer">Delivery</p>
              </Link>
              <Link to="/contact">
                <p className="py-1 cursor-pointer">Need Help?</p>
              </Link>
            </div>
            <div className="w-full lg:w-[30%] mt-4 lg:mt-0 text-[15px] ">
              <Link to="/aboutus">
                <p className="font-bold uppercase">About us</p>
              </Link>
              <p className="pt-2">
                Saral Print is a complete e-commerce site and the first-ever
                online printing service in Purwanchal. We are a comprehensive
                solution partner guaranteeing the best quality at your door in a
                comparatively low rate. Connect with us to step ahead in the
                printing world.
              </p>
            </div>
            <div className="w-[80%] sm:w-1/2 lg:w-[18%]  mt-4 lg:mt-0 text-[14px]">
              <p className="font-bold uppercase mb-1 ">Payment Options</p>
              <div className=" flex md:flex-col w-full">
                <img
                  // src={cod}
                  alt="logo"
                  className="h-[35px] w-[70%] md:w-[35%] lg:w-[45%]"
                />
                <img
                  src={khalti}
                  alt="logo"
                  className="h-[35px] w-[75%] md:w-[40%] lg:w-[50%] md:mt-2"
                />
                <img
                  src={connectIps}
                  alt="logo"
                  className="h-[35px] w-[40%] md:w-[25%] lg:w-[30%] md:mt-2"
                />
              </div>
            </div>
            <div className="w-full lg:w-[29%] text-[15px]  mt-4 lg:mt-0">
              <p className="font-bold uppercase"> Customer Services</p>
              <p className="m-2">
                Need assistance or have any special inquiries? We're here to
                help:
              </p>
              <p className="pb-4 m-2">
                9801919288 <br />
                +97714593222 <br />
                6:00 AM - 9:00 PM <br />
                <br />
                print@saralprint.com.np
              </p>
            </div>
          </div>

          {/* <hr className="bg-white w-full h-[1px]" /> */}

          {/* below underline there is also another child div */}
          <div className="flex mt-10 flex-col-reverse lg:justify-between lg:flex-row md:justify-between">
            <div className="w-[60%] lg:w-[30%]">
              <img src={FooterLogo} alt="logo" className="w-[60%]" />
              <p className="text-[13px] mt-1">
                @ 2022 Saral Print All Rights Reserved
              </p>
            </div>
            <div className="flex md:flex-row md:justify-between">
              <div className="flex md:mt-2 w-full gap-3 md:w-[100%] mb-5">
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
      <hr className="bg-red-400 w-[70%] m-auto h-[3px]" />
      <ItemsFooter />
    </>
  );
}

export default Footer;
