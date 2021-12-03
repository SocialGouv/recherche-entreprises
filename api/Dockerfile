FROM node:16-alpine as builder

WORKDIR /app
RUN chown node:node /app
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build
RUN yarn --frozen-lockfile --production
# ---

FROM node:16-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

WORKDIR /app/dist

USER node

ENTRYPOINT ["node", "./src/index.js"]