import React from "react";
import { useEffect } from "react";
import Banner from "./Banner";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <Banner text="About Us" />

      <div className="w-4/5 m-auto pl-1 text-[15px] text-gray-600 py-12lll">
        <p>
          <a
            href="www.saralmultipurpose.com"
            target="_blank"
            className="font-bold text-blue-400"
          >
            SaralPrint.com - a division of Saral Multipurpose Group Pvt. Ltd.
          </a>
          provides online documents printing and binding solution to all over
          Province No.1. We print book, documents, letter head, presentation,
          certificates, poster, Leaflets & flyers and so on. Here you have to
          upload your document to our website and select the print setting for
          your printout, make the payment and wait for your amazing printouts at
          your provided address. We provide printouts of your uploaded documents
          to all over Province No.1.
        </p>
        <br />

        <p>
          As a quality centric organization, we provide customization facility
          on our offered range of prints and that has garnered critical
          appreciation from our client base spread across the country. Our
          products are widely acknowledged in industrial equipment sector and
          book printing sector. To cater the variegated requirements of clients,
          we provide products in various sizes, colors and thickness at
          affordable prices. With our ethical business practices and competitive
          pricing policy, we have gained a huge client base across the nation.
        </p>
        <br />

        <p>
          We also accept payments through easy modes like Credit Card, Debit
          Card, Internet banking and provide them optimum satisfaction.
          Furthermore, we have built up a spacious and well-maintained
          warehousing base where our products are kept safe and convenient
          manner. The warehousing base is equipped with all the requisite
          amenities that are needed to keep the products safely.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
