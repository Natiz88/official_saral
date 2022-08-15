import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const links = useSelector((state) => state.cart.links);
  return (
    <div className="w-full bg-gray-300">
      <div className="w-4/5 bg-gray-300 m-auto py-8 lg:h-[2000px] text-[12px] lg:flex flex-col flex-wrap text-gray-600">
        {links.map((link) => (
          <>
            <Link to={`/categories?heading=${link.name}`}>
              <h3 className="text-[12px] hover:underline cursor-pointer mt-2 font-semibold">
                {link.name}
              </h3>
            </Link>
            {link.sublinks.map((links) => (
              <>
                <Link
                  to={`/categories?heading=${link.name}&subheading=${links.Head}`}
                >
                  <p className=" pl-4 hover:underline cursor-pointer">
                    {links.Head}
                  </p>
                </Link>
                {links.sublink.map((sub) => (
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
  );
};

export default Footer;
