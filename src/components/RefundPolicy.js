import React from "react";
import { useEffect } from "react";

function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="w-full flex justify-center p-6  bg-cyan-100  text-3xl text-gray-700 pl-1">
        Fefund Policy
      </h1>
      <div className="py-12">
        <p className="w-4/5 m-auto pl-1 text-[15px] text-gray-500">
          If you are placing an order on our website and your payment gets
          deducted but the payment is not received by SaralPrint.com for any
          reason then the payment will be automatically refunded to the source
          account by the respective gateway within 7-10 working days.
        </p>

        <p className="w-4/5 m-auto pl-1 text-[15px] text-gray-500 pt-4">
          If you have already placed an order successfully on Saral Print.com
          and you want the amount to be refunded to source account, then kindly
          drop us a mail on{" "}
          <span className="underline  text-blue-400 italic hover:text-blue-500">
            support@saralprint.com
          </span>
          . We will process the refund and inform your through return mail, it
          may take around 7-10 working days to get the payment credited to the
          source account
        </p>
      </div>
    </div>
  );
}

export default Policy;
