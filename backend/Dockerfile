#  Dockerfile for Node Express Backend

FROM node:current-alpine

# Create App Directory

WORKDIR /backend

# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code
COPY . .

# Exports
EXPOSE 3001

CMD ["npm","start"]