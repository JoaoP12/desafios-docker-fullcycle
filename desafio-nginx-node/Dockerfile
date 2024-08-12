FROM node:18.17-alpine

EXPOSE 3000

WORKDIR /usr/src

COPY package.json package-lock.json ./

RUN npm install

WORKDIR /usr/src/app

COPY . .

CMD ["node", "index.js"]