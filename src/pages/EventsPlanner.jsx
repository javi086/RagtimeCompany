import React, { useEffect, useState } from "react";
import { Row, Col, Container, Accordion, Button, Form, Table } from "react-bootstrap";
import EventService from "../services/EventService";


function EventsPlanner() {

  //POST
  const [eventInfo, setEventInfo] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: ""
  });
  
  const saveEventInfo = (e) =>{
    e.preventDefault();
    EventService.addEvent(eventInfo).then(response => {
      console.log(response.data);
    }).catch(error =>{console.log(error)})
    
  };

  //GET
  const [events, setEvents] = useState([]);

  useEffect(() =>{
    EventService.getAllEvents().then(response => {
      setEvents(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  },[])

  //POST  


  return (
    <>

      <Container fluid as="div" id="eventPlanner">
        <Row>
          <Col>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: 'lightblue', fontSize: '18px' }}>
                  <span style={{ color: "red" }}>Agregador de eventos</span>
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
                        value={eventInfo.name}
                        onChange={(e) => setEventInfo({...eventInfo, name: e.target.value})}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formLocation">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='location'
                        value={eventInfo.location}
                        onChange={(e) => setEventInfo({...eventInfo, location: e.target.value})}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formStartDate">
                        <Form.Label>Fecha de Inicio</Form.Label>
                        <Form.Control 
                        type="date" 
                        name="startDate"
                        value={eventInfo.startDate}
                        onChange={(e) => setEventInfo({...eventInfo, startDate: e.target.value})}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formEndDate">
                        <Form.Label>Fecha de termino</Form.Label>
                        <Form.Control 
                        type="date" 
                        name="endDate"
                        value={eventInfo.endDate}
                        onChange={(e) => setEventInfo({...eventInfo, endDate: e.target.value})}
                        />
                      </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onClick={ (e) => saveEventInfo(e)}>
                      Agregar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>


             { /*Seccion para mostrar los eventos creados*/}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Nombre del evento</Accordion.Header>
                <Accordion.Body style={{ color: 'black' }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Location</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Termino</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        events.map(
                          event =>
                        <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.name}</td>
                        <td>{event.location}</td>
                        <td>{event.startDate}</td>
                        <td>{event.endDate}</td>
                      </tr>
                      )
                      }
                    </tbody>
                  </Table>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>


      </Container>
    </>
  )

}
export default EventsPlanner;