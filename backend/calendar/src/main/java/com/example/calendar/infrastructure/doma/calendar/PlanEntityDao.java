package com.example.calendar.infrastructure.doma.calendar;

import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@ConfigAutowireable
@Dao
public interface PlanEntityDao {

    @Select
    PlanEntity findById(Long id);

    @Select
    List<PlanEntity> findByCalendarId(Long calendarId);

}
