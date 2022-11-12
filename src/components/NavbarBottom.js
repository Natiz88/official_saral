import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { links } from "./../utils/LinkItems";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { url } from "./../utils/URL";

function NavbarBottom() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [links, setLinks] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isPosCorrect, setPosCorrect] = useState(true);

  // const links = useSelector((state) => state.cart.links);

  useEffect(() => {
    axios
      .get(`${url}/category`)
      .then((res) => setLinks(res?.data || []))
      .catch((err) => console.log("er", err));
  }, []);

  console.log("links", links[0]);

  const mouse = (e) => {
    const main = document.getElementById("main");
    let bnds = main.getBoundingClientRect();
    let x = e.clientX - bnds.left;
    const win = window.innerWidth;
    win - x > 350 ? setPosCorrect(true) : setPosCorrect(false);
  };

  const navigate = useNavigate();
  const clickHandler = (id, type) => {
    navigate(`/categories/${id}/${type}`);
  };

  const classChild = (sublinks) => {
    if (subHeading === sublinks.name) {
      return "absolute top-0 right-full min-w-[250px] px-1 h-full shadow-md bg-white overflow-auto z-50";
    } else if (subHeading !== sublinks.name) {
      return "hidden";
    }
  };

  const clicked = () => {
    console.log("clisdsnak");
  };

  return (
    <>
      <div
        id="main"
        className=" hidden md:flex z-30 bg-white w-full max-h-[80px] flex-wrap min-h-[35px] shadow-lg m-auto items-center border-b-2 border-gray-300 justify-around px-8"
      >
        {links.map((link) => (
          <div
            onMouseLeave={() => setHeading("")}
            className="cursor-pointer relative [&:nth-child(1)]"
          >
            <div
              onMouseEnter={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              onClick={() => clickHandler(link.id, "categories")}
              className={
                heading === link.name
                  ? "md:ml-4 h-[35px] flex justify-between items-center cursor-pointer text-[14px] text-red-600 relative px-2"
                  : "md:ml-4 h-[35px] flex items-center cursor-pointer text-[14px] px-2 "
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
                  ? "absolute min-w-[150px] left-0 top-full bg-white shadow-lg z-40"
                  : "hidden"
              }
            >
              <div className="w-full min-h-[300px] bg-white shadow-md flex flex-col">
                {link.sub_categories.map((mysublinks) => (
                  <div
                    onMouseLeave={() => setSubHeading("")}
                    onMouseMove={mouse}
                    className="w-full"
                  >
                    <div
                      onMouseEnter={() => {
                        subHeading !== mysublinks.name
                          ? setSubHeading(mysublinks.name)
                          : setSubHeading("");
                      }}
                      onClick={() =>
                        clickHandler(mysublinks.id, "subcategories")
                      }
                      className={
                        subHeading === mysublinks.name
                          ? "h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2 text-red-600 bg-gray-200"
                          : "h-[35px] flex justify-between items-center cursor-pointer text-[14px] px-2"
                      }
                    >
                      <p>{mysublinks.name}</p>
                      {subHeading === mysublinks.name ? (
                        <IoIosArrowBack />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>
                    {/* 
                    {isPosCorrect ? (
                      <div
                        className={
                          subHeading === mysublinks.name
                            ? "absolute top-0 left-full min-w-[250px] px-1 h-full shadow-md bg-white overflow-auto z-50"
                            : "hidden"
                        }
                      >
                        {mysublinks.products.map((slink) => (
                          <div className="hover:bg-gray-200">
                            <p className="h-[35px] text-sm text-[14px] text-gray-600 hover:text-red-600 flex items-center">
                              {slink.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={
                          subHeading === mysublinks.name
                            ? "absolute top-0 right-full min-w-[250px] h-full shadow-md bg-white overflow-auto z-50"
                            : "hidden"
                        }
                      >
                        {mysublinks.products.map((slink) => (
                          <div
                            className="hover:bg-gray-200"
                            // onClick={() => navigate(`/product/${slink.id}`)}
                          >
                            <p
                              className="h-[35px] text-sm text-[14px] text-gray-600 hover:text-red-600 flex items-center"
                              onClick={clicked}
                            >
                              {slink.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile menus */}
    </>
  );
}

export default NavbarBottom;
