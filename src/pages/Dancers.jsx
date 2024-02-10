import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

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
                <Carousel slide={true} control={true} indicators={false} >
                    <Carousel.Item>
                       <Row className="dancersSpace" style={{border:"solid white 2px"}}>
                        <Col md={4}>
                            <Container as="div">
                                <p>Itzayana algo algo algo - Itza</p>
                                <img src="images/members/itza.jpeg" alt="user-profile" />
                                <p>"Me gustan las galletas oreo, chockis y el Whisky  (con galletas) dasdadsdsadasdasd asdasdsdasd dasdas".</p>
                            </Container>
                                 </Col>
                        <Col md={4}>
                            <Container as="div">
                                <p>Kevin bla bla bla - Kevs</p>
                                <img src="images/members/kevin.jpeg" alt="user-profile"/>
                                <p>Comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer comer.</p>
                            </Container>
                                </Col>
                        <Col md={4}>
                                <p>Mirna algo algo algo - Mir</p>
                                <img src="images/members/Mirna.jpeg" alt="user-profile" />
                                <p>GYM GYM GYM GYM GYM GYM GYM GYM.</p>
                        </Col>
                       </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default Dancers;