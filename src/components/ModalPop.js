import React from "react";
import Modal from "@mui/material/Modal";
import Info from "../assets/info.svg";

const ModalPop = ({ setModalPop, isModalPop, title, des }) => {
  return (
    <div>
      <Modal
        open={isModalPop}
        onClose={()=>{setModalPop(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className="w-[22rem] bg-white border-2 shadow-2xl p-[1rem] flex flex-col items-center text-center gap-[0.5rem]">
          <img src={Info} alt="Info" className="w-[50px]" />
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{des}</p>
          <button
            className="w-[70px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]"
            onClick={()=>{setModalPop(false)}}
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPop;
