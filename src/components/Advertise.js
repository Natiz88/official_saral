import React from "react";
import Banner from "./../component/banner.jpeg";

function Advertise(props) {
  return (
    <div>
      <img className="w-full md:w-3/4 m-auto" src={Banner} alt="team" />
    </div>
  );
}

export default Advertise;
