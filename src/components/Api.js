import React from "react";
import axios from "axios";

const Api = () => {
  const callApi = () => {
    const url = "http://192.168.100.17:8081/api/signup";
    // let formData = new FormData();
    // formData.append("name", "Natiz Bista");
    // formData.append("address", "Itahari=05");
    // formData.append("mobile_number", "9801236745");
    // formData.append("password", "Natiz123@");
    // formData.append("password_confirmation", "Natiz123@");
    // formData.append("email", "bistanatiz88@gmail.com");
    // formData.append("gender", "male");
    // formData.append("type", "individual");
    // formData.append("profile_image", "individual");
    let formData = new FormData();
    formData.append("Natiz Bista", "name");
    formData.append("Itahari=05", "address");
    formData.append("9801236745", "mobile_number");
    formData.append("Natiz123@", "password");
    formData.append("Natiz123@", "password_confirmation");
    formData.append("bistanatiz88@gmail.com", "email");
    formData.append("male", "gender");
    formData.append("individual", "type");
    const headers = {
      accept: "application/json",
      "content-type": "multipart/form-data",
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
      // axios({
      //   method: "post",
      //   url,
      //   data: formData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // })
      .then((res) => console.log("success", res))
      .catch((err) => console.log("error", err));
  };
  return (
    <div>
      <button onClick={callApi}>Call</button>
    </div>
  );
};

export default Api;
