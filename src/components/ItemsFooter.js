import React from "react";
import { links } from "./Links.js";

const Footer = () => {
  return (
    <div className="w-full bg-gray-300">
    <div className="w-4/5 bg-gray-300 m-auto py-8 pl-8 md:h-[2000px] font-[12px] sm:flex flex-col flex-wrap text-gray-600">
      {links.map((link) => (
        <>
          <h3 className="text-[15px] hover:underline cursor-pointer mt-2">
            {link.name}
          </h3>
          {link.sublinks.map((link) => (
            <>
              <p className="text-[13px] pl-4 hover:underline cursor-pointer">
                {link.Head}
              </p>
              {link.sublink.map((sub) => (
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
