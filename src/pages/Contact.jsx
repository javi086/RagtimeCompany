import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicUserInformation from "../components/BasicUserInformation";

function Contact() {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        paternalName: "",
        maternalName: "",
        email: "",
        message:""
    });

    function handleInputChange(e) {
        const { name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: e.target.value,
        });
    }

    function sendUserInformation(e) {
        e.preventDefault();
        console.log("Informacion enviada: ", userInfo);
        setUserInfo({
            firstName: "",
            paternalName: "",
            maternalName: "",
            email: "",
            message:""
        });
    }
    return (
        <>
            <section id="contact_section" className="sections" style={{ border: 'solid 2px white' }}>
                <div className="container-fluid ">
                    <div className="row section_titles">
                        <div className="col">
                            <p className="h3">Se parte de nuestro equipo.</p>
                            <h1 className="display-1">Contactanos.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container subsections">
                <div className="row" style={{ border: 'solid 2px blue' }}>
                    <div className="col-md-12 subtitles">
                        <h2>Nos encantaría saber de ti.</h2>
                    </div>
                </div>
            </div>

            <div className="row" style={{ border: 'solid 2px pink' }}>
                <div className="col-md-6">
                    <p>Encuentranos en las siguiente redes sociales.</p>
                    <Link
                        className="btn btn-outline-light btn-floating m-1"
                        to="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <i>Facebook</i><br />
                    <Link
                        className="btn btn-outline-light btn-floating m-1"
                        to="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <i>Twitter</i><br />
                    <Link
                        className="btn btn-outline-light btn-floating m-1"
                        to="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <i>Instagram</i><br />
                    <Link
                        className="btn btn-outline-light btn-floating m-1"
                        to="#!"
                        role="button"
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <i>Youtube</i><br />
                    <Link
                        className="btn btn-outline-light btn-floating m-1"
                        to="#!"
                        role="button"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </Link>
                    <i>Whatsapp</i>
                </div>

                <div className=" container col-md-6">
                    <form onSubmit={sendUserInformation}>
                        <BasicUserInformation
                            userInfo={userInfo}
                            handleInputChange={handleInputChange}>
                        </BasicUserInformation>
                        <label
                            htmlFor="formGroupExampleInput"
                            className="col-sm-2 col-form-label"
                        >Mensaje:
                        </label>
                        <textarea className="form-control" id="message" cols="6" name="message" onChange={handleInputChange}></textarea>
                        <button type="submit">Contactar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
