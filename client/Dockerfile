FROM node:15.8.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY ./src ./src
COPY ./public ./public

# Set the command when container start running
CMD [ "npm", "start" ]