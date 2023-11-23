import React from "react";

function BasicUserInformation({ userInfo, handleInputChange, emptyInputs }) {
  const inputStyle = {
    border: '4px solid red',

  };
  return (
    <>
      <div className="row" data-testid="basicUserInformation">
        <h2>Información de registro</h2>
        <p>
          <b className="mandatory_field">(*)</b> Campos mandatorios
        </p>
        <label
          htmlFor="formGroupExampleInput"
          className="col-sm-2 col-form-label"
        >
          <b className="mandatory_field">*</b>Nombre(s):</label>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
            style={
              emptyInputs.includes('firstName') ? { border: '4px solid green' } : inputStyle
            }
          />
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="formGroupExampleInput"
          className="col-sm-2 col-form-label"
        >
          <b className="mandatory_field">*</b>
          Apellido Paterno:
        </label>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            name="paternalName"
            value={userInfo.paternalName}
            onChange={handleInputChange}
            style={
              emptyInputs.includes('paternalName') ? { border: '4px solid green' } : inputStyle
            }
          />
        </div>
      </div>

      <div className="row">
        <label htmlFor="formGroupExampleInput" className="col-sm-2 col-form-label">
          <b className="mandatory_field">*</b>
          Apellido Materno:
        </label>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            name="maternalName"
            value={userInfo.maternalName}
            onChange={handleInputChange}
            style={
              emptyInputs.includes('maternalName') ? {  border: '4px solid green' } : inputStyle
            }
          />
        </div>
      </div>

      <div className="row">
        <label
          htmlFor="exampleFormControlInput1"
          className="col-sm-2 col-form-label"
        >
          <b className="mandatory_field">*</b>
          Correo:
        </label>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            style={
              emptyInputs.includes('email') ? { border: '4px solid green' } : inputStyle
            }
          />
        </div>
      </div>
    </>
  );
}

export default BasicUserInformation;
