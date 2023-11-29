import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";

function Dancers(){
    return(
        <>
            {/*<!--Dancers Section-->*/}
            <Container fluid as="section" id="dancersSection" className="sections">
                <Row className="sectionTitles">
                    <Col>
                        <h2>Conocenos</h2>
                        <h1>Bailarines.</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid as="div" className="subsections" id="dancers">
              <h1 className="subtitles">Bailarines de RagtimeCompany.</h1>
                <Carousel>
                    <Carousel.Item>
                       <Row className="dancersSpace" style={{border:"solid white 2px"}}>
                        <Col md={4}>
                            <Carousel.Caption>
                                <p>Itzayana algo algo algo - Itza</p>
                                <img src="images/members/itza.jpeg" alt="user-profile"/>
                                <p>"Me gustan las galletas oreo, chockis y el Whisky  (con galletas) dasdadsdsadasdasd asdasdsdasd dasdas".</p>
                            </Carousel.Caption>
                        </Col>
                        <Col md={4}>
                            <Carousel.Caption>
                                <p>Kevin bla bla bla - Kevs</p>
                                <img src="images/members/kevin.jpeg" alt="user-profile"/>
                                <p>Comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer.</p>
                            </Carousel.Caption>
                        </Col>
                        <Col md={4}>
                           <Carousel.Caption>
                                <p>Mirna algo algo algo - Mir</p>
                                <img src="images/members/Mirna.jpeg" alt="user-profile" />
                                <p>GYM GYM GYM GYM GYM GYM GYM GYM.</p>
                           </Carousel.Caption>
                        </Col>
                       </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default Dancers;