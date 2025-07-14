ARG RUN_IMAGE=node:23-alpine3.20

FROM $RUN_IMAGE AS deps

WORKDIR /app

COPY package.json ./
RUN yarn install --silent --production=false

FROM $RUN_IMAGE AS builder

ARG VITE_WEBSOCKET_URL

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
RUN yarn global add vite
COPY . .

RUN yarn run build

EXPOSE 5173

CMD [ "yarn", "run", "preview", "--host" ]
