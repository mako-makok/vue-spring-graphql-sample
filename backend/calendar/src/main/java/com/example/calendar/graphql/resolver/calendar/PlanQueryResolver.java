package com.example.calendar.graphql.resolver.calendar;

import com.example.calendar.application.calendar.GetPlanService;
import com.example.calendar.domain.calendar.Plan;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlanQueryResolver implements GraphQLQueryResolver {

    private final GetPlanService getPlanService;

    PlanQueryResolver(GetPlanService getPlanService) {
        this.getPlanService = getPlanService;
    }

    public Plan plan(Long id) {
        return getPlanService.findById(id);
    }

    public List<Plan> plans(Long calendarId) {
        return getPlanService.findByCalendarId(calendarId);
    }

}
