package com.example.calendar.application.calendar;

import com.example.calendar.domain.calendar.Plan;
import com.example.calendar.domain.calendar.PlanRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class GetPlanService {

    private final PlanRepository planRepository;

    GetPlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    public Plan findById(Long id) {
        return planRepository.findById(id);
    }

    public List<Plan> findByCalendarId(Long calendarId) {
        return planRepository.findByCalendarId(calendarId);
    }

}
