import React from "react";

function Disclaimer() {
  return (
    <div className=" ">
      <banner className="w-full flex justify-center p-6 text-gray-600 bg-cyan-100  text-3xl text-gray-700 pl-1">
        Privacy Policy
      </banner>

      <div className=" w-4/5 m-auto pl-1 py-12">
        <li className="list-decimal ml-4 text-[20px] py-1 text-gray-600 font-bold">
          Acknowlagdement and Acceptance of terms
        </li>
        <p className="py-1 text-[15px] text-gray-500">
          SaralPrint.com - a division of Saral Multipurpose Private Limited is
          committed to protecting our visitors and registered user’s privacy.
          This Privacy Statement sets forth our current privacy practices with
          regard to the information we collect when a visitor or registered
          user’s computers interact with our website. By accessing
          SaralPrint.com, you acknowledge and fully understand Saral Print’s
          Privacy Statement and grant consent to the information collection and
          use practices described in this Website Privacy Statement.
        </p>
        <br />

        <li className="list-decimal ml-4 text-[20px] text-gray-600 font-bold">
          Information We collecyt and How to Use it
        </li>
        <p className="py-1 text-[15px] text-gray-500">
          SaralPrint.com collects certain information from and about its
          visitors and registered user’s three ways: directly from our Web
          Server logs, the user, and with Cookies.
        </p>
        <ul className="ml-2 text-[20px] text-gray-600">A. Web Server Logs</ul>
        <p className="ml-2 text-[15px] text-gray-500">
          When you visit our website, we may track information to administer the
          site and analyze its usage. Examples of information we may track
          include:
        </p>
        <ul className="list-disc ml-9 text-[15px] py-1 text-gray-500 font-bold">
          <li>Your Internet protocol address.</li>
          <li>The kind of browser or computer you use.</li>
          <li>The number of links you click within the site.</li>
          <li>State or country from which you accessed the site.</li>
          <li>Date and time of your visit.</li>
          <li>Name of your Internet service provider.</li>
          <li>Web page you linked to our site from.</li>
          <li>Pages you viewed on the site</li>
        </ul>
        <br />

        <ul className="ml-2 text-[20px] text-gray-600 font-bold">
          B. Use of Cookies
        </ul>
        <p className="ml-2 py-1 text-[15px] text-gray-500">
          SaralPrint.com in may use cookies to personalize or enhance your user
          experience. A cookie is a small text file that is placed on your hard
          disk by a Web page server. Cookies cannot be used to run programs or
          deliver viruses to your computer. Cookies are uniquely assigned to
          you, and can only be read by a Web Server in the domain that issued
          the cookie to you. One of the primary purposes of cookies is to
          provide a convenience feature to save you time. For example, if you
          personalize a web page, or navigate within a site, a cookie helps the
          site to recall your specific information on subsequent visits. Hence,
          this simplifies the process of delivering relevant content and eases
          site navigation by providing and saving your preferences and login
          information as well as providing personalized functionality. You have
          the ability to accept or decline cookies. Most Web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies. If you reject cookies by changing your
          browser settings then be aware that this may disable some of the
          functionality on our Website.
        </p>
        <br />

        <ul className="ml-2 text-[20px] text-gray-600 font-bold">
          C. Personal Infromation Users
        </ul>
        <p className="ml-2 text-[15px] text-gray-500">
          Visitors to our website can register to print their documents. When
          you register, we will request some personal information such as name,
          address, email, telephone number and other relevant information. If
          you are booking an order, we will request financial information. Any
          financial information we collect is used only to bill you for the
          order you booked. If you purchase by credit card, this information may
          be forwarded to your credit card provider. For other types of
          registrations, we will ask for the relevant information. You may also
          be asked to disclose personal information to us so that we can provide
          assistance and information to you. For example, such data may be
          warranted in order to provide online technical support and
          troubleshooting.
        </p>
        <br />
        <p className="ml-2 py-1 text-[15px] text-gray-500">
          We will not disclose personally identifiable information we collect
          from you to third parties without your permission except to the extent
          necessary including:
        </p>
        <ul className="list-disc ml-9 text-[15px] text-gray-500 font-bold">
          <li>To fulfill your service requests for services.</li>
          <li>To protect ourselves from liability.</li>
          <li>To respond to legal process or comply with the law, or</li>
          <li>
            In connection with a merger, acquisition, or liquidation of the
            company.
          </li>
        </ul>
        <br />

        <li className="list-decimal ml-4 text-[20px] text-gray-600 font-bold">
          Accessing Web Account Information
        </li>
        <p className="py-1 text-[15px]">
          We will provide you with the means to ensure that personally
          identifiable information in your web account file is correct and
          current. You may review this information by contacting us by sending
          an email to our support team at{" "}
          <span className="underline text-blue-400 italic hover:text-blue-500">
            {" "}
            support@saralprint.com.
          </span>
        </p>
        <br />

        <li className="list-decimal ml-4 text-[20px] text-gray-600 font-bold">
          Contacting Us
        </li>
        <p className="py-1 text-[15px] text-gray-500">
          If you have questions regarding our Privacy Statement, its
          implementation, failure to adhere to this Privacy Statement, and/or
          our general practices, please contact us at{" "}
          <span className="underline text-blue-400 italic hover:text-blue-500">
            support@saralprint.com
          </span>{" "}
          in or send your comments to:
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;
