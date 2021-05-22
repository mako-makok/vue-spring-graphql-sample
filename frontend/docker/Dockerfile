FROM node:16.2.0-alpine

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g vue-cli

COPY . /app
WORKDIR /app

ENTRYPOINT ["npm", "run", "serve"]
