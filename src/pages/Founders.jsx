import React from "react";
import { Row, Col, Container} from "react-bootstrap";

function Founders(){
    return(
        <>
         {/*<!--Founders Section-->*/}
         <Container fluid as="section" id="foundersSection" className="sections">
                <Row className="sectionTitles">
                    <Col>
                    <h2>Conocenos</h2>
                    <h1>Fundadores.</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid as="div" className="subsections" id="founders">
                <h1 className="subtitles">Founders.</h1>
                <Row>
                    <Col md={4}>
                        <h4>Chachi del castillo.</h4><br></br>
                        <p>
                            Lic. Danza opción multidisciplinar, egresada de la Academia de la danza Mexicana, INBAL.
                        </p>
                        <p>
                            Bailarina profesional con experiencia en escena, creación coreografica, docencia y competencia a
                            nivel nacional e internacional.
                        </p>
                        <p>
                            Se caracteriza por se una lider apasionada, disciplinada y comprometida
                        </p>
                        <p>
                            A lo largo de su carrera artistica se ha preparado con diversas herramientas de trabajo y géneros
                            como: Danza Clásica, Danza Contemporanea, Folklore Mexicano, Danzas Urbanas y Ritmos Látinos.
                        </p>
                        <p>
                            Ama estar activa y complementar su Danza con distintos deportes.
                        </p>
                    </Col>
                    <Col md={4} className="align-self-center">
                        <img src="images/general/fundadores.png" alt="Imagen de los fundadores" />
                    </Col>
                    <Col md={4}>
                        <h4>Hiram Rodrigo Claret Morales</h4><br></br>
                            <p>
                                Bailarín profesional con larga trayectoria en ritmos latinos, influenciado de la composición
                                coreográfica a la par de su preparación como bailarín.
                            </p>
                            <p>
                                Actualmente se desenvuelve como bailarín, docente y coreógrafo en el ámbito profesional de los
                                ritmos latinos, enfocado en la bachata.
                            </p>
                            <p>
                                Se caracteriza por ser un lider apasionado, creativo y perseverante, impulsando a sus alumnos de
                                manera constantea a dar siempre su mayor esfuerzo.
                            </p>
                            <p>
                                Ha competido en diversos eventos, representando a México dentro y fuera del país.
                            </p>
                    </Col>
                </Row>
             </Container>
        </>
    )
}

export default Founders;