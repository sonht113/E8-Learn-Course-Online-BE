# Use the official Node.js 14 image as the base image
FROM node:20.3.1

# Set the working directory inside the container
WORKDIR /E8-LEARN-COURSE-ONLINE-BE

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the rest of the project files to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
