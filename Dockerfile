FROM node:8.2.1-slim

# Install postgresql-client
RUN apt-get update && apt-get install -f -y postgresql-client

# Install app dependencies
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --quiet

RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app

# Bundle app source
WORKDIR /usr/app
COPY ./ /usr/app/

# Binds to port 8080
EXPOSE  8080

CMD ["npm", "run", "start:prd"]