package com.example.calendar.domain.account;

public class Account {

    public Long id;
    public String firstName;
    public String lastName;

    public Account(Long id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
