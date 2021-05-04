package com.example.calendar.domain.calendar;

import java.util.List;

public interface CalendarRepository {

    List<Calendar> findAll();

    Calendar findById(Long id);
}
