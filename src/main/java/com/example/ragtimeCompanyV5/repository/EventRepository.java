package com.example.ragtimeCompanyV5.repository;

import com.example.ragtimeCompanyV5.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
