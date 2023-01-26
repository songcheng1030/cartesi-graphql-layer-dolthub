FROM node:16-alpine

ENV HOME=/home/app

COPY . $HOME/node_docker

WORKDIR $HOME/node_docker

RUN yarn install --silent --progress=false

ENTRYPOINT yarn start
