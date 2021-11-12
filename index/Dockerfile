FROM node:15-alpine as builder

WORKDIR /app

COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
COPY ./tsconfig.json tsconfig.json
COPY ./src/ src/

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:15-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY package.json .
USER node

CMD ["yarn", "start"]



