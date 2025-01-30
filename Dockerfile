# Use Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the entire project
COPY . .

# Install frontend dependencies separately
RUN npm install --prefix frontend

# Build the frontend
RUN npm run build --prefix frontend

# Expose the port your server runs on
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start"]
