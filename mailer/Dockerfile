FROM node:10

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

EXPOSE 80

CMD ["npm","start"]