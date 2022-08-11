import React, { useState } from "react";
import axios from "axios";
import Slider from "react-slick";
// images
import Stationary_4 from "../assets/stationary_4.webp";
import Stationary_5 from "../assets/stationary_5.webp";
import Stationary_6 from "../assets/stationary_6.webp";
import Stationary_7 from "../assets/stationary_7.webp";
import Stationary_8 from "../assets/stationary_8.webp";
import Stationary_9 from "../assets/stationary_9.webp";
import Bike from "../assets/bike-icon.svg";
import Shipping from "../assets/shipping-icon.svg";
import Home from "../assets/home-icon.svg";
import ProductCategoryHeading from "./ProductCategoryHeading";

function ProductDetail() {
  const rate = 100;
  const offerMessage =
    "Choose a quantity between 1 - 500 for instant ordering. For higher quantities, you will be allowed to request quotations from Sales Team.";
  const [mainImage, setMainImage] = useState(Stationary_4);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(offerMessage);

  const [resolution, setResolution] = useState();
  const [pincode, setPincode] = useState("");
  const [imageFormat, setImageFormat] = useState();
  const [colorMode, setColorMode] = useState();

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const order = async (e) => {
    e.preventDefault();
    const orderDetail = {
      user_id: 33,
      status: "pending",
      quantity: quantity,
      discount: 50,
      total: rate*quantity,
      payment: "COD",
    };
    const config = {
      header: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    console.log(orderDetail);
    await axios.post("", orderDetail, config).then((response) => {});
  };

  const [data, setData] = useState({
    email: "",
    name: "",
  });
  return (
    <div className="">
      <div className="flex flex-col items-center md:m-5 lg:flex-row gap-5 lg:m-5 lg:items-start">
        {/* first div */}
        {/* Images of the product */}
        <div className="flex flex-col flex-1 items-center w-full ">
          <img
            className="w-[100%] md:w-[60%] lg:w-[90%]"
            src={mainImage}
            alt="product"
          />
          {/* Additional images */}
          <div className="w-full flex items-center justify-center">
            <div className=" h-32 w-full mt-3 flex gap-1 overflow-x-auto whitespace-nowrap">
              <img
                onClick={(e) => {
                  setMainImage(Stationary_5);
                }}
                className="w-[20%]"
                src={Stationary_5}
                alt=""
              />
              <img
                onClick={(e) => {
                  setMainImage(Stationary_6);
                }}
                className="w-[20%]"
                src={Stationary_6}
                alt=""
              />
              <img
                onClick={(e) => {
                  setMainImage(Stationary_7);
                }}
                className="w-[20%]"
                src={Stationary_7}
                alt=""
              />
              <img
                onClick={(e) => {
                  setMainImage(Stationary_8);
                }}
                className="w-[20%]"
                src={Stationary_8}
                alt=""
              />
              <img
                onClick={(e) => {
                  setMainImage(Stationary_9);
                }}
                className="w-[20%]"
                src={Stationary_9}
                alt=""
              />
              {/* <Slider className="w-full h-16 bg-red-700" {...settings}>
                  <div className="h-32  bg-slate-400">Hello</div>                
              </Slider> */}
            </div>
          </div>
        </div>
        {/* Second div */}
        {/* Product Description Container */}
        <div className="flex-1 p-4">
          <div className=" lg:text-[1.1rem]">
            <p className="font-semibold text-[1.5rem]">Stamp</p>
            <p className=" mt-3 text-base lg:text-lg">
              Magic cusion for secret message to your special one. Customize
              your own design and get the secret message cushion.
            </p>
            <div className="px-6 md:px-10 lg:px-5">
              <ol className="list-item list-disc">
                <li>
                  The spot-UV process is like a highlighter bringing attention
                  to key part of your business cards.
                </li>
                <li>
                  Lykam papers are the words favorite coated fine paper, its
                  superior surface, uniformities, smoothness makes the printing
                  on them look more colourful and attractive as it has used
                  300gsm
                </li>
                <li>
                  Available in glossy and matte laminations in 3.5 x 2 inch.
                </li>
              </ol>
            </div>
          </div>
          {/* Features */}
          <div className="mt-5 w-full text-[1rem] px-1">
            <p className="text-[1.1rem] font-semibold mb-5 lg:text-[1.2rem]">
              Design Tips:
            </p>
            <div className=" flex md:justify-between">
              <div className="flex-1 flex flex-col gap-5 ">
                <p className="text-[1.1rem] h-[2em] lg:text-[1.2rem]">
                  Resolution:{" "}
                </p>
                <p className="h-[2em] lg:text-[1.2rem]">Color Mode:</p>
                <p className="h-[2em] lg:text-[1.2rem]">
                  Supported File Format:
                </p>
                <p className="h-[2em] lg:text-[1.2rem]">Quantity</p>
              </div>
              <div className="flex flex-col flex-1 gap-3 items-center md:items-start">
                {/* Resolution */}
                <select
                  value={resolution}
                  onChange={(e) => {
                    setResolution(e.target.value);
                    setData(...data, (e.target.name = e.target.value));
                  }}
                  className="w-[10em] border-2 border-stone-400 rounded h-[2.4em] md:w-[70%] lg:w-[15em] lg:h-[2.5em]"
                >
                  <option value="300 Dpi">300 Dpi</option>
                  <option value="350 Dpi">350 Dpi</option>
                  <option value="400 Dpi">400 Dpi</option>
                  <option value="500 Dpi">500 Dpi</option>
                </select>
                {/* Color Mode */}
                <select
                  value={colorMode}
                  onChange={(e) => {
                    setColorMode(e.target.value);
                  }}
                  className="w-[10em] border-2 border-stone-400 rounded h-[2.4em] md:w-[70%] lg:w-[15em] lg:h-[2.5em]"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="warm">Warm</option>
                  <option value="cold">Cold</option>
                </select>
                {/* Image Format */}
                <select
                  value={imageFormat}
                  onChange={(e) => {
                    setImageFormat(e.target.value);
                  }}
                  className="w-[10em] border-2 border-stone-400 rounded h-[2.4em] md:w-[70%] lg:w-[15em] lg:h-[2.5em]"
                >
                  <option value="PDF">PDF</option>
                  <option value="JPG">JPG</option>
                  <option value="TIFF">TIFF</option>
                  <option value="PSD">PSD</option>
                </select>
                <input
                  className="w-[10em] border-2 border-stone-400 rounded h-[2.4em] px-2 md:w-[70%] lg:w-[15em] lg:h-[2.5em]"
                  type="number"
                  name="quantity"
                  min={1}
                  value={quantity}
                  onChange={(e) => {
                    if (
                      isNaN(parseInt(e.target.value)) ||
                      parseInt(e.target.value) === 0
                    ) {
                      setQuantity("");
                      setMessage(
                        "Minimum quantity for your chosen customisation is 1 pieces."
                      );
                      return;
                    }
                    setQuantity(parseInt(e.target.value));
                    setMessage(offerMessage);
                  }}
                  placeholder="Quantity"
                ></input>
                <p className="text-[0.7rem] w-[15em] md:w-[70%] lg:w-[21em]">
                  {message}
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          {/* small screen pricing */}
          <div className="w-full px-2 mt-5 text-[1.05rem] md:hidden">
            <div className="flex justify-between my-3">
              <p>Per Piece</p>
              <p className="font-semibold">Rs.{rate}</p>
            </div>
            <div className="flex justify-between border-b-2 pb-3">
              <p>Quantity</p>
              <p>{quantity}</p>
            </div>
            <div className="flex justify-between items-center border-b-2 mt-3">
              <p>Total</p>
              <p className="font-bold text-red-600 text-[1.53rem]">
                Rs.{rate * quantity}
              </p>
            </div>
          </div>
          {/* medium and large screen pricing */}
          <div className="hidden md:block w-full px-2 mt-5 text-[1.05rem]">
            <p>
              <span className="font-bold text-red-600 text-[1.53rem]">
                Rs.{rate * quantity}
              </span>{" "}
              inclusive of all taxes
            </p>
            <p>
              for {quantity} Qty (Rs.{rate}/piece)
            </p>
          </div>
          <div className="m-3 w-full flex justify-center text-white md:justify-end">
            <button
              onClick={order}
              className="my-2 p-2 w-full rounded bg-blue-800 hover:bg-blue-700 md:w-[50%]"
            >
              Design your Product
            </button>
          </div>
          <div className="px-2 flex justify-between items-center md:justify-evenly">
            <p className="text-[1.1rem] flex-1">Pincode</p>
            <div className="flex-1">
              <input
                className="flex-1 pl-2 border-2 border-stone-400 rounded h-[2.4em] md:w-[70%] lg:w-[15em] lg:h-[2.5em]"
                type="text"
                value={pincode}
                placeholder="Pincode"
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Delivery details */}
          <div className="w-full mt-5 pl-2 flex flex-col gap-4">
            <div className="">
              <p className="flex gap-2 items-center">
                <img className="h-[2rem] " src={Bike} alt="bike" />
                <p className="text-[1.05rem] font-semibold">
                  Express Delivery:
                </p>
              </p>
              <p className="text-[1.05rem]">
                4 hours/same day delivery available at selected locations.
              </p>
            </div>
            <div className="">
              <p className="flex gap-2 items-center">
                <img className="h-[2rem] " src={Shipping} alt="bike" />
                <p className="text-[1.05rem] font-semibold">
                  Standard Delivery:
                </p>
              </p>
              <p className="text-[1.05rem]">
                Estimated delivery by Fri, Jul 29
              </p>
            </div>
            <div className="">
              <p className="flex gap-2 items-center">
                <img className="h-[2rem] " src={Home} alt="bike" />
                <p className="text-[1.05rem] font-semibold">Store Pickup:</p>
              </p>
              <p className="text-[1.05rem]">
                Pickup available at 28 stores across 6 cities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProductCategoryHeading heading="Similar Products"/>
        <div className="">
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
