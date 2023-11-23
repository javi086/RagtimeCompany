import React from "react";

function NotFound(){
    return(
    <>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <h1 style={{textAlign:"center"}}>OOPS!</h1>
            <h2 style={{textAlign:"center"}}>Pagina no encontrada.</h2>
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src="../images/general/pageNotFound.png" alt="Page not found" style={{maxWidth: "100%", height: "auto"}} />
                </div>
        </div>
    </>
    )
}

export default NotFound;