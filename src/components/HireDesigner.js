import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Option from "../assets/option.webp";
import Banner from "../assets/bannerHD.webp";
import SocialBanner from "../assets/socialBanner.webp";
import FootBanner from "../assets/footBanner.webp";

import DesignLinks from "./DesignLinks";
import Options from "./Options";
import Subcriptions from "./Subcriptions";
import SocailMediaDesign from "./SocailMediaDesign";

const HireDesigner = () => {
  const [options, setOptions] = useState([
    {
      id: 1,
      photo: Option,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
    },
    {
      id: 2,
      photo: Option,
      title: "Logo Creation",
      info: "Perfect for social media & web page interactions",
    },
    {
      id: 3,
      photo: Option,
      title: "Socail Media Header/Cover",
      info: "Perfect for social media & web page interactions",
    },
    {
      id: 4,
      photo: Option,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
    },
    {
      id: 5,
      photo: Option,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
    },
    {
      id: 6,
      photo: Option,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
    },
  ]);

  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      photo: Banner,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
      price: 799,
    },
    {
      id: 2,
      photo: Banner,
      title: "Socail Media & Digital",
      info: "Perfect for social media & web page interactions",
      price: 1799,
    },
  ]);

  const [socialMediaDesign, setSocialMediaDesign] = useState([
    {
      id: 1,
      photo: SocialBanner,
      title: "Socail Media Post",
      price: 799,
    },
    {
      id: 2,
      photo: SocialBanner,
      title: "Socail Media & WhatsApp Stories",
      price: 1799,
    },
    {
      id: 3,
      photo: SocialBanner,
      title: "Socail Media Header/Cover",
      price: 799,
    },
    {
      id: 4,
      photo: SocialBanner,
      title: "Youtube Video Thumbnail",
      price: 1799,
    },
  ]);
  return (
    <>
      {/* MainContainer */}
      <div className=" w-full flex justify-center items-center p-4 md:px-[10%] xl:px-[14%]">
        {/* Container */}
        <div className="h-[100%] w-full bg-white flex flex-col justify-center items-center gap-[2rem]">
          {/* Header */}
          <div className="flex flex-col justify-center items-center text-center">
            {/* Heading */}
            <h1 className="text-2xl font-semibold md:text-3xl">Graphic Design Services</h1>
            {/* Slogan 1 */}
            <p>
              With millions of users constanlty online, digital marketing is the
              way to go for businesses!
            </p>
            {/* Slogan 2 */}
            <p>
              Create stunning marketing visuals for your brand to gain a
              dominating presence in the digital era
            </p>
            {/* Links */}
            <DesignLinks />
            {/* End Links */}
          </div>
          {/* End of Header */}
          {/* Options */}
          <div className="w-[90%] grid grid-cols-3 gap-3 mt-[1rem] md:grid-cols-6 md:w-full">
            {options.map((options) => {
              return (
                <Link to="/option">
                  <Options key={options.id} options={options} />
                </Link>
              );
            })}
          </div>
          {/* End of Options */}
          {/* Subscriptions Container*/}
          <div className="text-center flex flex-col gap-[1.5rem]">
            {/* Subscriptions */}
            <h1 className="text-xl font-semibold md:text-2xl">
              Logo & Graphic Design Service Subscriptions
            </h1>
            <div className="flex flex-col gap-4 text-center md:flex-row">
              {subscriptions.map((subscriptions) => {
                return (
                  <Link to="/subscriptions" className="flex flex-col gap-2">
                    <Subcriptions
                      key={subscriptions.id}
                      subscriptions={subscriptions}
                    />
                  </Link>
                );
              })}
            </div>
            {/* End of Subscriptions */}
          </div>
          {/* End of Subscriptions Container */}
          {/* Social Media Design */}
          <div className="text-center flex flex-col gap-[1.5rem]">
            <h1 className="text-xl font-semibold md:text-2xl">
              Social Media Poster Design Services
            </h1>
            <div className="flex flex-col gap-4 text-center md:flex-row">
              {socialMediaDesign.map((socialMediaDesign) => {
                return (
                  <Link
                    to="/socialmediadesign"
                    className="flex flex-row justify-center items-center text-center"
                  >
                    <SocailMediaDesign
                      key={socialMediaDesign.id}
                      socialMediaDesign={socialMediaDesign}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* End of Social Media Design */}
          {/* Header 2 */}
          <div className="w-[90%] flex flex-col justify-center items-center text-center">
            {/* Heading */}
            <h1 className="text-[18px] font-semibold">
              Are you looking for logo designers for your brand or business
              organisation?
            </h1>
            {/* Links */}
            <DesignLinks/>
            {/*End of Links */}
          </div>
          {/* End of Header2 */}
          {/* Footer */}
          <div className="flex flex-col gap-1 justify-center items-center md:flex-row md:gap-[2rem]">
            <img src={FootBanner} alt="" className="w-full md:w-[50%]"/>
            <div className="text-center flex flex-col justify-center items-center gap-1">
              <h1 className="w-[90%] text-xl font-semibold md:text-2xl">
                Are you looking for logo designers for your brand or
                organisation?
              </h1>
              <p>
                We'll help you design a new minimalist or corporate logo for
                you. We are a seasoned graphic design team with decades of
                experience
              </p>
              <h1 className="text-[18px] font-semibold">
                For as low as Rs.1699 for your business
              </h1>
              <button className="bg-blue-800 text-white p-2 rounded mb-[1rem]">
                Know More About Logo Creation
              </button>
            </div>
          </div>
          {/* End of Footer */}
        </div>
        {/* End of Container */}
      </div>
      {/* End of MainContainer */}
    </>
  );
};

export default HireDesigner;
