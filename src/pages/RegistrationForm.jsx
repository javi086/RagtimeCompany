import React, { useEffect, useState } from "react";
import BasicUserInformation from "../components/BasicUserInformation";
import AdditionalUserInformation from "../components/AdditionalUserInformation";
import useEmptyInputStyle from "../components/hooks/useEmptyInputStyle";
import styled from 'styled-components';


// styled button component
const Button = styled.button`
  background-color: #66347F;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color:#EAE509;
  }
`;

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
          <Button type="submit" data-testid="submitButton">Registrar</Button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;