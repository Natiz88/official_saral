import React from "react";
import { links } from "../utils/LinkItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "./Banner";

const Sitemap = () => {
  // const links = useSelector((state) => state.cart.links);
  return (
    <>
      <Banner text="Sitemap" />
      <div className="w-full bg-gradient-to-b from-gray-200 to-white">
        <div className="w-4/5  m-auto py-8 lg:h-[2000px] text-[12px] lg:flex flex-col flex-wrap text-gray-600">
          {links.map((link) => (
            <>
              <Link to={`/categories?heading=${link.name}`}>
                <h3 className="text-[12px] hover:underline cursor-pointer mt-2 font-semibold">
                  {link.name}
                </h3>
              </Link>
              {link.sub_categories.map((links) => (
                <>
                  <Link
                    to={`/categories?heading=${link.name}&subheading=${links.name}`}
                  >
                    <p className=" pl-4 hover:underline cursor-pointer">
                      {links.name}
                    </p>
                  </Link>
                  {links.products.map((sub) => (
                    <>
                      <p className="pl-8 hover:underline cursor-pointer">
                        {sub.name}
                      </p>
                    </>
                  ))}
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sitemap;
