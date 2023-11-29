import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function OpenClasses(){
    return (
        <>
        <Container fluid as="section" id="openClassesSection" className="sections">
            <Row className="sectionTitles">
                <Col>
                <h2>Actividades</h2>
                 <h1>Clases abiertas.</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid as="div" id="openaClasses" className="subsections">
            <Row>
                <Col md={12} className="subTitles">
                <h3>Clase de bachata - Nivel principiante.</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Clase de bachata - Nivel principiante.</h3>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default OpenClasses;