import React from "react";
import CompanyBrand from "../components/CompanyBrand";
import Tips from "../components/Tips";
import MainMenu from "../components/MainMenu";

function Header(){
    return(
      <header id="main_header" className="container-fluid col-md-12">
      <div className="row bg-dark">
          <CompanyBrand></CompanyBrand>
          <Tips></Tips>
          <MainMenu></MainMenu>
      </div>
  </header>
    )
}

export default Header;