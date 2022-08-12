import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { links } from "./../utils/LinkItems";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function NavbarBottom() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  // useEffect(() => {
  //   setHeading("");
  //   setSubHeading("");
  // }, [isToggleActive]);

  return (
    <>
      <div className="hidden sm:flex z-1 bg-white w-[12%] h-[350px] shadow-lg m-auto absolute top-30 left-[15%] flex-col items-center justify-around">
        {links.map((link) => (
          <div
            onMouseLeave={() => setHeading("")}
            className="w-full h-full cursor-pointer"
          >
            <div
              onMouseEnter={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              className={
                heading === link.name
                  ? "w-full h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2 text-red-600 bg-gray-200"
                  : "w-full h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2"
              }
            >
              <p>{link.name}</p>
              {heading !== link.name ? (
                <IoIosArrowForward />
              ) : (
                <IoIosArrowBack />
              )}
            </div>

            <div
              className={
                heading === link.name
                  ? "absolute w-full h-full left-full top-0 bg-white shadow-lg"
                  : "hidden"
              }
            >
              <div className="w-full h-full relative flex flex-col">
                {link.sublinks.map((mysublinks) => (
                  <div
                    onMouseLeave={() => setSubHeading("")}
                    className="w-full"
                  >
                    <div
                      onMouseEnter={() => {
                        subHeading !== mysublinks.Head
                          ? setSubHeading(mysublinks.Head)
                          : setSubHeading("");
                      }}
                      className={
                        subHeading === mysublinks.Head
                          ? "h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2 text-red-600 bg-gray-200"
                          : "h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2"
                      }
                    >
                      <p>{mysublinks.Head}</p>
                      {subHeading === mysublinks.Head ? (
                        <IoIosArrowBack />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>

                    <div
                      className={
                        subHeading === mysublinks.Head
                          ? "absolute top-0 left-full w-[300px] h-full shadow-md bg-white overflow-scroll"
                          : "hidden"
                      }
                    >
                      {mysublinks.sublink.map((slink) => (
                        <div className="hover:bg-gray-200">
                          <p className="h-[35px] text-sm text-[14px] text-gray-600 hover:text-red-600 mx-2 flex items-center">
                            {slink.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavbarBottom;
