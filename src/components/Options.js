import React from "react";

const Options = ({options}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <img src={options.photo} alt="" className="w-[10rem]" />
        <h1 className="font-semibold">{options.title}</h1>
        <p className="text-sm">{options.info}</p>
      </div>
    </>
  );
};

export default Options;
