FROM mongo:6

COPY ./init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

EXPOSE 27017