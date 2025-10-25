#!/bin/bash

# Railway deployment script
echo "Starting Railway deployment..."

# Navigate to PORT directory
cd PORT

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Start the application
echo "Starting application..."
npm run preview
