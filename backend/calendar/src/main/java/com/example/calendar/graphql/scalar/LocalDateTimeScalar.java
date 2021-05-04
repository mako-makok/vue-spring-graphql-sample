package com.example.calendar.graphql.scalar;

import graphql.language.StringValue;
import graphql.schema.*;

import java.time.LocalDateTime;

public class LocalDateTimeScalar {

    public static GraphQLScalarType type = GraphQLScalarType.newScalar()
            .name("LocalDateTime")
            .coercing(new LocalDateTImeCoercing())
            .build();

    private static class LocalDateTImeCoercing implements Coercing<LocalDateTime, String> {

        @Override
        public String serialize(Object dataFetcherResult) throws CoercingSerializeException {
            if (dataFetcherResult instanceof LocalDateTime) {
                return dataFetcherResult.toString();
            }

            throw new CoercingSerializeException(dataFetcherResult + " id not LocalDateTime.");
        }

        @Override
        public LocalDateTime parseValue(Object input) throws CoercingParseValueException {
            try {
                return LocalDateTime.parse(input.toString());
            } catch (Exception e) {
                throw new CoercingParseValueException(e);
            }
        }

        @Override
        public LocalDateTime parseLiteral(Object input) throws CoercingParseLiteralException {
            try {
                return LocalDateTime.parse(((StringValue)input).getValue());
            } catch (Exception e) {
                throw new CoercingParseValueException(e);
            }
        }
    }


}
