package com.example.ragtimeCompanyV5.repository;

import com.example.ragtimeCompanyV5.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
   /* @Query(nativeQuery = true, value = "Select from Eventos where name= :eventName and location= :eventLocation" )
    public Event getEventByName(@Param("eventName")String name, @Param("eventLocation") String location);*/

    public Optional<Event> findEvenByName(String name);
}

