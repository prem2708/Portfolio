# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY PORT/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY PORT/ .

# Build the application
RUN npm run build

# Expose port (if needed for serving)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "preview"]
