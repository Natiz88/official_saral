import React from "react";
import axios from "axios";
import Image from "./../component/Images/FooterLogo/footerLogo.png";
import Image2 from "./../component/contactBG.jpg";

import { useFormik } from "formik";

const Api = () => {
  const callApi = () => {
    const url = "http://192.168.100.17:8081/api/signup";
    let formData = new FormData();
    formData.append("name", "Natiz Bista");
    formData.append("address", "Itahari=05");
    formData.append("mobile_number", "9801236745");
    formData.append("password", "Natiz123@");
    formData.append("password_confirmation", "Natiz123@");
    formData.append("email", "bistanatiz88@gmail.com");
    formData.append("gender", "male");
    formData.append("type", "individual");
    const headers = {
      accept: "application/json",
      "content-type": "multipart/form-data;",
    };

    formData.forEach((key, value) => {
      console.log(key, value);
    });
    axios({
      method: "post",
      url: url,
      data: formData,
      headers,
    })
      .then((res) => console.log("success", res))
      .catch((err) => console.log("error", err));
  };
  // const formik = useFormik({
  //   initialValues: {
  //     first_name: "natiz",
  //   },
  //   onSubmit: (data) => {
  //     console.log("formik", data);
  //     axios
  //       .post("http://192.168.100.17:8081/api/signup", data)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   },
  // });
  return (
    <div>
      <button onClick={callApi}>Call</button>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <label>name</label>
        <input
          name="first_name"
          placeholder="first name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
};

export default Api;
