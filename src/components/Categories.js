import React from "react";
import { useState, useEffect } from "react";
import { links } from "./../utils/LinkItems";
import { useLocation } from "react-router-dom";
import Image from "./../assets/heading.png";

const Categories = () => {
  const location = useLocation();
  const search = useLocation().search;
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  useEffect(() => {
    const name = new URLSearchParams(search).get("subheading");
    console.log("sub", name);
    const head = location.search
      .replace(/[^a-zA-Z]/g, "")
      .replace("heading", "")
      .toLowerCase();
    setHeading(head);
  }, [location]);

  console.log("heading", heading);
  const item = links.filter(
    (link) => link.name.replace(/[^a-zA-Z]/g, "").toLowerCase() === heading
  );

  return (
    <div>
      <h1 className="w-full h-[200px] flex items-center justify-start text-white text-[30px] bg-gray-600">
        Categories
      </h1>
      <div className="w-[80%] m-auto flex flex-wrap justify-start">
        {item.length > 0 &&
          item[0].sublinks.map((subs) => (
            <div className="w-[220px] h-[240px] cursor-pointer group shadow-lg rounded-[5px] my-4 mx-6 relative overflow-hidden">
              <img
                src={Image}
                alt="heading"
                className="h-[80%] w-full z-10 overflow-hidden group-hover:scale-[1.1] transition-all ease-in"
              />
              <p className="w-full h-[20%] absolute top-[80%] group-hover:text-red-400 bg-white flex justify-center items-center">
                {subs.Head}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
