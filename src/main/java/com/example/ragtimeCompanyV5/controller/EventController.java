package com.example.ragtimeCompanyV5.controller;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/events")
public class EventController {
    @Autowired
    private EventService eventService;
    /*

    //En este controlador si le meto un Modelo en la parte de los argumentos es el objeto que usa Spring MVC para pasar todos los datos a la vista( lo que tiene Index )
    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("events", eventService.getAllEvents()); //Mando los objetos que se encuentren en getAllEvents
        return "index";
    }

    //@ModelAttribute me permite recibir el tipo de objeto que se recibe de la pagina html(index)
    @PostMapping("/create")
    public String createEvent(@ModelAttribute Event newEvent){
        eventService.createEvent(newEvent);
        return "redirect:/";//Nos ayuda a renderisar la seccion de eventos agendados redirigiendo el flujo a @GetMapping("/")
    }

*/

    @GetMapping("/")
    public Iterable<Event> getEvents(){
        return eventService.getEvents();
    }

    @PostMapping("/addEvent")
    public void addEvent(Event event){
        eventService.createEvent(event);
    }



}
