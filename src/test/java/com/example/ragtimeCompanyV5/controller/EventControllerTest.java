package com.example.ragtimeCompanyV5.controller;


import com.example.ragtimeCompanyV5.service.EventService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EventController.class)
public class EventControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private EventService eventService;

    @Test
    public void getAllEventStatus200() throws Exception {
       mockMvc.perform(get("/api/v1/events/")).andExpect(status().isOk());

    }


}
