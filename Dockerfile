FROM node:latest

WORKDIR /app

COPY . .

EXPOSE 2020

CMD node index.js