FROM node:8

WORKDIR /app
COPY . /app

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
