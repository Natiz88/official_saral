import React from "react";

function Cancellation() {
  return (
    <div className="w-full">
      <banner className="w-full flex justify-center p-6  bg-cyan-100 font-bold text-3xl text-red-500">
        Cancellation Policy
      </banner>

      <div className="w-4/5 m-auto py-12">
        <div className="">
          <li className=" list-decimal ml-4 text-[20px] text-gray-700 font-bold ">
            How do I cancel order?
          </li>
          <p className="text-[15px] mt-4 text-gray-600 ">
            If you have already placed an order successfully on SaralPrint.com
            and you want to cancel the order for any reason, kindly call us on
            our customer care number within half an hour so that we can put a
            hold on it immediately and also drop us a mail on{" "}
            <span className="underline italic text-blue-400 hover:text-blue-500">
              support@saralprint.com
            </span>
            . We can cancel your order till the time it has not moved into
            processing. After the cancellation of your order we can put the
            amount into your Saral Print account, you can use this money in
            future for placing orders with us. In case you want the amount to be
            refunded to your source account kindly share the same in your
            cancellation mail.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cancellation;
