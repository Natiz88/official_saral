import React from "react";

const Subcriptions = ({subscriptions}) => {
  return (
    <>
      <div>
        <img src={subscriptions.photo} alt="" className="w-full" />
        <div className="text-center mt-2">
          <h1 className="font-semibold">{subscriptions.title}</h1>
          <p className="text-sm">{subscriptions.info}</p>
          <p className="text-sm font-semibold">
            Get a subscription from as low as Rs.{subscriptions.price} per
            month!
          </p>
        </div>
      </div>
    </>
  );
};

export default Subcriptions;
