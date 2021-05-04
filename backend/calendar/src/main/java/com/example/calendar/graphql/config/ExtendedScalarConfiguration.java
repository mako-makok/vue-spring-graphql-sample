package com.example.calendar.graphql.config;

import com.example.calendar.graphql.scalar.LocalDateTimeScalar;
import graphql.schema.GraphQLScalarType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExtendedScalarConfiguration {

    @Bean
    public GraphQLScalarType localDateTime() {
        return LocalDateTimeScalar.type;
    }
}
