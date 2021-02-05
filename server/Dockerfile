FROM node:15.8.0

# Create app directory
# RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY ./src ./src
COPY ./images ./images
COPY ./flower_models ./flower_models

# Set the command when container start running
CMD [ "npm", "run", "dev" ]