FROM node:alpine as builder

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY tsconfig.json tsconfig.json
COPY webpack.config.js webpack.config.js
COPY src src

RUN npm run build

FROM nginx

COPY --from=builder dist /usr/share/nginx/html

EXPOSE 80
