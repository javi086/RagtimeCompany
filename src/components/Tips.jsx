import React from "react";

function Tips(){
    return (
     <div className="col-lg-5 col-md-9">
        <div id="tips" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"
            data-bs-pause="hover"> 
            <div className="carousel-inner">
                <div className="carousel-item active"> {/*Debe haber un slide como primario/active siempre*/}
                    <p>"Esto sera una frase o pensamiento definidio por los couchs de la compañia, para mostrar al publico".....</p>
                </div>
                <div className="carousel-item">
                    <p>"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla".</p>
                </div>
                <div className="carousel-item">
                    <p>"bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla".</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tips;