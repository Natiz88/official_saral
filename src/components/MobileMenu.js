import React from "react";
import { useState, useEffect } from "react";
import { links } from "./../utils/LinkItems";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const MobileMenu = ({ isMenuOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  useEffect(() => {
    setHeading("");
    setSubHeading("");
  }, [isMenuOpen]);

  return (
    <div>
      <div
        className={
          isMenuOpen
            ? "z-10 md:hidden w-full fixed -top-[300px] left-0 pb-12 transition-top duration-700 ease-in-out shadow-lg bg-white flex flex-col items-center justify-around overflow-scroll"
            : "z-10 md:hidden w-full fixed top-[150px] left-0 transition-top duration-700 ease-in pb-12 shadow-lg bg-white flex flex-col items-center justify-around"
        }
      >
        {links.map((link) => (
          <div
            className={
              heading === link.name
                ? "w-full font-semibold text-left cursor-pointer group z-10 rounded-sm "
                : "w-full text-left text-[16px] md:cursor-pointer group z-10 border-t-2 rounded-sm"
            }
          >
            <p
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              className={
                heading === link.name
                  ? "text-black-600 bg-gray-200 text-[14px] py-2 flex justify-between items-center px-3"
                  : "py-2 flex cursor-pointer text-[14px] justify-between items-center px-3"
              }
            >
              {link.name}
              {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
            <div
              className={
                heading === link.name
                  ? "w-10/11 m-auto flex flex-col items-center justify-between "
                  : "w-10/11 m-auto hidden"
              }
            >
              {link.sublinks.map((mysublinks) => (
                <div className="w-full">
                  <p
                    onClick={() => {
                      subHeading !== mysublinks.Head
                        ? setSubHeading(mysublinks.Head)
                        : setSubHeading("");
                    }}
                    className={
                      subHeading !== mysublinks.Head
                        ? "w-full text-[14px] font-normal px-8 py-2 flex justify-between items-center border-t-2"
                        : "w-full text-[14px] font-semibold px-8 bg-gray-200 py-2 flex justify-between items-center border-t-2"
                    }
                  >
                    {mysublinks.Head}
                    {subHeading !== mysublinks.Head ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowUp />
                    )}
                  </p>
                  <div
                    className={
                      subHeading === mysublinks.Head ? "block w-full" : "hidden"
                    }
                  >
                    {mysublinks.sublink.map((slink) => (
                      <p className="text-sm text-[14px] px-16 font-normal py-2 hover:text-red-400 my-2">
                        {slink.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
