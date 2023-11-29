import React from "react";
import { Row, Col, Container} from "react-bootstrap";

function AboutUs(){
    return(
        <>
          {/*<!--AboutUs Section-->*/}
          <Container fluid as="section" id="aboutUsSection" className="sections">
                <Row className="sectionTitles">
                    <Col>
                        <h2>Conocenos</h2>
                        <h1>Acerca de nosotros.</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid as="div" className="subsections" id="aboutUsOption">
                <Row>
                    <Col md={12} className="subtitles">
                        <h2>Acerca de la compañia.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="text-center" style={{border:"red 2px solid"}}>
                        <img src="images/general/RagtimeCompany.png"></img>
                        <Row>
                            <q>El nombre nace del juego de palabras originado por el nombre de los fundadores Rodrigo Morales y
                                Chachi del castillo, en union con el genero musical RAGIME.</q>
                        </Row>
                    </Col>
                    <Col md={8} style={{border:"red 2px solid"}}>
                        <h3 className="subtitles"> Ragtime Company.</h3>
                        <p>
                            Enfocada en la formación de artistica de diversas personas, con quehaceres distintos pero con el
                            mismo objetivo de aprender, crecer y compartir en este bello <em><b>Arte</b></em>.
                            Unidos por la pasión y el compromiso.
                        </p>
                        <p>
                            Buscamos la exposición de nuestro trabajo en escenarios y espacios que nos reten a ser mejores.
                            Nos interesa compartir nuestra <em><b>Danza</b></em> para trascender e inspirar a los demas.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs;