FROM node:12

RUN mkdir /app
WORKDIR /app

COPY app/package*.json /app/
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app/ /app/
CMD npm start