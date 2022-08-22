import React from "react";
import { useEffect } from "react";
import Banner from "./Banner";

function TermsCondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Banner text="Terms & Condition" />
      <div className="w-4/5 m-auto p-12">
        <ul className="text-[20px] text-gray-600 py-4 font-bold">GENERAL</ul>
        <p className="text-gray-500 text-[15px]">
          This Agreement contains the complete terms and conditions that apply
          when a visitor or our registered user visits our site or use chooses
          to browse the contents herein. By using this Web site, you agree to be
          bound by its terms of use and shall comply thereof. This Agreement
          describes and encompasses the entire agreement between us and you, and
          supersedes all prior or contemporaneous agreements, representations,
          warranties, and understandings with respect to the Site and the
          content provided by or through the Site, and the subject matter of
          this Agreement.
        </p>
        <br />
        <p className="text-gray-500 text-[15px]">
          Saral Print.com – (A division of JB Intertrade Corp. Private Limited)
          is not responsible for any copyright logo or content which is uploaded
          by the user. All the responsibility is of that user who is uploading
          those .pdf or any copyright logo or content.
        </p>
        <br />

        <ul className="text-[20px] text-gray-600 py-4 font-bold">
          MODIFICATION OF TERMS & CONDITIONS OF SERVICE
        </ul>
        <p className="text-gray-500 text-[15px]">
          We may at any time modify the Terms & Conditions of Use of the site
          without any prior notification to you. You can access the latest
          version of the User Agreement at any given time on our website. You
          should regularly review the Terms & Conditions on our website. In the
          event the modified Terms & Conditions is not acceptable to you, you
          should discontinue using the service. However, if you continue to use
          the service you shall be deemed to have agreed to accept and abide by
          the modified Terms & Conditions of Use of this site.
        </p>
        <br />

        <ul className="text-[20px] text-gray-600 py-4 font-bold">
          LICENSE AND SITE ACCESS
        </ul>
        <p className="text-gray-500 text-[15px]">
          Saral Print grants you access and makes personal use of this site and
          not to download or modify it, or any portion of it, except with
          express wrote consent from our company. This site or any portion of
          this site may not be reproduced, duplicated, copied, sold, resold,
          visited, or otherwise exploited for any commercial purpose without
          express wrote consent from our company.
        </p>
        <br />
        <p className="text-gray-500 text-[15px]">
          Any unauthorized use terminates the permission or license granted by
          our company.
        </p>
        <br />

        <ul className="text-[20px] text-gray-600 py-4 font-bold">
          LINKS & FRAMINGS
        </ul>
        <p className="text-gray-500 text-[15px]">
          You shall not use our company logo or another proprietary graphic to
          link to this Site without the express written permission of our
          company. Further, you may not frame any trademark, logo, or other
          proprietary information, including the Images Content, without our
          express written consent. We make no claim or representation regarding,
          and accept no responsibility for, directly or indirectly, the quality,
          content, nature, or reliability of third-party websites accessible by
          hyperlink from the Site, or websites linking to the Site. Such sites
          are not under the control of our company and we shall not be
          responsible for the contents of any linked site or any link contained
          in a linked site, or any review, changes, or updates to such sites.
          You hereby acknowledge and agree that we are not responsible for the
          availability of such external websites or resources, its content,
          including, without limitation, any link contained in such content, or
          any changes or updates to such content. If you decide to access links
          to third-party Web sites, you do so at your own risk. Any concerns
          regarding any external link should be directed to the relevant site
          administrator or webmaster.
        </p>
        <li className="list-decimal ml-8 text-gray-500 text-[15px] py-1">
          All service rights are reserved by our company.
        </li>
        <li className="list-decimal ml-8 text-gray-500 text-[15px]">
          Don't send any type of promotional Email like Email marketing,
          Templates from our servers. Means please avoid these activities from{" "}
          <span className="font-bold">email@yourdomain.com mail id</span>.
        </li>
        <li className="list-decimal ml-8 text-gray-500 text-[15px]">
          Saral Print accounts cannot be transferred or used by anyone other
          than the subscriber. Any party seeking to report any other potential
          violations of this Agreement may contact our company via email at -
          <span className="underline text-blue-400 italic hover:text-blue-500">
            support@saralprint.com
          </span>
        </li>
        <br />

        <ul className="text-[20px] text-gray-600 py-4 font-bold">
          CONFIDENTIALITY
        </ul>
        <p className="text-gray-500 text-[15px]">
          You agree not to disclose information you obtain from us and or from
          our clients, advertisers, suppliers, and forum members. All
          information submitted to by an end-user customer pursuant to a Program
          is proprietary information of our company. Such customer information
          is confidential and may not be disclosed. Publisher agrees not to
          reproduce, disseminate, sell, distribute or commercially exploit any
          such proprietary information in any manner.
        </p>
      </div>
    </div>
  );
}

export default TermsCondition;
