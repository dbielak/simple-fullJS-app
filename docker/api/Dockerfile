FROM node:12-alpine

WORKDIR /app
COPY ./api/package.json /app/package.json
RUN npm install --production
COPY ./api/. /app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start
