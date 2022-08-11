import React from "react";
import { useState } from "react";

export default function SignUp(setLoginOpen) {
  const [isOpenSignup, setisOpenSignup] = useState(false);
  return (
    <>
      <button
        className="bg-red-600 hover:bg-red-800 text-white rounded-[20px] w-full text-[20px] text-bold md:w-[60%] lg:w-[60%] xl:w-[50%]"
        onClick={() => setisOpenSignup(true)}
      >
        Create Account
      </button>
      {isOpenSignup && (
        <>
          <div className=" min-h-screen  bg-blue-300 flex fixed inset-0 z-50 ">
            {/* <div className="container w-1/2 mx-auto flex flex-col items-center justify-center px-4"> */}
            <div className="container mx-auto flex flex-col items-center justify-center px-4 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] ">
              <div className="bg-white border-spacing-1 px-8 py-5 rounded-2xl shadow-md text-black w-11/12">
                <h1 className="flex font-bold p- border-b justify-center ">
                  Sign in
                </h1>
                <div>

                </div>
                {/* body */}
                <div classNameName="flex flex-col ">
                  {/* account type */}
                  <div className="mt-2 mb-4 w-1/2 ">
                    <label classNameName="font-medium">Account Type</label>
                    <div className="mt-3 flex space-x-4">
                      <label className="inline-flex items-cente">
                        <input
                          type="radio"
                          className="form-radio"
                          name="accountType"
                          value="personal"
                        />
                        <span className="ml-2">Individual</span>
                      </label>
                      <label className="inline-flex items-center ">
                        <input
                          type="radio"
                          className="form-radio"
                          name="accountType"
                          value="busines"
                        />
                        <span className="ml-2">Corporate</span>
                      </label>
                    </div>
                  </div>

                  <label classNameName="font-medium">Full name</label>
                  <input
                    type="text"
                    className="border border-black w-full p-1 rounded mb-4 mt-2"
                    name="FirstName"
                    placeholder=" First Name "
                  />

                  <label classNameName="font-medium">E-mail</label>
                  <input
                    type="text"
                    className="border border-black w-full p-1 rounded mb-4"
                    name="email"
                    placeholder="Email "
                  />

                  <label classNameName="font-medium">Mobile Number</label>
                  <input
                    type="text"
                    className="border border-black w-full p-1 rounded mb-4"
                    name="Mobile Number"
                    placeholder="Contact Number "
                  />

                  <label classNameName="font-medium">Address</label>
                  <input
                    type="text"
                    className="border border-black w-full p-1 rounded mb-4"
                    name="address"
                    placeholder="Address "
                  />

                  <label classNameName="font-medium">Password</label>
                  <input
                    type="password"
                    className="border border-black w-auto p-1 rounded mb-4"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <label classNameName="font-medium">Comform password</label>

                  <input
                    type="password"
                    className="border border-black w-auto p-1 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                </div>
                {/* checkbox */}
                <div className="flex items-center space-x-3">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label>
                    <p className="text-blue-600 dark:text-blue-500 hover:underline  ">
                      {" "}
                      Terms and conditions
                    </p>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full font-medium text-center py-1  rounded-full bg-blue-500 hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
