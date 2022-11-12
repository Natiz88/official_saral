import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image from "./../assets/heading.png";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../Redux/CartReducer";
import Banner from "./Banner";
import ProductDescription from "./ProductDescription";
import axios from "axios";
import { url } from "./../utils/URL";

const Categories = () => {
  const location = useLocation();
  const search = useLocation().search;
  const [heading, setHeading] = useState("");
  const [products, setProducts] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
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

  let { id } = useParams();
  let { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (type === "categories") {
      setHeading("sub-categories");
    } else {
      setHeading("Products");
    }
    axios
      .get(`${url}/${type}/${id}`)
      .then((res) =>
        type === "categories"
          ? setSubCategories(res?.data?.data?.categories?.subcategories || [])
          : setProducts(res?.data?.data?.subCategories?.products || [])
      )
      .catch((err) => console.log(err));
  }, [id, type]);

  // const item = links.find(
  //   (link) =>
  //     link.name.replace(/[^a-zA-Z]/g, "").toLowerCase() ===
  //     heading.replace(/[^a-zA-Z]/g, "").toLowerCase()
  // );
  // const subItem =
  //   subHeading !== null &&
  //   item &&
  //   item.sublinks // ) //     heading.replace(/[^a-zA-Z]/g, "").toLowerCase() //     link.name.replace(/[^a-zA-Z]/g, "").toLowerCase() === //   (link) => // .filter(
  //     .find(
  //       (sub) =>
  //         sub.Head.replace(/[^a-zA-Z]/g, "").toLowerCase() ===
  //         subHeading.replace(/[^a-zA-Z]/g, "").toLowerCase()
  //     );
  // console.log("item", item);
  // console.log("subItem", subItem);
  console.log("sub", subcategories);
  console.log("prod", products);

  return (
    <div>
      <Banner text={heading} />
      <div className="w-[80%] m-auto flex flex-wrap justify-center sm:justify-start">
        {type === "categories" &&
          subcategories.map((subs) => (
            <div
              className="w-[220px] h-[240px] cursor-pointer group shadow-lg rounded-[5px] my-4 mx-6 relative overflow-hidden"
              onClick={() => navigate(`/categories/${subs.id}/subcategories`)}
            >
              <img
                src={
                  subs?.photo ||
                  "https://api.printsewa.com.np/Files/Images/CategoryType/Image_637282284796561267.jpg"
                }
                alt="heading"
                className="h-[80%] w-full overflow-hidden group-hover:scale-[1.1] transition-all ease-in"
              />
              <p className="w-full h-[20%] absolute top-[80%] text-[15px] group-hover:text-red-400 bg-white flex justify-center items-center">
                {subs.name}
              </p>
            </div>
          ))}
        {type === "subcategories" && (
          <div className="w-full flex flex-wrap justify-center sm:justify-start m-2">
            {products.map((prod) => (
              <div onClick={() => navigate(`/product/${prod.id}`)}>
                <ProductDescription products={prod} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
