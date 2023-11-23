import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
<footer className="text-center text-white" data-testid="footer">
        {/* Grid container */}
        <div className="container">
            {/* Section: Social media */}
            <section className="footer_media">
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
            </section>
        </div>
    </footer>

    )
}

export default Footer;