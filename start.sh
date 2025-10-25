#!/bin/bash

# Railway start script
echo "Starting Railway deployment..."

# Navigate to PORT directory
cd PORT

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in PORT directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the application
echo "Building application..."
npm run build

# Start the application
echo "Starting application..."
npm run preview
