import React from "react";
import RegularUser from "./RegularUser";
import Member from "./Member";

function UserProfile({ name, email, password, member }) {
  return member ? (
    <Member name={name} email={email} password={password}></Member>
  ) : (
    <RegularUser name={name} email={email} password={password}></RegularUser>
  );
}

export default UserProfile;
