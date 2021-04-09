FROM node:15-alpine as builder

WORKDIR /app

COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
COPY ./tsconfig.json tsconfig.json
COPY ./src/ src/

RUN yarn install --production

CMD ["yarn", "start"]



