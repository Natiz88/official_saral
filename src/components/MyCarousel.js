import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

function MyCarousel() {
  const [file, setFile] = useState("");

  const pickedHandler = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };

  const make = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", file);

      const headers = {
        accept: "application/json",
        "content-type": "multipart/form-data",
      };

      const response = await axios.put(
        "http://192.168.100.22:5000/api/subcategories/1",
        formData,
        headers
      );
      console.log("myown", response);
    } catch (err) {
      console.log("myown-err", err);
    }
  };

  return (
    <div className="w-full md:w-4/5 m-auto -z-10 mt-8">
      {/* //   <div className="w-full object-contain lg:w-3/5 sm:absolute md:left-[20%] lg:left-[27%] sm:flex sm:justify-center"> */}
      <Carousel
        showThumbs={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}
      >
        <div>
          <img src={image1} alt="slider" />
        </div>
        <div>
          <img src={image2} alt="slider" />
        </div>
        <div>
          <img src={image3} alt="slider" />
        </div>
        <div>
          <img src={image4} alt="slider" />
        </div>
      </Carousel>
    </div>
    // </div>
  );
}

export default MyCarousel;
