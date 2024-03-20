FROM node:16-alpine as builder

WORKDIR /app

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch

COPY ./tsconfig.json tsconfig.json
COPY ./src/ src/
COPY ./package.json package.json

RUN yarn build

RUN yarn workspaces focus --production && yarn cache clean

FROM node:16-alpine

RUN apk update && apk add sqlite unzip wget

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --chown=node:node ./sqlite/ sqlite/
COPY package.json .
USER 1000

CMD ["yarn", "start"]
