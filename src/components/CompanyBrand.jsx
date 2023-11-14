import React from "react";
import { Link } from "react-router-dom";

function CompanyBrand(){
    return(
        <div className="col-lg-3 col-md-3">
              <nav className="navbar navbar-dark">
                  <Link className="navbar-brand" to="/" id="brand_name">
                      <h5>Ragtime</h5>
                      <h6>Company</h6>
                  </Link>
              </nav>
          </div>
    )

}

export default CompanyBrand;