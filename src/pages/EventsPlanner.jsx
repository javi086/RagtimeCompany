import React, { useEffect, useState } from "react";
import { Row, Col, Container, Accordion, Button, Form, Table } from "react-bootstrap";
import EventService from "../services/EventService";
import EventValidator from "../../scripts/EventValidator";



function EventsPlanner() {
  const prueba = () => {
    const someValue = EventValidator.hola();
    console.log(someValue);
  }
  const prueba2 = () => {
    console.log("Hola");
  }

  //POST
  const [eventInfo, setEventInfo] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: ""
  });

  const addEvent = (e) => {
    e.preventDefault();
    console.eventInfo;
    EventService.addEvent(eventInfo).then(response => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
  };

  //GET

  const [events, setEvents] = useState([]);
  useEffect(() => {
    EventService.getAllEvents().then(response => {
      setEvents(response.data);
    }).catch(error => { console.log(error) })
  }, [])



  //PUT
  const [isVisible, setVisibility] = useState(true);
  const [isDisabled, setDisabled] = useState(true);
  /*const [editedEventInfo, setEditedEventInfo] = useState({
    name: eventInfo.name,
    location: eventInfo.location,
    startDate: eventInfo.startDate,
    endDate: eventInfo.endDate});*/

  const updateEventInfo = () => {
    setDisabled(false);
    setVisibility(false);

  }

  const [editableRow, setEditableRow] = useState(null);

  const editEventInfo = (eventId) => {
    setEditableRow((prevEditableRow) => {
      return prevEditableRow === eventId ? null : eventId;
    });
  };

  const saveEventEdited = (eventId) => {
    console.log(eventId);
    console.log(eventInfo);
    EventService.updateEventById(eventId, eventInfo).then(response => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
    console.log(`Save event with ID ${editableRow}`);
    setEditableRow(null);
  };

  const deleteEvent = (eventId) => {
    EventService.deleteEventById(eventId).then((response) => {
      console.log(response.data);
    }).catch(error => { console.log(error) })
    console.log(`Event deleted with ID ${editableRow}`);
  }

  return (
    <>
      <Container fluid as="div" id="eventPlanner">
        <Row>
          <Col>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: 'lightblue', fontSize: '18px' }}>
                  <span style={{ color: "red" }}>Agregador de eventos</span>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <p>
                      <b className="mandatory_field">(*)</b> Campos mandatorios
                    </p>
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

              {/**PRUEBA DE FRONT  2*/}
              {events.map((event) => (
                <Accordion.Item key={event.id} eventKey={event.id}>
                  <Accordion.Header><h6>{event.name}</h6></Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Row><Col><h4>Información del evento</h4></Col></Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formName">
                          <Form.Label>Nombre</Form.Label>
                          
                            <Form.Control
                              type="text"
                              placeholder={event.name}
                              name="registeredName"
                              value={!isDisabled ? eventInfo.name : "event.name"}
                              disabled={isDisabled}
                              onChange={(e) => setEventInfo({...eventInfo, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formLocation">
                          <Form.Label>Ubicación</Form.Label>
                          <Form.Control
                            type="text"
                            name={event.location}
                            value={isDisabled ? eventInfo.location : event.location}
                            disabled={isDisabled}
                            onChange={(e) => setEventInfo({...eventInfo, location: e.target.value })}
                          />
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formStartDate">
                          <Form.Label>Fecha de Inicio</Form.Label>
                          <Form.Control
                            type="text"
                            name="registeredStartDate"
                            value={event.startDate}
                            disabled
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEndDate">
                          <Form.Label>Fecha de termino</Form.Label>
                          <Form.Control
                            type="text"
                            name="registeredEndDate"
                            value={event.endDate}
                            disabled
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} controlId="buttonsForms" style={{ display: 'inline' }}>
                          <button type="button" className={isVisible ? "btn btn-warning" : "hideMe"} onClick={updateEventInfo}>Actualizar</button>
                          <button type="button" className={!isVisible ? "btn btn-success" : "hideMe"}>Guardar</button>
                          <button type="button" className={!isVisible ? "btn btn-danger" : "hideMe"}>Cancelar</button>
                        </Form.Group>
                      </Row>

                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              ))}

              { /*Seccion para mostrar los eventos creados*/}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Eventos registrados</Accordion.Header>
                <Accordion.Body style={{ color: 'black' }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Location</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Termino</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td>{event.id}</td>
                          <td>{editableRow === event.id ? (
                            <Form.Control type="text" onChange={(e) => setEventInfo({ ...eventInfo, name: e.target.value })} />
                          ) : (event.name)}
                          </td>
                          <td>{editableRow === event.id ? (
                            <Form.Control type="text" onChange={(e) => setEventInfo({ ...eventInfo, location: e.target.value })} />
                          ) : (event.location)}
                          </td>
                          <td>{editableRow === event.id ? (
                            <Form.Control type="date" onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })} />
                          ) : (event.startDate)}
                          </td>
                          <td>{editableRow === event.id ? (
                            <Form.Control type="date" onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })} />
                          ) : (event.endDate)}
                          </td>
                          <td>
                            {editableRow === event.id ? (
                              <>
                                <Button variant="success" onClick={() => saveEventEdited(event.id)}>Guardar</Button>
                                <Button variant="secondary" onClick={() => editEventInfo(event.id)}>Cancelar</Button>
                              </>
                            ) : (
                              <>
                                <Button variant="primary" onClick={() => editEventInfo(event.id)}>Editar</Button>
                                <Button variant="danger" onClick={() => deleteEvent(event.id)}>Eliminar</Button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>)

}
export default EventsPlanner;