package com.example.calendar.domain.calendar;

public class Calendar {

    public Long id;

    public String name;

    public Long accountId;

    public Calendar(Long id, String name, Long accountId) {
        this.id = id;
        this.name = name;
        this.accountId = accountId;
    }
}
