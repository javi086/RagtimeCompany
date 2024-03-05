package com.example.ragtimeCompanyV5.service;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.repository.EventRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class EventServiceTest {
    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;

    @Test
    void addEventToCallRepository(){
        Event event = new Event();
        event.setName("Evento de prueba");
        event.setLocation("Ubicación prueba");
        event.setStartDate(LocalDate.of(2023, 3, 8));
        event.setEndDate(LocalDate.of(2023, 3, 18));
        System.out.println(event);
        eventService.createEvent(event);
        verify(eventRepository).save(event);
    }


    @Test
    void deleteEventAndVerifyRespository(){
        Event event = new Event();
        eventRepository.deleteById(1L);
        verify(eventRepository).deleteById(1L);
    }

}
