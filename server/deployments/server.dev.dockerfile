FROM node:14.10.1-alpine3.10

WORKDIR /app
EXPOSE 8081

CMD [ "npm", "start" ]