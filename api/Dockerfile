FROM node:16-alpine as builder

WORKDIR /app
RUN chown node:node /app
COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable
COPY . .
RUN yarn build
RUN yarn workspaces focus --production && yarn cache clean
# ---

FROM node:16-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

WORKDIR /app/dist

USER 1000

ENTRYPOINT ["node", "./src/index.js"]