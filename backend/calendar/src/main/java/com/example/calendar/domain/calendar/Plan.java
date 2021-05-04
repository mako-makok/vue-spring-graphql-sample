package com.example.calendar.domain.calendar;

import java.time.LocalDateTime;

public class Plan {

    public Long id;

    public Long calendarId;

    public String title;

    public String description;

    public String place;

    public LocalDateTime startTime;

    public LocalDateTime endTime;

    public Plan(Long id, Long calendarId, String title, String description, String place,
                LocalDateTime startTime, LocalDateTime endTime) {
        this.id = id;
        this.calendarId = calendarId;
        this.title = title;
        this.description = description;
        this.place = place;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
