# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:16

# Create and change to thes app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json ./
COPY package*.json ./
COPY src/ ./src

# ENV variables set

# Install production dependencies.
# RUN npm ci --only=production
RUN npm install

# Copy local code to the container image.
# COPY . .

# Run the web service on container startup.
CMD [ "npm", "start" ]
