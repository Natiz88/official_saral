import React from "react";
import { useState, useEffect } from "react";
import { faqs } from "./FAQQuestions";
import Banner from "./Banner";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const FAQs = () => {
  const [isFAQ1, setIsFAQ1] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* main Container */}
      <Banner text="FAQs" />
      <div className=" flex flex-col  justify-center items-center gap-[2rem] bg-slate-100 p-8">
        {/* Banner */}
        {/* End of Banner */}
        {/* FAQs Container*/}
        <div className="w-[80%] md:w-[70%] lg:w-[70%] lg:-ml-48 xl:w-[60%] flex flex-col gap-[1rem] hover:$()">
          {/* FAQ1 */}
          {faqs.map((faq) => (
            <>
              <div
                className="bg-white-400 group"
                onClick={() =>
                  isFAQ1 !== faq.question
                    ? setIsFAQ1(faq.question)
                    : setIsFAQ1("")
                }
              >
                <h1
                  className={
                    isFAQ1 === faq.question
                      ? " text-red-600 py-3 px-3 text-sm cursor-pointer  flex justify-between bg-white shadow-md hover:shadow-lg rounded-md hover:text-red-600 "
                      : "px-3 text-gray-800 hover:text-red-600 py-3 cursor-pointer flex justify-between bg-white  rounded-md  text-sm "
                  }
                >
                  <p className="text-[16px] px-2 "> {faq.question}</p>
                  {/* <img src={X} alt="" className={!isFAQ1 === faq.question?"w-[22px] rotate-45 duration-100":"w-[22px] rotate-90 duration-100"} /> */}
                  {isFAQ1 === faq.question ? (
                    <span className="text-20px">
                      <AiFillCaretUp />
                    </span>
                  ) : (
                    <span className="text-20px font-medium">
                      <AiFillCaretDown />
                    </span>
                  )}
                </h1>
                {isFAQ1 === faq.question && (
                  <div className="block bg-slate-50 text-sm text-[14px] text-gray-600 tracking-wide px-8 py-4 shadow-md rounded-md">
                    {faq.answer}
                    {/* <p>{faq.answer1}</p>
                    <p>{faq.answer2}</p>
                    <p>{faq.answer3}</p>
                    <p>{faq.answer4}</p>
                    <p>{faq.answer5}</p> */}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      {/* End of FAQs Container*/}

      {/*End of main Container */}
    </>
  );
};

export default FAQs;
