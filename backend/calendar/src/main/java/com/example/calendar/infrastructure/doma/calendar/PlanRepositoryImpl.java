package com.example.calendar.infrastructure.doma.calendar;

import com.example.calendar.domain.calendar.Plan;
import com.example.calendar.domain.calendar.PlanRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class PlanRepositoryImpl implements PlanRepository {

    private final PlanEntityDao planEntityDao;

    PlanRepositoryImpl(PlanEntityDao planEntityDao) {
        this.planEntityDao = planEntityDao;
    }

    @Override
    public Plan findById(Long id) {
        return toDomain(planEntityDao.findById(id));
    }

    @Override
    public List<Plan> findByCalendarId(Long calendarId) {
        return planEntityDao.findByCalendarId(calendarId).stream().map(this::toDomain).collect(Collectors.toList());
    }

    private Plan toDomain(PlanEntity entity) {
        return new Plan(entity.id, entity.calendarId, entity.title, entity.description, entity.place,
                entity.startTime, entity.endTime);
    }

}
