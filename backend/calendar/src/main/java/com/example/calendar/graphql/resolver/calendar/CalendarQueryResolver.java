package com.example.calendar.graphql.resolver.calendar;

import com.example.calendar.application.calendar.GetCalendarService;
import com.example.calendar.domain.calendar.Calendar;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CalendarQueryResolver implements GraphQLQueryResolver {

    private final GetCalendarService getCalendarService;

    CalendarQueryResolver(GetCalendarService getCalendarService) {
        this.getCalendarService = getCalendarService;
    }

    public List<Calendar> calendars() {
        return getCalendarService.findAll();
    }

    public Calendar calendar(Long id) {
        return getCalendarService.findById(id);
    }
}
