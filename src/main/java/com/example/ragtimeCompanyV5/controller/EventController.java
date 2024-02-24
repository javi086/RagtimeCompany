package com.example.ragtimeCompanyV5.controller;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/events")
public class EventController {
    @Autowired
    private EventService eventService;


    @GetMapping("/")
    public Iterable<Event> getEvents() {
        return eventService.getEvents();
    }
    @GetMapping("/getEventById/{id}")
    public ResponseEntity<Event> getEventsById(@PathVariable Long id) {
        return  ResponseEntity.ok(eventService.getEventById(id));
    }
    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event newEvent) {
        return eventService.createEvent(newEvent);
    }


    @PutMapping("/updateEventById/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent){

         return ResponseEntity.ok(eventService.updateEvent(id, updatedEvent));

    }

    @DeleteMapping("/deleteEventById/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEventById(@PathVariable Long id){
        return  ResponseEntity.ok(eventService.deleteEvent(id));
    }




}
