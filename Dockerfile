# Use Node.js as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set a default port (you can override this at runtime)
ENV PORT=5000

# Command to run your Node.js application, allowing PORT to be overridden
CMD ["node","index.js"]
