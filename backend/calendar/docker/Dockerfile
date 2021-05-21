FROM openjdk:11

COPY . /app
WORKDIR /app

ENTRYPOINT ["sh", "gradlew", "bootRun", "--args='--spring.profiles.active=docker'"]
