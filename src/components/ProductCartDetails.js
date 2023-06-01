import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import Close from "../assets/close.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Viber from "../assets/viber.svg";

import PriceListDetails from "./PriceListData";
// import ProductData from "./ProductData";

const ProductCartDetails = ({
  product,
  setIsOrderDetails,
  setShowBulk,
  setModalPop,
  setShowBulkButton,
  showBulkButton,
  setShowOrderDetails,
  setQuantity,
}) => {
  const [productHeading, setProductHeading] = useState(
    "BUSINESS CARD - SINGLE SIDE"
  );

  console.log("ppp", product);

  const [size, setSize] = useState("A4");
  const [paperWeight, setPaperWeight] = useState("300 Gsm");
  const [lamination, setLamination] = useState("Matte");
  const [weight, setWeight] = useState("1.34");
  // const [quantity, setQuantity] = useState("BUSINESS CARD - SINGLE SIDE");
  const [priceMode, setPriceMode] = useState("normal");
  // const [uploadedDesign, setUploadedDesign] = useState([]);

  const [uploadDesign1, setUploadDesign1] = useState(false);
  const [uploadDesign2, setUploadDesign2] = useState(false);
  const [uploadDesign3, setUploadDesign3] = useState(false);
  const [showAddFile, setShowAddFile] = useState(false);
  const [openToolTip, setOpenToolTip] = useState(false);

  const [showAddSpecialRequirement, setShowAddSpecialRequirement] =
    useState(false);

  const ProductCartData = {
    size: "",
    paperWeight: 300,
    lamination: "Matte",
    weight: 1.34,
    quantity: 50,
    priceMode: "Normal",
    uploadedDesign: [],
  };

  // ProductCartData.size = "large";

  const details = async (e) => {
    try {
      // const token = localStorage.getItem("token");
      // // const token = "6|p0DSoCMJSkgefsCJvTRNdv58ETeFwj27ewzvglXy";
      // const config = {
      //   headers: { Authorization: `Bearer ${token}` },
      // };
      await axios
        .get(
          "http://192.168.100.17:8081/api/product/1/data"
          // config
        )
        .then((response) => {
          // setUserName(response.data.name);
          // setTypeOfUser(response.data.type.charAt(0).toUpperCase()+response.data.type.slice(1));
          // setEmail(response.data.email);
          // setMobileNumber(response.data.mobile_number);
          // setCity(response.data.city);
          // setCity(response.data.address.split(" ")[0]);
          // setStreetAddress(response.data.address);
          // setContactNumber(response.data.mobile_number);
          // setPanNumber(response.data.pan_number);
          console.log(response.data.size);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // React.useEffect(() => {
  //   details();
  // }, []);

  function between(x, min, max) {
    return x >= min && x <= max;
  }
  const quantityHandler = (quantity) => {
    const conditions = [];
    for (let index = 0; index < PriceListDetails.length; index++) {
      conditions.push(
        between(
          quantity,
          parseInt(
            PriceListDetails[index].range.split(",").join("").split(" - ")[0]
          ),
          parseInt(
            PriceListDetails[index].range.split(",").join("").split(" - ")[1]
          )
        )
      );
    }
    if (
      quantity > 0 &&
      quantity <
        parseInt(
          PriceListDetails[PriceListDetails.length - 1].range
            .split(",")
            .join("")
            .split(" - ")[1]
        )
    ) {
      setShowOrderDetails(true);
    }
    if (
      quantity >
      parseInt(
        PriceListDetails[PriceListDetails.length - 1].range
          .split(",")
          .join("")
          .split(" - ")[1]
      )
    ) {
      setShowOrderDetails(false);
      setShowBulk(true);
      // setShowBulkButton(true);
      setShowBulkButton(!showBulkButton);
      setModalPop(true);
    } else if (conditions.includes(true)) {
      setIsOrderDetails(true);
    } else {
      setIsOrderDetails(false);
    }
  };

  const priceModeHandler = (e) => {
    setPriceMode(e.target.value);
  };

  const addMoreFileHandler = () => {
    if (uploadDesign1 === true) {
      setUploadDesign2(true);
    }
    if (uploadDesign2 === true) {
      setUploadDesign3(true);
      setShowAddFile(false);
    }
  };

  const handleTooltipClose = () => {
    setOpenToolTip(false);
  };

  const handleTooltipOpen = () => {
    setOpenToolTip(true);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[15],
    },
  }));

  const tooltip = (
    <div className=" p-[0.5rem] w-[170px] lg:w-[250px]">
      <div className="flex justify-between text-[#E5113C] text-[12px] font-semibold">
        <h1>Chat On</h1>
        <img
          src={Close}
          alt=""
          className="w-[18px]"
          onClick={() => {
            setOpenToolTip(false);
          }}
        />
      </div>
      <div className="flex flex-col mt-[0.5rem] gap-[0.5rem] lg:flex-row">
        <a
          href="#"
          target="_blank"
          className="flex justify-evenly items-center p-[0.5rem] text-[14px] border-2"
        >
          <img src={Viber} alt="" />
          <h2>Viber</h2>
        </a>
        <a
          href="#"
          target="_blank"
          className="flex justify-evenly items-center p-[0.5rem] text-[14px] border-2"
        >
          <img src={Whatsapp} alt="" />
          <h2>Whatsapp</h2>
        </a>
      </div>
    </div>
  );
  return (
    <>
      <h1 className="font-bold text-xl">
        {productHeading}
        <hr className="border-t-2" />
      </h1>
      <div className="flex">
        {product?.attributes.map((p) => {
          <p>
            {p.name}
            <span>p.value</span>
          </p>;
        })}

        {/* <div className="font-semibold w-[50%] flex flex-col gap-[1rem]">
          <p>Size</p>
          <p>Paper Weight</p>
          <p>Lamination</p>
          <p>Weight</p>
        </div>
        <div className=" w-[50%] flex flex-col gap-[1rem]">
          <p>{ProductCartData.size} cm</p>
          <p>{ProductCartData.paperWeight} Gsm</p>
          <p>{ProductCartData.lamination}</p>
          <p>{ProductCartData.weight} gram(s)</p>
        </div> */}
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="flex justify-between">
          <label className="font-semibold">Required Quantity*</label>
          <input
            type="number"
            placeholder=" Required Quantity"
            className="border-slate-400 border rounded p-1 "
            onChange={(e) => {
              quantityHandler(e.target.value);
              setQuantity(e.target.value);
              // console.log(e.target.value);
              // quantityHandler2(e.target.value);
            }}
          />
        </div>
        <label className="font-semibold">Select Price Mode*</label>
        <div className="">
          <input
            type="radio"
            name="priceMode"
            value="normal"
            checked={priceMode === "normal"}
            onChange={(e) => {
              priceModeHandler(e);
            }}
            className="border-slate-400 border rounded p-1 mr-1"
          />
          <label>Normal Price</label>
          <input
            type="radio"
            name="priceMode"
            value="urgent"
            checked={priceMode === "urgent"}
            onChange={priceModeHandler}
            className="border-slate-400 border rounded p-1 ml-[2rem] mr-1"
          />
          <label>Urgent Price</label>
        </div>
        <div className="grid grid-cols-2 gap-[1rem] md:flex xl:flex">
          <button
            className={
              !uploadDesign1
                ? "h-[60px] w-[125px] border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-lg hover:text-white hover:-translate-y-2 hover:duration-500 ease-in-out md:px-[0.5rem] xl:w-[100px]"
                : "h-[60px] w-[125px] border-[#1874D1] border-2 rounded-md bg-[#1874D1] shadow-[#1874D1] shadow-lg text-white -translate-y-2 md:px-[0.5rem] xl:w-[100px]"
            }
            onClick={() => {
              setUploadDesign1(true);
              setShowAddFile(true);
              setOpenToolTip(false);
            }}
          >
            Upload Design
          </button>
          <button className="h-[60px] w-[125px] border-[#1874D1] border-2 rounded-md hover:bg-[#1874D1] hover:shadow-[#1874D1] hover:shadow-lg hover:text-white hover:-translate-y-2 hover:duration-500 ease-in-out xl:w-[100px]">
            Design Online
          </button>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <LightTooltip
              // title="Chat with Designer"
              title={tooltip}
              arrow
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={openToolTip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="top"
            >
              <button
                className={
                  !openToolTip
                    ? "h-[60px] w-[125px] border-[#E5113C] border-2 rounded-md hover:bg-[#E5113C] hover:shadow-[#E5113C] hover:shadow-lg hover:text-white hover:-translate-y-2 hover:duration-500 ease-in-out xl:w-[99px]"
                    : "h-[60px] w-[125px] border-[#E5113C] border-2 rounded-md bg-[#E5113C] shadow-[#E5113C] shadow-lg text-white -translate-y-2 xl:w-[99px]"
                }
                onClick={() => {
                  handleTooltipOpen();
                  setUploadDesign1(false);
                  setUploadDesign2(false);
                  setUploadDesign3(false);
                  setShowAddFile(false);
                }}
              >
                Hire Designer
              </button>
            </LightTooltip>
          </ClickAwayListener>
          {/* <div className="shadow-2xl p-[1rem]">
            <div className="flex">
            <h1>Chat On</h1>
            <img
                src={Close}
                alt=""
                className="w-[18px]"
                // onClick={() => {
                //   setUploadDesign2(false);
                //   setShowAddFile(true);
                // }}
              />
            </div>
            <div className="flex flex-col">
              <button>Viber</button>
              <button>Whatsapp</button>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className={!uploadDesign1 ? "hidden" : "block"}>
            <div className="flex justify-between">
              <label className="font-semibold">Upload Your Design*</label>
              <img
                src={Close}
                alt=""
                className="w-[18px]"
                onClick={() => {
                  setUploadDesign1(false);
                  setShowAddFile(true);
                }}
              />
            </div>
            <input
              type="file"
              name=""
              accept="image/jpeg,image/jpg,image/png"
              onChange=""
              className="mt-[0.2rem] w-full"
            />
            <input
              type="text"
              name=""
              placeholder=" Enter File Description"
              className="border-slate-400 border rounded p-1 mt-[0.5rem]"
            />
          </div>
          <div className={!uploadDesign2 ? "hidden" : ""}>
            <div className="flex justify-between">
              <label className="font-semibold">Upload Your Design*</label>
              <img
                src={Close}
                alt=""
                className="w-[18px]"
                onClick={() => {
                  setUploadDesign2(false);
                  setShowAddFile(true);
                }}
              />
            </div>
            <input
              type="file"
              name=""
              accept="image/jpeg,image/jpg,image/png"
              onChange=""
              className="mt-[0.2rem]"
            />
            <input
              type="text"
              name=""
              placeholder=" Enter File Description"
              className="border-slate-400 border rounded p-1 mt-[0.5rem]"
            />
          </div>
          <div className={!uploadDesign3 ? "hidden" : ""}>
            <div className="flex justify-between">
              <label className="font-semibold">Upload Your Design*</label>
              <img
                src={Close}
                alt=""
                className="w-[18px]"
                onClick={() => {
                  setUploadDesign3(false);
                  setShowAddFile(true);
                }}
              />
            </div>
            <input
              type="file"
              name=""
              accept="image/jpeg,image/jpg,image/png"
              onChange=""
              className="mt-[0.2rem]"
            />
            <input
              type="text"
              name=""
              placeholder=" Enter File Description"
              className="border-slate-400 border rounded p-1 mt-[0.5rem]"
            />
          </div>
          <button
            className={!showAddFile ? "hidden" : "w-[150px] mt-[0.5rem]"}
            onClick={addMoreFileHandler}
          >
            + Add more files
          </button>
        </div>
        <div
          className={
            !showAddSpecialRequirement ? "hidden" : "flex flex-col gap-[0.5rem]"
          }
        >
          <label className="font-semibold">Special Requirement</label>
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder=" Add your requirement"
            className="w-full h-[100px] border-slate-400 border rounded p-[0.5rem]"
          ></textarea>
        </div>
        <button
          className="w-[188px] text-[#1874D1] hover:underline"
          onClick={() => {
            setShowAddSpecialRequirement(!showAddSpecialRequirement);
          }}
        >
          {!showAddSpecialRequirement ? "Add" : "Hide"} Special Requirement
        </button>
        <Link to="/cart" className="flex justify-end">
          <button className="w-[140px] bg-[#1874D1] text-white rounded-md p-[0.5rem] hover:bg-[#0e62b7]">
            ADD TO CART
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCartDetails;
