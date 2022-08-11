import React from "react";
import Banner from "./contactBG.jpg";
export const Form = () => {
  return (
    <>
      {/* <div className='mt-[5rem]'>
        <form>
            <div>
            <label>hello</label>
            <input type="radio" class="hello"/>
            <label>hello</label>
            <input type="radio" class="hello" />
            </div>
        </form>
    </div> */}
      <div className="">
        <img src={Banner} alt="" className="w-full">
          {/* <div className="absolute inset-0 h-[10rem] w-full bg-[rgba(2,104,255,0.5)] text-center">
            Hi
          </div> */}
        </img>
      </div>
    </>
  );
};
