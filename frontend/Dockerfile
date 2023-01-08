# Dockerfile for React client
FROM node:current-alpine
# Build react client

# Working directory be app
WORKDIR /frontend

COPY package*.json ./

###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]