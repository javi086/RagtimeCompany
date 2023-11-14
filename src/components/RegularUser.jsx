import React from "react";

function RegularUser({ name, email, password }) {
  return (
    <>
      <h1>Regular User Profile</h1>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{password}</li>
      </ul>
    </>
  );
}

export default RegularUser;
