import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function TrainingCompany(){
    return(
        <>
        
        <Container fluid as="section" id="companyTrainingSection" className="sections">
            <Row className="sectionTitles">
                <Col>
                <h2>Actividades</h2>
                 <h1 className="display-1">Entrenamiento en la comapañia</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid as="div" className="subsections">
            <Row>
                <Col md={12} className="subTtiles">
                <p class="fs-1">Entrenamiento RagtimeCompany.</p>
                <p class="informativo rounded"><b>Un día de entrenamiento diagnostico ¡GRATIS! 😱 para ser parte de nuestra compañia.</b></p> 
                <hr class="hr"/>
                <p class="fs-4">El entrenamiento de nuestra compañía tiene como objetivo principal encontrar la mejor versión dancística de cada uno de nuestros bailarines.</p>
                <p class="fs-4">Los días de entrenamiento se distribuyen a lo largo de la semana teniendo cada día una tarea específica. Con perseverancia, compromiso, disciplina y pasión lograrás exponer nuestras creaciones en escenarios importantes a nivel
                    nacional e internacional.</p>
                <p class="fs-4">Formamos un gran equipo y fomentamos el trabajo en equipo para alcanzar metas personales y grupales.
                    Al ser parte de Ragtime Company se te proporcionarán herramientas diversas, variedad de estilos, nos enfocamos principalmente en la Bachata</p>
                <p class="fs-4">Entrena con Rodrigo y Chachi, sé parte de Ragtime y ve en busca de lo que tanto amas hacer.... <em>BAILAR!</em></p>
                </Col>
            </Row>

            <hr clasName="hr"></hr>

            <Row>
                <Col>
                <p className="fs-1 text-center">Horarios</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Lunes</h2>
                    <p>7:30 a 9:00 PM</p>
                </Col>
                <Col>
                    <h2>Martes</h2>
                    <p>8:00 A 9:00 PM</p>
                </Col>
                <Col>
                    <h2>Miercoles</h2>
                    <p>7:30 a 9:00 PM</p>
                </Col>
                <Col>
                    <h2>Jueves</h2>
                    <p>7:30 a 9:00 PM</p>
                </Col>
                <Col>
                    <h2>Viernes</h2>
                    <p>7:00 a 9:00 PM</p>
                </Col>
                <Col>
                    <h2>Sábado</h2>
                    <p>10:00 a 12:00 PM ???????</p>
                </Col>
            </Row>

        </Container>

        </>
    )
}

export default TrainingCompany;