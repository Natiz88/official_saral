import React from 'react'
import { useState } from 'react';

const Signup2 = () => {
  const [isOpenSignup, setisOpenSignup] = useState(true);
  return (
    <button
        className="bg-red-600 hover:bg-red-800 text-white rounded-[20px] w-full text-[20px] text-bold md:w-[60%] lg:w-[60%] xl:w-[50%]"
        onClick={() => setisOpenSignup(true)}
      >
        Create Account
      </button>
  )
}

export default Signup2