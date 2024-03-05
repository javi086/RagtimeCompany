import React, { useEffect, useState } from "react";
import { Row, Col, Container, Accordion, Button, Form, Table, Card } from "react-bootstrap";
import EventService from "../services/EventService";
import { validateMandatoryInformation } from "../../scripts/globalValidations";



function EventsPlanner() {


  //GET - Bring all events
  const [events, setEvents] = useState([]);
  useEffect(() => {
    EventService.getAllEvents().then(response => {
      setEvents(response.data);
    }).catch(error => { console.log(error) })
  }, [])

  //GET - Bring Event by Id
  const [eventFound, setEventFound] = useState([]);//*********PENDIENTE*************** */

  //GET - Bring all Events by Name
  const getEventByName = () => {
    let eventName = document.getElementById("eventByName").value;
    EventService.getEventByName(eventName).then(response => {
      const eventFound = [response.data];
      setEvents(eventFound);
    }).catch(error => { console.log(error) })
    document.getElementById("eventByName").value="";

  }

  //POST - Agregando un nuevo Evento
  const [eventInfo, setEventInfo] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: ""
  });

  const [isRendered, setIsRendered] = useState(false);
  const addEvent = (e) => {
    e.preventDefault();
    let isEmpty = validateMandatoryInformation(eventInfo);
    console.log(isEmpty);
    if (isEmpty === true) {
      alert("Favor de ingresar todos los campos mandatorios (*)")
    } else {
      EventService.addEvent(eventInfo).then(response => {
        console.log(response.data);
        document.getElementById("eventForm").reset()
      }).catch(error => { console.log(error) })
      console.log("Event successfully added");

      /* setIsRendered(true);
         EventService.getAllEvents().then(response => {
           setEvents(response.data);
         }).catch(error => { console.log(error) });*/

    }
  };

  //PUT
  const [isVisible, setVisibility] = useState(true);
  const [isDisabled, setDisabled] = useState(true);

  const enableUpdateOption = () => {
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
    <>
      <Container fluid="lg" as="div" id="eventPlannerForm">
        <Row>
          <Col>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: '#f0f0f0' }}>
                  <h5>Agregador de eventos</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Form id="eventForm">
                    <Row><Col><h4>Información inicial del evento</h4></Col></Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nombre del evento"
                          name="name"
                          className="mandatoryField"
                          onChange={(e) => setEventInfo({ ...eventInfo, name: e.target.value })}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formLocation">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ubicación del evento"
                          name='location'
                          className="mandatoryField"
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
      </Container>
      {/**Mostrar todos los eventos registrados*/}
      <Container fluid as="div" id="eventPlannerResult" >
        <Row className="mt-5">
          <Col>
            <Card >
              <Card.Header p={5} as="h5" style={{ backgroundColor: "purple", color: "white" }} id="">Eventos actualmente registrados</Card.Header>
              <Form>
                <Row className="p-2 fs-4">
                  <Col>
                    <p>Buscador de eventos</p>
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col > {/**This can be a separete component due I can use it in another place */}
                    <Form.Control size="sm" type="text" id="eventByName" placeholder="Nombre del evento"></Form.Control>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={getEventByName}>Buscar</Button>
                  </Col>
                </Row>
              </Form>
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
                              <button type="button" className={isVisible ? "btn btn-warning" : "hideMe"} onClick={enableUpdateOption}>Actualizar</button>
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
    </>
  )

}
export default EventsPlanner;