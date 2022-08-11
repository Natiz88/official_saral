import React from "react";

function MoreInfo(props) {
  return (
    <div
      className={`w-full flex flex-col items-center  px-3 my-5 md:${props.direction} md:px-20 lg:px-56 gap-5`}
    >
      <img
        className="w-96 md:w-[50%] lg:w-[30%]"
        src={props.photo}
        alt="photo gift"
      />
      <div className="p-3">
        <p className="font-bold text-[1.3rem] lg:text-[1.5rem] ">
          Personalized Gifts
        </p>
        <p className="font-bold text-[1.2rem] mb-1 lg:text-[1.3rem]">
          Home Decor | Photo Gifts
        </p>
        <p className="mb-2 text-[0.9rem] lg:text-[1rem]">
          The importance of photographs in our lives cannot be overstated They
          help us reminisce about places, people, feelings, and from the past.
          Printo can help you find the best present for your loved ones when it
          comes to what to give. It is always a great joy to see your ones
          happy. Make your loved ones and yourself happy with Personalized Photo
          gifts.
        </p>
        <button className="bg-red-600 rounded-md w-32 text-[0.9rem] text-stone-50  md:text-lg p-1">
          Read More
        </button>
      </div>
    </div>
  );
}

export default MoreInfo;
