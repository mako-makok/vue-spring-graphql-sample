package com.example.calendar.application.calendar;

import com.example.calendar.domain.calendar.Calendar;
import com.example.calendar.domain.calendar.CalendarRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class GetCalendarService {

    private final CalendarRepository calendarRepository;

    GetCalendarService(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    public List<Calendar> findAll() {
        return calendarRepository.findAll();
    }

    public Calendar findById(Long id) {
        return calendarRepository.findById(id);
    }

}
