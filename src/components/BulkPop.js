import React from "react";
import Info from "../assets/info.svg";

const BulkPop = ({ setShowBulkPop }) => {
  return (
    <div
      className="w-full h-[120vh] flex justify-center items-center absolute inset-0 backdrop-blur-sm z-50"
      onClick={() => {
        setShowBulkPop(false);
      }}
    >
      <div
        className=" w-[22rem] bg-white border-2 shadow-2xl p-[1rem] flex flex-col items-center text-center gap-[0.5rem]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={Info} alt="Info" className="w-[50px]" />
        <h1 className="text-xl font-semibold">Info</h1>
        <p>Quantity range exceeded. Please place a bulk order.</p>
        <button
          className="w-[70px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]"
          onClick={() => {
            setShowBulkPop(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default BulkPop;
