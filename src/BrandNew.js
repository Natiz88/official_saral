import React from "react";
import ModalLogin from "./ModalLogin";
import { useState } from "react";

const BrandNew = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <div>
        <button
          className="bg-blue-700 col text-white p-1"
          onClick={() => setLoginOpen(true)}
        >
          LogIn or Create Account
        </button>
        {isLoginOpen === true && <ModalLogin setLoginOpen={setLoginOpen} />}
      </div>
    </>
  );
};

export default BrandNew;
