#!/bin/bash

# Railway deployment script
echo "Starting Railway deployment..."

# Navigate to PORT directory
cd PORT

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in PORT directory"
    ls -la
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "Error: Build failed - dist directory not found"
    exit 1
fi

# Start the application
echo "Starting application..."
npm run preview
