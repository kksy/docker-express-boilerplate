# Image to build on a Node.js environment (with Node and NPM)
FROM node:8

# Create the directory for node_modules.
# This ensures that when we use volumes, the host directory does not override /node_modules
WORKDIR /dependencies

# Copy package.json and package-lock.json.
# Doing this only updates the layer when these files have changed
COPY package*.json ./

# Install packages
RUN npm install --verbose

# Makes sure that node_modules can be accessed
ENV NODE_PATH /dependencies/node_modules/

# Set app working directory
WORKDIR /app

# Copy the app source into the app directory
COPY . .

# The port that the app listens to
EXPOSE 5000

# Start the app
CMD [ "node", "index.js" ]
