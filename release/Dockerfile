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

COPY ../../ bundles/ome-next-layouts
WORKDIR /nodecg/bundles/ome-next-layouts
RUN npm install --production

WORKDIR /

RUN cp /usr/local/bin/node /nodecg/node
RUN echo "node index.js" > /nodecg/start.sh
RUN echo "node index.js" > /nodecg/start.bat
RUN zip -r release.zip /nodecg