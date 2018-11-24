FROM node:boron
WORKDIR /noData-chat-client
COPY . /noData-chat-client
RUN npm install
RUN npm install eslint -g
RUN npm update
RUN npm install
RUN nodejs node_modules/node-sass/scripts/install.js
RUN npm rebuild node-sass
VOLUME /noData-chat-client/node_modules
