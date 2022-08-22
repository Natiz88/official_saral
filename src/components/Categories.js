import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image from "./../assets/heading.png";
import NavbarBottom from "./NavbarBottom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../Redux/CartReducer";

const Categories = () => {
  const location = useLocation();
  const search = useLocation().search;
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const links = useSelector((state) => state.cart.links);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const dispatch = useDispatch();
  const addToCart = (name) => {
    // if (!loggedIn) {
    //   navigate("/login");
    //   return;
    // }
    const obj = { name: name };
    dispatch(cartActions.addToCart(obj));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const head = new URLSearchParams(search).get("heading");
    const sub = new URLSearchParams(search).get("subheading");
    // const head = location.search
    //   .replace(/[^a-zA-Z]/g, "")
    //   .replace("heading", "")
    //   .toLowerCase();
    setHeading(head);
    setSubHeading(sub);
  }, [location]);

  console.log("heading", heading, subHeading);
  const item = links.find(
    (link) =>
      link.name.replace(/[^a-zA-Z]/g, "").toLowerCase() ===
      heading.replace(/[^a-zA-Z]/g, "").toLowerCase()
  );
  const subItem =
    subHeading !== null &&
    item &&
    item.sublinks // ) //     heading.replace(/[^a-zA-Z]/g, "").toLowerCase() //     link.name.replace(/[^a-zA-Z]/g, "").toLowerCase() === //   (link) => // .filter(
      .find(
        (sub) =>
          sub.Head.replace(/[^a-zA-Z]/g, "").toLowerCase() ===
          subHeading.replace(/[^a-zA-Z]/g, "").toLowerCase()
      );
  console.log("item", item);
  console.log("subItem", subItem);

  return (
    <div>
      <div className="w-full h-[200px]">
        <div className="hidden w-full h-[17%] md:flex items-center ">
          <div
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
            className="ml-[9%] h-full "
          >
            <p
              onClick={() => setToggle(!toggle)}
              className="w-full h-full cursor-pointer flex items-center justify-between"
            >
              Categories {!toggle ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </p>
            {toggle && <NavbarBottom />}
          </div>
        </div>

        <h1 className="w-full h-[83%] flex items-center justify-start text-white text-[22px] sm:text-[30px] bg-gradient-to-b from-red-600 to-blue-200">
          Categories
        </h1>
      </div>
      <div className="w-[80%] m-auto flex flex-wrap justify-center sm:justify-start">
        {item &&
          !subItem &&
          item.sublinks.map((subs) => (
            <Link
              to={`/categories?heading=${item.name}&subheading=${subs.Head}`}
            >
              <div className="w-[220px] h-[240px] cursor-pointer group shadow-lg rounded-[5px] my-4 mx-6 relative overflow-hidden">
                <img
                  src={Image}
                  alt="heading"
                  className="h-[80%] w-full overflow-hidden group-hover:scale-[1.1] transition-all ease-in"
                />
                <p className="w-full h-[20%] absolute top-[80%] text-[15px] group-hover:text-red-400 bg-white flex justify-center items-center">
                  {subs.Head}
                </p>
              </div>
            </Link>
          ))}
        {item &&
          subItem &&
          subItem.sublink.map((subs) => (
            <div className="w-[220px] h-[240px] cursor-pointer group shadow-lg rounded-[5px] my-4 mx-6 relative overflow-hidden">
              <img
                src={Image}
                alt="heading"
                className="h-[80%] w-full overflow-hidden group-hover:scale-[1.1] transition-all ease-in"
              />
              <p className="w-full h-[20%] text-[14px] absolute top-[80%] group-hover:text-red-400 bg-white flex justify-center items-center">
                {subs.name}
                <button
                  className="px-4 py-2 bg-green-500"
                  onClick={() => addToCart(subs.name)}
                >
                  Add to cart
                </button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
