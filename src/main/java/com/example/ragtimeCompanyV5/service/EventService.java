package com.example.ragtimeCompanyV5.service;

import com.example.ragtimeCompanyV5.exception.ResourceNotFoundException;
import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

//El servicio es el encargado de gestionar los eventos
//El servicio debe estar inyectado en el controlador
@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    //private List<Event> events = new ArrayList<>();
    private Long nextId = 1L;

    public Iterable<Event>getEvents(){ //Iterable es una iterfaz que nos ayuda a leer una extructura de datos que es iterable es decir se pueden recorrer por un for-each
        return eventRepository.findAll();
    }
    public Event getEventById(Long id){
        return eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("El evento con ese ID no existe: " + id));
    }

    public Event getEventByName(String eventName) {
        if (eventName == null) {
            throw new IllegalArgumentException("Event name cannot be null");
        }

        return eventRepository.findEvenByName(eventName)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with name: " + eventName));

    }
    public Event createEvent(Event event){
    return  eventRepository.save(event);
    }

    public Map<String, Boolean> deleteEvent(Long id){
        eventRepository.deleteById(id);
        Map<String, Boolean> confirmation = new HashMap<>();
        confirmation.put("Evento eliminado correctamente", Boolean.TRUE);
        return confirmation;

    }
    public Event updateEvent(Long id, Event updatedEvent){
      Optional<Event> existingEvent = eventRepository.findById(id);
      if(existingEvent.isPresent()){
         Event eventToBeUpdated = existingEvent.get();
         eventToBeUpdated.setName(updatedEvent.getName());
         eventToBeUpdated.setLocation(updatedEvent.getLocation());
         eventToBeUpdated.setStartDate(updatedEvent.getStartDate());
         eventToBeUpdated.setEndDate(updatedEvent.getEndDate());
         eventRepository.save(eventToBeUpdated);
         return eventToBeUpdated;
      }else {
          throw new ResourceNotFoundException("El evento con ese ID no existe: " + id);
      }

}
}
