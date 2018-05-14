# Image to build on a Node.js environment (with Node and NPM)
FROM node:8

# Create the app directory.
WORKDIR /app

# Copy package.json and package-lock.json.
# Doing this only updates the layer when these files have changed
COPY package*.json ./

# Install packages
RUN npm install

# Copy the app source into the app directory
COPY . .

# The port that the app listens to
EXPOSE 5000

# Start the app
CMD [ "node", "index.js" ]
