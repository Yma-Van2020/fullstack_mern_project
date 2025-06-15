# syntax=docker/dockerfile:1

########################################
# Stage 0 — Base: shared setup/tools
########################################
FROM node:22.14.0-alpine AS base

WORKDIR /usr/src/app
ENV NODE_ENV=development

# Install dependencies common to all builds (e.g., bash)
RUN apk add --no-cache bash

########################################
# Stage 1 — Build Client
########################################
FROM base AS build-client

WORKDIR /usr/src/app/client

# Copy and install client dependencies
COPY client/package.json client/yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy client source and build
COPY client ./
RUN yarn build

########################################
# Stage 2 — Build Server
########################################
FROM base AS build-server

WORKDIR /usr/src/app/server

# Copy and install server dependencies
COPY server/package.json server/yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy server source code
COPY server ./

# Optional: compile TypeScript or other build step
# RUN yarn build

########################################
# Stage 3 — Final Production Image
########################################
FROM node:22.14.0-alpine AS prod

WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy built client into final image
COPY --from=build-client /usr/src/app/client/build ./client/build

# Copy server code into final image
COPY --from=build-server /usr/src/app/server ./server

# Install only production dependencies for server
WORKDIR /usr/src/app/server
RUN yarn install --production --frozen-lockfile

# Use a non-root user for security
USER node

EXPOSE 5000

# Start server (adjust if your main file is elsewhere)
CMD ["node", "index.js"]
