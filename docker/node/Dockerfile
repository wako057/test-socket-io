FROM node:10.14.2-stretch

RUN mkdir -p /var/nodejs/

COPY ./run.sh /usr/local/bin
COPY ./healthcheck.sh /usr/local/bin

WORKDIR /var/nodejs/
# HEALTHCHECK --interval=5s --timeout=20s --retries=1 CMD healthcheck.sh

CMD [ "run.sh" ]
