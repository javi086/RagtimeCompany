package com.example.ragtimeCompanyV5.service;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//El servicio es el encargado de gestionar los eventos
//El servicio debe estar inyectado en el controlador
@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    private List<Event> events = new ArrayList<>();
    private Long nextId = 1L;



    //POST
    public void createEvent(Event event){
   eventRepository.save(event);
    }

    public void deleteEvent(Long id){
        eventRepository.deleteById(id);
    }
    public void deleteAllEvents(){
            eventRepository.deleteAll();
    }
public Event getEvent(Long id){
        return eventRepository.findById(id).orElse(null);
}
    public Iterable<Event>getEvents(){ //Iterable es una iterfaz que nos ayuda a leer una extructura de datos que es iterable es decir se pueden recorrer por un for-each
        return eventRepository.findAll();
    }

    public void updateEvent(Event event){
        eventRepository.save(event);
}
}
