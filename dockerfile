
FROM node:6-alpine

LABEL name="react-app"

EXPOSE 3000


# Install dependencies
WORKDIR /reactApp

COPY . /reactApp

RUN npm Install && npm run start
