import axios from "axios";
import { useState } from "react";

import React from "react";

const ProductData = () => {
  const [nameHeading, setNameHeading] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [size, setSize] = useState();
  const [paperWeight, setPaperWeight] = useState();
  const [lamination, setLamination] = useState();
  const [weight, setWeight] = useState();
  const [discount, setDiscount] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();
  // const [nameHeading, setNameHeading] = useState();

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
          setSize(response.data.size);
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
  React.useEffect(() => {
    details();
  }, []);

  const ProductData = {
    size: size,
    paperWeight: 300,
    lamination: "Matte",
    weight: 1.34,
    quantity: 50,
    priceMode: "Normal",
    uploadedDesign: [],
  };
  return ProductData;
};

export default ProductData;
