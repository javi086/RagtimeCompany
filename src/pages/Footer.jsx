import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-center bg-dark" data-testid="footer">
            {/* Grid container */}
       
            <div className="container">
                <div className="row " id="socialMedia">
                    <div className="col">
                        {/* Facebook */}
                        <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i
                            className="fab fa-facebook-f"></i></Link>

                        {/* Twitter */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-twitter"></i></Link>

                        {/* Instagram */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-instagram"></i></Link>

                        {/* Youtube */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-youtube"></i></Link>

                        {/* Tiktok */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-tiktok"></i></Link>

                        {/* Gmail */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-google"></i></Link>

                        {/* What's app */}
                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-whatsapp"></i></Link>
                    </div>
                </div>
             
                <div className="row" id="subFooter">
                    <div className="col">
                        <h5>Ragtime </h5><h6>Company</h6>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;