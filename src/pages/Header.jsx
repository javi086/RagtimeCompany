import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import CompanyBrand from "../components/CompanyBrand";
import Tips from "../components/Tips";
import MainMenu from "../components/MainMenu";

function Header(){
    return(
    <Container fluid as="header" id="ragtimeHeader">
        <Navbar collapseOnSelect expand="lg" data-testid="header" id="ragtimeNavBar" data-bs-theme="dark">
            <Container fluid  as="div" className="bg-dark">
                <Row className="w-100">
                  <CompanyBrand></CompanyBrand>
                  <Tips></Tips>
                  <MainMenu></MainMenu>
                </Row>
            </Container>
        </Navbar>
    </Container>
        /*
      <header id="main_header" className="container-fluid col-md-12" data-testid="header">
      <div className="row bg-dark">
          <CompanyBrand></CompanyBrand>
          <Tips></Tips>
          <MainMenu></MainMenu>
      </div>
  </header>
  */
    )
}

export default Header;