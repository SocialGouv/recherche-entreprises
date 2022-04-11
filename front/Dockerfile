

FROM node:14-alpine AS builder

ARG REACT_APP_API_URL

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN yarn build

FROM ghcr.io/socialgouv/docker/nginx:7.0.0

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
