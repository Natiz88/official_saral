import React from "react";
import { Link } from "react-router-dom";
import { links } from "./Links.js";

const Footer = () => {
  return (
    <div className="w-full bg-gray-300">
      <div className="w-4/5 bg-gray-300 m-auto py-8 pl-8 md:h-[2000px] font-[12px] sm:flex flex-col flex-wrap text-gray-600">
        {links.map((link) => (
          <>
            <Link to={`/categories?heading=${link.name}`}>
              <h3 className="text-[15px] hover:underline cursor-pointer mt-2">
                {link.name}
              </h3>
            </Link>
            {link.sublinks.map((links) => (
              <>
                <Link
                  to={`/categories?heading=${link.name}&subheading=${links.Head}`}
                >
                  <p className="text-[13px] pl-4 hover:underline cursor-pointer">
                    {links.Head}
                  </p>
                </Link>
                {links.sublink.map((sub) => (
                  <>
                    <p className="pl-8 text-[12px] hover:underline cursor-pointer">
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
