
FROM node:6-alpine

RUN mkdir app

WORKDIR /app/

COPY ./package.json /app/

Run npm install

COPY ./webpack.config.js ./.babelrc ./index.html /app/

COPY ./src /app/src

RUN npm run build

EXPOSE 8080

