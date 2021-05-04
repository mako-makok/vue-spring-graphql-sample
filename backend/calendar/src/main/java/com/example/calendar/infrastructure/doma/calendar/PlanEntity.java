package com.example.calendar.infrastructure.doma.calendar;

import org.seasar.doma.*;
import org.seasar.doma.jdbc.entity.NamingType;

import java.time.LocalDateTime;

@Entity(naming = NamingType.SNAKE_LOWER_CASE)
@Table(name = "plan")
public class PlanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(sequence = "plan_id_seq")
    public Long id;

    public Long calendarId;

    public String title;

    public String description;

    public String place;

    public LocalDateTime startTime;

    public LocalDateTime endTime;

}
