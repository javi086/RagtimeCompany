import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicUserInformation from "../components/BasicUserInformation";
import useEmptyInputStyle from "../components/hooks/useEmptyInputStyle";
import { Row, Col, Container } from "react-bootstrap";

function Contact() {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        paternalName: "",
        maternalName: "",
        email: "",
        sex: "",
    });

    const [formValid, setFormValid] = useState(false);
    const emptyInputs = useEmptyInputStyle(userInfo);


    useEffect(() => {
        const isValid = Object.values(userInfo).every((value) => value !== "");
        setFormValid(isValid);
    }, [userInfo]);

    function handleInputChange(e) {
        const { name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: e.target.value,
        });
    }
    const [error, setError] = useState('');

    function validateInformation(e) {
        e.preventDefault();

        if (formValid) {
            console.log("Information sent:", userInfo);
        }
        else {
            setError(<p style={{ color: "red" }}> Favor de llenar todos los campos mandatorios  (*) </p>);
        }

    }

    return (
        <>
            <Container fluid as="section" id="contactSection" className="sections">
                <Row className="sectionTitles">
                    <Col>
                        <h3>Se parte de nuestro equipo.</h3>
                        <h1 className="display-1">Contactanos.</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid as="div" className="subSections" style={{ border: "solid red 2px" }}>
                <Row>
                    <Col className="subTitles" md={12}>
                        <h2>Nos encantaría saber de ti.</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
                        <form onSubmit={validateInformation} id="contactForm">
                            <BasicUserInformation
                                userInfo={userInfo}
                                handleInputChange={handleInputChange}
                                emptyInputs={emptyInputs}
                            >
                            </BasicUserInformation>
                            <label
                                htmlFor="formGroupExampleInput"
                                className="col-sm-2 col-form-label"
                            >Mensaje:
                            </label>
                            <textarea className="form-control" id="message" cols="6" name="message" onChange={handleInputChange}></textarea>
                            {error}
                            <button type="submit" className="ragtimeButton">Contactar</button>
                        </form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Ubicación:</h2>
                        <p>Actualmente nuestras clases y ensayos se dan en el estudio de danza llamado "Bachata Team", ubicado en Cecilio Robelo 469, Jardín Balbuena, Venustiano Carranza,
                            15900 Ciudad de
                            México, CDMX</p>
                        <Container  as="div" id="location">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15051.20153928054!2d-99.10529!3d19.4210289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffd73a0f0c7%3A0xffae17b863b060e7!2sBachata%20Team%20MX!5e0!3m2!1ses!2smx!4v1684728079312!5m2!1ses!2smx"
                                className="responsiveIframe" 
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                ></iframe>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
