FROM node:10-alpine

LABEL maintainer="Kelvin Gobo <gobokel@gmail.com>"

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./usr/src/app/

#Install Yarn
RUN npm install -g yarn --force

# copy the app, note .dockerignore
COPY . /usr/src/app/ 

# install project dependencies
RUN yarn install

# expose 8080 on container
EXPOSE 8080
