package com.example.calendar.infrastructure.doma.calendar;

import com.example.calendar.domain.calendar.Calendar;
import com.example.calendar.domain.calendar.CalendarRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class CalendarRepositoryImpl implements CalendarRepository {

    private final CalendarEntityDao calendarEntityDao;

    CalendarRepositoryImpl(CalendarEntityDao calendarEntityDao) {
        this.calendarEntityDao = calendarEntityDao;
    }

    @Override
    public List<Calendar> findAll() {
        return calendarEntityDao.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Calendar findById(Long id) {
        return toDomain(calendarEntityDao.findById(id));
    }

    private Calendar toDomain(CalendarEntity entity) {
        return new Calendar(entity.id, entity.name, entity.accountId);
    }

}
