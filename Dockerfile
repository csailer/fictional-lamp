FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]