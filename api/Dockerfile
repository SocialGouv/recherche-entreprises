FROM node:15-alpine as builder

WORKDIR /app
RUN chown node:node /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

# ---

FROM node:15-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY package.json .
COPY openapi.yaml .
USER node

ENTRYPOINT ["yarn", "start"]