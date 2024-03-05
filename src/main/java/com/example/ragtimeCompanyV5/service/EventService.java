package com.example.ragtimeCompanyV5.service;

import com.example.ragtimeCompanyV5.exception.ResourceNotFoundException;
import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;

//import static org.springframework.web.servlet.mvc.method.annotation.ReactiveTypeHandler.logger;

//El servicio es el encargado de gestionar los eventos
//El servicio debe estar inyectado en el controlador
@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public Iterable<Event> getEvents() { //Iterable es una iterfaz que nos ayuda a leer una extructura de datos que es iterable es decir se pueden recorrer por un for-each
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("El evento con ese ID no existe: " + id));
    }

    public Event getEventByName(String eventName) {
        if (eventName == null) {
            throw new IllegalArgumentException("Event name cannot be null");
        }

        return eventRepository.findEvenByName(eventName)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with name: " + eventName));

    }

    public Event createEvent(Event event) {
        DateTimeFormatter formatterDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String myFormattedDate = event.getStartDate().format(formatterDate);
        System.out.println("Formateada en String: " + myFormattedDate);
        LocalDate parsedStartDate = LocalDate.parse(myFormattedDate, formatterDate);
        System.out.println("Fecha formateada " + parsedStartDate);
        event.setStartDate(parsedStartDate);
        return eventRepository.save(event);
    }

    public Map<String, Boolean> deleteEvent(Long id) {
        eventRepository.deleteById(id);
        Map<String, Boolean> confirmation = new HashMap<>();
        confirmation.put("Evento eliminado correctamente", Boolean.TRUE);
        return confirmation;

    }

    public Event updateEvent(Long id, Event updatedEvent) {
        Optional<Event> existingEvent = eventRepository.findById(id);
        if (existingEvent.isPresent()) {
            Event eventToBeUpdated = existingEvent.get();
            eventToBeUpdated.setName(updatedEvent.getName());
            eventToBeUpdated.setLocation(updatedEvent.getLocation());
            eventToBeUpdated.setStartDate(updatedEvent.getStartDate());
            eventToBeUpdated.setEndDate(updatedEvent.getEndDate());
            eventRepository.save(eventToBeUpdated);
            return eventToBeUpdated;
        } else {
            throw new ResourceNotFoundException("El evento con ese ID no existe: " + id);
        }

    }
}
