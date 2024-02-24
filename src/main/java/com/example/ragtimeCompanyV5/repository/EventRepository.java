package com.example.ragtimeCompanyV5.repository;

import com.example.ragtimeCompanyV5.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
