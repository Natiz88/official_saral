import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel() {
  return (
    <div className="w-full sm:h-[348px] mb-2 sm:mb-0 -z-10 relative bg-sky-200">
      <div className="w-full sm:w-3/5 sm:absolute sm:left-[27%] sm:flex sm:justify-center">
        <div
        // style={{
        //   // display: "block",
        //   width: "100%",
        //   zIndex: "1",
        //   height: "100%",
        //   // paddingLeft: 30,
        // }}
        >
          <Carousel
            showThumbs={false}
            showArrows={false}
            autoPlay
            infiniteLoop
            useKeyboardArrows
            transitionTime={1000}
          >
            <div>
              <img src={image1} />
            </div>
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image4} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;
