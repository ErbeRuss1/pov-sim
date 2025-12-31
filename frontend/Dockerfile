# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Accept build arguments for environment variables
ARG REACT_APP_AIRLINES_API_URL
ARG REACT_APP_FLIGHTS_API_URL
ARG REACT_APP_FARO_COLLECTOR_URL
ARG REACT_APP_FARO_APP_NAME
ARG REACT_APP_ENV

# Set environment variables from build arguments
ENV REACT_APP_AIRLINES_API_URL=${REACT_APP_AIRLINES_API_URL}
ENV REACT_APP_FLIGHTS_API_URL=${REACT_APP_FLIGHTS_API_URL}
ENV REACT_APP_FARO_COLLECTOR_URL=${REACT_APP_FARO_COLLECTOR_URL}
ENV REACT_APP_FARO_APP_NAME=${REACT_APP_FARO_APP_NAME}
ENV REACT_APP_ENV=${REACT_APP_ENV}

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
