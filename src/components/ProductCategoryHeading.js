import React from "react";

function ProductCategoryHeading(props) {
  return (
    <div>
      <p className="flex justify-center text-xl font-[900] text-red-500 my-1 border-b-2 border-red-500 md:text-2xl lg:text-3xl lg:border-b-3">
        {props.heading}
      </p>
    </div>
  );
}

export default ProductCategoryHeading;
