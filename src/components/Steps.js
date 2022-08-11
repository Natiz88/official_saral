import React from "react";
import reminder from "../assets/reminder.svg";

function Steps(props) {
  return (
    <>
      <div className="flex items-center">
        <img className="h-32" src={props.reminder} alt="reminder" srcset="" />
        <div className="text-center">
          <h1 className="text-rose-600 font-bold ml-2 text-[1.4rem] md:text-[1.3rem] lg:text-[1.45rem]">
            {props.step}

          </h1>
          <p className="text-sky-600 font-bold text-[1.1rem] md:text-[1rem] lg:text-[1.2rem]">
            {props.todo}
          </p>
          <p className=" text-[0.8rem] md:text-[0.8rem] md:w-fit lg:text-[0.7rem]">
            {props.message}
          </p>
        </div>
      </div>
    </>
  );
}

export default Steps;
