import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "./../utils/LinkItems";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

function NavbarBottom() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(true);

  // const links = useSelector((state) => state.cart.links);

  console.log("sib", links[0]?.sub_categories || "nope");

  // useEffect(() => {
  //   setHeading("");
  //   setSubHeading("");
  // }, [isToggleActive]);

  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <>
      <div className="hidden md:flex z-30 bg-white md:wfull max-h-[80px] flex-wrap min-h-[35px] shadow-lg m-auto items-center border-b-2 border-gray-300">
        {links.map((link) => (
          <div
            onMouseLeave={() => setHeading("")}
            className="cursor-pointer relative [&:nth-child(3)]"
          >
            <div
              onMouseEnter={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              onClick={() => clickHandler()}
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
                    className="w-full"
                  >
                    <Link
                      to={`/categories?heading=${link.name}&subheading=${mysublinks.name}`}
                    >
                      <div
                        onMouseEnter={() => {
                          subHeading !== mysublinks.name
                            ? setSubHeading(mysublinks.name)
                            : setSubHeading("");
                        }}
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
                    </Link>

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
