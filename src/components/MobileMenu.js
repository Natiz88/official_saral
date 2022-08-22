import React from "react";
import { useState, useEffect } from "react";
import { links } from "./../utils/LinkItems";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const MobileMenu = ({ isMenuOpen, handler }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setHeading("");
    setSubHeading("");
  }, [isMenuOpen]);

  const category = (link) => {
    navigate(`/categories?heading=${link.name}`);
    handler();
  };

  const subCategory = (link, mysublinks) => {
    navigate(`/categories?heading=${link.name}&subheading=${mysublinks.Head}`);
    handler();
  };

  return (
    <div>
      <div
        className={
          !isMenuOpen
            ? "z-10 md:hidden w-full absolute -top-[300px] left-0 pb-12 transition-top duration-700 ease-in-out shadow-lg bg-white flex flex-col items-center justify-around "
            : "z-10 md:hidden w-full absolute top-[150px] left-0 transition-top duration-700 ease-in pb-12 shadow-lg bg-white flex flex-col items-center justify-around"
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
              className={
                heading === link.name
                  ? "text-black-600 bg-gray-200 text-[14px] flex justify-between items-center h-[35px] px-3"
                  : "flex cursor-pointer text-[14px] justify-between items-center px-3 h-[35px]"
              }
            >
              {/* <Link
                to={`/categories?heading=${link.name}`}
                className="w-[70%] h-full flex items-center"
              > */}
              <p
                className="w-[70%] h-full flex items-center"
                onClick={() => category(link)}
              >
                {link.name}
              </p>
              {/* </Link> */}
              <span
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
                className="w-[30%] h-full flex justify-end items-center"
              >
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </p>
            <div
              className={
                heading === link.name
                  ? "w-10/11 m-auto flex flex-col items-center justify-between overflow-auto"
                  : "w-10/11 m-auto hidden"
              }
            >
              {link.sublinks.map((mysublinks) => (
                <div className="w-full">
                  <p
                    className={
                      subHeading !== mysublinks.Head
                        ? "w-full text-[14px] h-[35px] font-normal px-8 flex justify-between items-center border-t-2"
                        : "w-full text-[14px] h-[35px] font-semibold px-8 bg-gray-200 flex justify-between items-center border-t-2"
                    }
                  >
                    <p
                      className="w-[70%] h-full flex items-center"
                      onClick={() => subCategory(link, mysublinks)}
                    >
                      {mysublinks.Head}
                    </p>
                    <span
                      onClick={() => {
                        subHeading !== mysublinks.Head
                          ? setSubHeading(mysublinks.Head)
                          : setSubHeading("");
                      }}
                      className="w-[30%] flex justify-end items-center h-full"
                    >
                      {subHeading !== mysublinks.Head ? (
                        <IoIosArrowForward />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </span>
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
