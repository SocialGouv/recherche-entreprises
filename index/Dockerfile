FROM node:16-alpine as builder

WORKDIR /app

COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
COPY ./tsconfig.json tsconfig.json
COPY ./src/ src/


RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:16-alpine

RUN apk update && apk add sqlite unzip wget

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --chown=node:node ./sqlite/ sqlite/
COPY package.json .
USER node

CMD ["yarn", "start"]



