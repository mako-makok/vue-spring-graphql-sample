package com.example.calendar.domain.calendar;

import java.util.List;

public interface PlanRepository {

    Plan findById(Long id);

    List<Plan> findByCalendarId(Long calendarId);

}
