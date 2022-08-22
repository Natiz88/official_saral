import React from "react";
import { useState } from "react";

import Close from "../assets/close.svg";

const BulkOrder = ({ setShowBulk }) => {
  const [uploadDesign2, setUploadDesign2] = useState(false);
  const [uploadDesign3, setUploadDesign3] = useState(false);

  const addMoreFileHandler = () => {
    setUploadDesign2(true);
    if (uploadDesign2 === true) {
      setUploadDesign3(true);
    }
  };
  return (
    <div className="w-full h-[120vh] flex justify-center items-center absolute inset-0 backdrop-blur-sm z-10">
      <div className=" w-[28rem]  m-auto bg-white shadow-xl p-[1rem] flex flex-col gap-[1rem]">
        <h1 className="font-bold text-xl">
          Bulk Order
          <hr className="border-t-2" />
        </h1>
        <div className="flex flex-col gap-[1rem]">
          <div>
            <label>Required Quantity*</label>
            <input
              type="number"
              placeholder=" Required Quantity"
              className="w-full border-slate-400 border rounded p-1 mt-[0.2rem]"
              onChange={(e) => {
                // quantityHandler(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Phone Number*</label>
            <input
              type="number"
              placeholder=" Phone Number"
              className="w-full border-slate-400 border rounded p-1 mt-[0.2rem]"
              onChange={(e) => {
                // quantityHandler(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div>
              <div className="flex justify-between">
                <label className="font-semibold">Upload Your Design*</label>
                {/* <img
                src={Close}
                alt=""
                className="w-[18px]"
                onClick={() => {
                  setUploadDesign1(false);
                  setShowAddFile(true);
                }}
              /> */}
              </div>
              <input
                type="file"
                name=""
                accept="image/jpeg,image/jpg,image/png"
                onChange=""
                className="mt-[0.2rem] w-full"
              />
              <input
                type="text"
                name=""
                placeholder=" Enter File Description"
                className="border-slate-400 border rounded p-1 mt-[0.5rem]"
              />
            </div>
            <div className={!uploadDesign2 ? "hidden" : ""}>
              <div className="flex justify-between">
                <label className="font-semibold">Upload Your Design*</label>
                <img
                  src={Close}
                  alt=""
                  className="w-[18px]"
                  onClick={() => {
                    setUploadDesign2(false);
                  }}
                />
              </div>
              <input
                type="file"
                name=""
                accept="image/jpeg,image/jpg,image/png"
                onChange=""
                className="mt-[0.2rem]"
              />
              <input
                type="text"
                name=""
                placeholder=" Enter File Description"
                className="border-slate-400 border rounded p-1 mt-[0.5rem]"
              />
            </div>
            <div className={!uploadDesign3 ? "hidden" : ""}>
              <div className="flex justify-between">
                <label className="font-semibold">Upload Your Design*</label>
                <img
                  src={Close}
                  alt=""
                  className="w-[18px]"
                  onClick={() => {
                    setUploadDesign3(false);
                  }}
                />
              </div>
              <input
                type="file"
                name=""
                accept="image/jpeg,image/jpg,image/png"
                onChange=""
                className="mt-[0.2rem]"
              />
              <input
                type="text"
                name=""
                placeholder=" Enter File Description"
                className="border-slate-400 border rounded p-1 mt-[0.5rem]"
              />
            </div>
            <button className="w-[150px]" onClick={addMoreFileHandler}>
              + Add more files
            </button>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Message</label>
            <textarea
              rows="5"
              cols=""
              className="border-slate-400 border rounded p-1 mt-[0.2rem]"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end gap-[1rem]">
          <button
            className="w-[70px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]"
            onClick={() => {
              setShowBulk(false);
            }}
          >
            Close
          </button>
          <button className="w-[70px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
