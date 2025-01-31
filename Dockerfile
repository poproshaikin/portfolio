# Base image
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]