import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Structure() {
    return (
        <>
            {/*<Container fluid as="header" className="custom-header">
                <Row>
                    <Col style={{ border: "white 1px solid" }}>
                        Brand
                    </Col>
                    <Col style={{ border: "blue 1px solid" }}>Tips</Col>
                    <Col style={{ border: "yellow 1px solid" }}>Menu</Col>
                </Row>
    </Container> */}

            <Container fluid as="main" className="custom-main">

                <Container fluid as="section" id="meetUsSection" className="sections">
                    <Row className="sectionTitles">
                        <Col>
                            <h2>Conocenos</h2>
                            <h1>Acerca de nosotros.</h1>
                        </Col>
                    </Row>
                </Container>

                <Container fluid as="div">
                <Card bg='dark' border="primary" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="images/members/itza.jpeg" alt="Ragtime-member" />
                                    <Card.Body>
                                        <Card.Title>Itzayana algo algo - Itza</Card.Title>
                                        <Card.Text>
                                            "Me gustan las galletas oreo, chockis y el Whisky  (con galletas) dasdadsdsadasdasd asdasdsdasd dasdas".
                                        </Card.Text>
                                    </Card.Body>
                 </Card>


                        <Carousel controls={false} indicators={false}>
                            <Carousel.Item>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Item>
                    </Carousel>
                </Container>
            </Container>

            
        </>


    )
}

export default Structure;