import React from "react";

function BasicUserInformation({ userInfo, handleInputChange }) {
  return (
    <>
      <div className="row">
        <h2>Información de registro</h2>
        <p>
          <b className="mandatory_field">(*)</b> Campos mandatorios
        </p>
        <label
          htmlFor="formGroupExampleInput"
          className="col-sm-2 col-form-label"
        >
          <b className="mandatory_field">*</b>
          Nombre(s):
        </label>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control general_shadow"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
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
            className="form-control general_shadow"
            name="paternalName"
            value={userInfo.paternalName}
            onChange={handleInputChange}
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
            className="form-control general_shadow"
            name="maternalName"
            value={userInfo.maternalName}
            onChange={handleInputChange}
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
            className="form-control general_shadow"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default BasicUserInformation;
