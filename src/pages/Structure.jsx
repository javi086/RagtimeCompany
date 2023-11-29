import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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

                <Container fluid as="div" className="subsections" id="aboutUsOption">
                <h1>Subtitloeeeeeeee</h1>
                </Container>

            </Container>

            <Container fluid as="footer" className="custom-footer text-center" data-testid="footer">
                <h1>FOOTEDDDDDDR</h1>
            </Container>
        </>


    )
}

export default Structure;