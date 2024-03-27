import React from "react";

function Member({ name, email, password }) {
  return (
    <>
      <h1>Ragtime Company - Member's Profile</h1>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{password}</li>
      </ul>
    </>
  );
}

export default Member;
