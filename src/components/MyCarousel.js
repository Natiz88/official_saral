import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel() {
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
