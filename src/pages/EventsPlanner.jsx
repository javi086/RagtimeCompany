import React, { useEffect, useState } from "react";
import { Row, Col, Container, Accordion, Button, Form, Table, Card } from "react-bootstrap";
import EventService from "../services/EventService";
import {validateMandatoryInformation}from "../../scripts/globalValidations";



function EventsPlanner() {
  //GET - Trayendo todos los eventos(objetos) registrados
  const [events, setEvents] = useState([]);
  useEffect(() => {
    EventService.getAllEvents().then(response => {
      setEvents(response.data);
    }).catch(error => { console.log(error) })
  }, [])

  //POST - Agregando un nuevo Evento
  const [eventInfo, setEventInfo] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: ""
  });

  
  const addEvent = (e) => {
    e.preventDefault();
    let isEmpty = new Map();
    isEmpty = validateMandatoryInformation(eventInfo);
    console.log("AddEvent respuesta")
    for(const [element, value] of isEmpty){
      console.log(element, value)
    }
/*

    EventService.addEvent(eventInfo).then(response => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
    console.log("Event successfully added");*/
  };

  //PUT
  const [isVisible, setVisibility] = useState(true);
  const [isDisabled, setDisabled] = useState(true);

  const updateEventInfo = () => {
    setDisabled(false);
    setVisibility(false);

  }
  const cancelEventEdition = () => {
    setDisabled(true);
    setVisibility(true);
  }


  const saveEventEdited = (eventId) => {
    setVisibility(true);
    setDisabled(true);
    EventService.updateEventById(eventId, eventInfo).then(response => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
    console.log("Event successfully updated with Id: " + eventId);
  };

  const deleteEvent = (eventId) => {
    EventService.deleteEventById(eventId).then((response) => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
    console.log("Event successfully deleted with Id: " + eventId);
  }

  return (
      <Container fluid as="div" id="eventPlanner">
        <Row>
          <Col>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: '#f0f0f0' }}>
                  <h5>Agregador de eventos</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row><Col><h4>Información inicial del evento</h4></Col></Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nombre del evento"
                          name="name"
                          onChange={(e) => setEventInfo({ ...eventInfo, name: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formLocation">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control
                          type="text"
                          name='location'
                          onChange={(e) => setEventInfo({ ...eventInfo, location: e.target.value })}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formStartDate">
                        <Form.Label>Fecha de Inicio</Form.Label>
                        <Form.Control
                          type="date"
                          name="startDate"
                          onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formEndDate">
                        <Form.Label>Fecha de termino</Form.Label>
                        <Form.Control
                          type="date"
                          name="endDate"
                          onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
                        />
                      </Form.Group>
                    </Row>
                    <Button variant="primary" onClick={(e) => addEvent(e)}>
                      Agregar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        {/**Mostrar todos los eventos registrados*/}
        <Row className="mt-5">
          <Col>
            <Card >
              <Card.Header as="h5" style={{ backgroundColor: "purple", color: "white" }}>Eventos actualmente registrados</Card.Header>
              <Card.Body>
                <Accordion>
                  {events.map((event) => (
                    <Accordion.Item key={event.id} eventKey={event.id}>
                      <Accordion.Header><span>{event.name}</span></Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          <Row><Col><h4>Información del evento</h4></Col><Col>ID: {event.id}</Col></Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formName">
                              <Form.Label>Nombre</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={event.name}
                                name="registeredName"
                                value={!isDisabled ? eventInfo.name : event.name}
                                disabled={isDisabled}
                                onChange={(e) => setEventInfo({ ...eventInfo, name: e.target.value })}
                              />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLocation">
                              <Form.Label>Ubicación</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder={event.location}
                                name="registeredLocation"
                                value={!isDisabled ? eventInfo.location : event.location}
                                disabled={isDisabled}
                                onChange={(e) => setEventInfo({ ...eventInfo, location: e.target.value })}
                              />
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formStartDate">
                              <Form.Label>Fecha de Inicio</Form.Label>
                              <Form.Control
                                type={isDisabled ? "text" : "date"}
                                name="registeredStartDate"
                                value={!isDisabled ? eventInfo.startDate : event.startDate}
                                disabled={isDisabled}
                                onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
                              />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formEndDate">
                              <Form.Label>Fecha de termino</Form.Label>
                              <Form.Control
                                type={isDisabled ? "text" : "date"}
                                name="registeredEndDate"
                                value={!isDisabled ? eventInfo.endDate : event.endDate}
                                disabled={isDisabled}
                                onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group as={Col} controlId="buttonsForms" style={{ display: 'inline' }}>
                              <button type="button" className={isVisible ? "btn btn-warning" : "hideMe"} onClick={updateEventInfo}>Actualizar</button>
                              <button type="button" className={isVisible ? "btn btn-danger" : "hideMe"} onClick={() => deleteEvent(event.id)}>Eliminar</button>
                              <button type="button" className={!isVisible ? "btn btn-success" : "hideMe"} onClick={() => saveEventEdited(event.id)}>Guardar</button>
                              <button type="button" className={!isVisible ? "btn btn-secondary" : "hideMe"} onClick={cancelEventEdition}>Cancelar</button>
                            </Form.Group>
                          </Row>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )

}
export default EventsPlanner;