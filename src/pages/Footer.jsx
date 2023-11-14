import React from "react";

function Footer(){
    return(
<footer className="text-center text-white ">
        {/* Grid container */}
        <div className="container">
            {/* Section: Social media */}
            <section className="footer_media">
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        className="fab fa-facebook-f"></i></a>

                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        className="fab fa-twitter"></i></a>

                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        className="fab fa-instagram"></i></a>

                {/* Youtube */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        className="fab fa-youtube"></i></a>
                
                {/* Tiktok */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fab fa-tiktok"></i></a>

                   {/* Gmail */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fab fa-google"></i></a>   

                {/* What's app */}
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                   className="fab fa-whatsapp"></i></a>
            </section>
        </div>
    </footer>

    )
}

export default Footer;