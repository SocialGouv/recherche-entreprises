
FROM node:14-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

# will be replaced by env variable at runtime
ENV REACT_APP_API_URL="%%REACT_APP_API_URL%%"

RUN yarn build

FROM ghcr.io/socialgouv/docker/nginx4spa:6.65.0

## switch to non-root user
USER 101

ENV PORT=3000

COPY --from=builder /app/build /usr/share/nginx/html