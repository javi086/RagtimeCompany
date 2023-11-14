import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import BasicUserInformation from "../components/BasicUserInformation";
import AdditionalUserInformation from "../components/AdditionalUserInformation";


function RegistrationForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    paternalName: "",
    maternalName: "",
    email: "",
  });

  function handleInputChange(e) {
    const { name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: e.target.value,
    });
  }

  function sendUserInformation(e) {
    e.preventDefault();
    console.log("Informacion enviada: ", userInfo);
    setUserInfo({
      firstName: "",
      paternalName: "",
      maternalName: "",
      email: "",
    });
  }

  return (
    <>
      <form onSubmit={sendUserInformation}>
        <div className=" container col-md-6" id="registration_form">
          <BasicUserInformation
            userInfo={userInfo}
            handleInputChange={handleInputChange}
          ></BasicUserInformation>
          <AdditionalUserInformation></AdditionalUserInformation>
          <button type="submit">Registrar</button>
        </div>
      </form>

    </>
  );
}

export default RegistrationForm;
