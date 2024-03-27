import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function OpenClasses(){
    return (
        <>
        <Container fluid as="section" id="openClassesSection" className="sections">
            <Row className="sectionTitles">
                <Col>
                <h2>Actividades</h2>
                 <h1 className="display-1">Clases abiertas.</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid as="div" id="openClasses" className="subsections">
            <Row>
                <Col md={12} className="subTitles">
                <h2>Información de clases abiertas.</h2>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <h3>Clase de bachata - Nivel principiante.</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <img src="/images/general/bachata.jpg"></img>
                </Col>
                <Col md={8}>
                    <p>
                    Únete a nuestras clases de bachata en pareja. No es necesario venir con alguien, 
                    nosotros favorecemos el entrenamiento con los asistentes de cada día. Entrena con Rodrigo y Chachi,
                    grandes exponentes del estilo y mejora tu técnica a través de dinámicas que desarrollarán tus habilidades.
                    </p>
                    <b>Horario:</b> Martes de 8 a 9 P.M.<br/>
                    <b><u>CLASE DE MUESTRA GRATIS.</u></b>
                </Col>
            </Row>
            
            <hr className="hr"></hr>

            <Row>
                <Col md={12}>
                <h3>Clase de salsa on 2 - Nivel principiante.</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <img src="/images/general/salsa.jpeg"></img>
                </Col>
                <Col md={8}>
                    <p>
                    Únete a nuestras clases de Salsa on 2 con Selene de Portugal, con increíble trayectoria dentro del estilo.
                    Esta clase te proporcionara los fundamentos básicos e indispensables para sentirte parte del género y 
                    así lograr combinaciones exquisitas para tu danza.
                    </p>
                    <b>Horario:</b> Jueves de 7:30 a 9 P.M.<br/>
                    <b><u>CLASE DE MUESTRA GRATIS.</u></b>
                </Col>
            </Row>

            <hr className="hr"></hr>

            <Row>
                <Col md={12}>
                <h3>Clase acrobacia en pareja - Nivel principiante.</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <img src="/images/general/acrobacia.jpeg"></img>
                </Col>
                <Col md={8}>
                    <p>
                        Únete a nuestras clases de acrobacia en pareja, no es necesario venir con alguien, nosotros favorecemos el entrenamiento con los
                        asistentes de cada día. Esta clase aportara un entrenamiento general a tu cuerpo, desarrollarás fuerza y mejorarás tu técnica 
                        para la ejecucion de trucos y acrobacias para darle un plus extra a tus coreografías
                    </p>
                    <b>Horario:</b> Viernes de 7:00 a 8 P.M.<br/>
                    <b><u>CLASE DE MUESTRA GRATIS.</u></b>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default OpenClasses;