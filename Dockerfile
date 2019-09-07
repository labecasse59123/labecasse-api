FROM node:8

RUN mkdir -p /app
WORKDIR /app

COPY ./.dist /app
RUN npm i -g yarn
RUN yarn install --production

EXPOSE 9000

USER node

CMD ["node", "/app/index.js"]
