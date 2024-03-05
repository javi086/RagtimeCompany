package com.example.ragtimeCompanyV5.controller;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.service.EventService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
@AutoConfigureMockMvc
@SpringBootTest
public class EventRestControlerTest {

    @MockBean
    private EventService eventService;

    @Autowired
    private EventController eventController;

    @Test
    void getEventsByIdStatus200Test(){
        Long eventId = 1L;
        Event newMockevent = new Event();
        newMockevent.setId(eventId);

        //Cuando se manda un ID y es encontrado
        when(eventService.getEventById(eventId)).thenReturn(newMockevent);
        ResponseEntity<Event> getEventResponse200 = eventController.getEventsById(eventId);
        assertEquals(200, getEventResponse200.getStatusCode().value()); //Asegurando que es 200 obteniendo el valor de la respuesta
        assertTrue(getEventResponse200.getStatusCode().is2xxSuccessful()); //Asegurando que la respuesta esta en el rango de 200
        Long fakeId = 1000L;

    }
    @Test
    void getEventsByIdStatus400Test(){
        Long eventId = 1000L;
        Event Mockevent = new Event();
        Mockevent.setId(eventId);

        //Cuando se manda un ID y no es encontrado
        when(eventService.getEventById(eventId)).thenReturn(null); //Null para simular que no lo encontro
        ResponseEntity<Event>getEventResponse400= eventController.getEventsById(eventId);
        assertEquals(404, getEventResponse400.getStatusCode().value());
        assertTrue(getEventResponse400.getStatusCode().is4xxClientError());

    }


    @Test
    void addEvent_ReturnsEventObjectOnSuccess(){
        Event expectedEvent = new Event();
        expectedEvent.setName("Evento de prueba");
        expectedEvent.setLocation("Francia");

        when(eventService.createEvent(expectedEvent)).thenReturn(expectedEvent);
        Event returnedEvent= eventController.addEvent(expectedEvent);
        assertEquals(expectedEvent.getClass(), returnedEvent.getClass());
        System.out.println("Expected event class: " + expectedEvent.getClass().getName());
        System.out.println("Returned event class: " + returnedEvent.getClass().getName());


    }

    @Test
    void deleteEventByIdTest(){
        Long eventId=1L;
        Event newEvent = new Event();
        newEvent.setId(eventId);
        Map<String, Boolean> expectedConfirmation = new HashMap<>();
        expectedConfirmation.put("Evento eliminado correctamente", Boolean.TRUE);

        when(eventService.deleteEvent(eventId)).thenReturn(expectedConfirmation);
        ResponseEntity<Map<String, Boolean>> returnedConfirmation = eventController.deleteEventById(eventId);
        Map<String, Boolean> actualConfirmationMap = returnedConfirmation.getBody();

        assertEquals(200, returnedConfirmation.getStatusCode().value());
        assertEquals(expectedConfirmation, actualConfirmationMap);



    }


}
