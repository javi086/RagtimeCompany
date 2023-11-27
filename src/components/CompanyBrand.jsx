import React from "react";
import { Navbar, Col, Nav } from "react-bootstrap";

function CompanyBrand(){
    return(
        <Col md="3" data-testid="brand">
            <Navbar.Brand  id="brandName">
                <Nav.Link href="/">
                <h2>Ragtime</h2>
                <h4>Company</h4>
                </Nav.Link>
            </Navbar.Brand>
            
        </Col>
        /*
        <div className="col-lg-3 col-md-3" >
              <nav className="navbar navbar-dark">
                  <Link className="navbar-brand" to="/" id="brand_name">
                      <h5>Ragtime</h5>
                      <h6>Company</h6>
                  </Link>
              </nav>
          </div>
          */
    )

}

export default CompanyBrand;