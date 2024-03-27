import React, { useEffect, useState } from "react";
import BasicUserInformation from "../components/BasicUserInformation";
import AdditionalUserInformation from "../components/AdditionalUserInformation";
import useEmptyInputStyle from "../components/hooks/useEmptyInputStyle";

function RegistrationForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    paternalName: "",
    maternalName: "",
    email: "",
    sex:"",
  });

 const [formValid, setFormValid] = useState(false);
 const emptyInputs=useEmptyInputStyle(userInfo);


  useEffect(() => {
    const isValid = Object.values(userInfo).every((value) => value !== "");
    setFormValid(isValid);
 }, [userInfo]);

  function handleInputChange(e) {
    const { name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: e.target.value,
    });
  }
  const [error, setError] = useState('');

  function validateInformation(e) {
    e.preventDefault();

   if(formValid){
    console.log("Information sent:", userInfo); 
   }
   else{
    setError(<p style={{color:"red"}}> Favor de llenar todos los campos mandatorios  (*) </p>);
   }


  }

  return (
    <>
      <form onSubmit={validateInformation} data-testid="registerForm">
        <div className="container col-md-6" id="registrationForm">
          <BasicUserInformation
            userInfo={userInfo}
            handleInputChange={handleInputChange}
            emptyInputs={emptyInputs}
          ></BasicUserInformation>
          <AdditionalUserInformation
            userInfo={userInfo}
            handleInputChange={handleInputChange}
          ></AdditionalUserInformation>
         {error}
          <button type="submit" data-testid="submitButton" className="ragtimeButton">Registrar</button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;