import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image from "./../assets/heading.png";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../Redux/CartReducer";
import Banner from "./Banner";
import ProductDescription from "./ProductDescription";

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
      <Banner text="categories" />
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
