FROM node:14

RUN mkdir /nodecg
WORKDIR /nodecg

RUN apt-get update -y
RUN apt-get install zip

RUN npm install -g nodecg-cli && \
    nodecg setup

RUN nodecg install cma2819/nodecg-speedcontrol && \
    nodecg install cma2819/nodecg-twitter-widget && \
    nodecg install cma2819/nodecg-spotify-widget && \
    nodecg install cma2819/speedcontrol-additions

WORKDIR /

RUN zip -r release.zip /nodecg