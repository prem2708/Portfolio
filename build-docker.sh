#!/bin/bash

# Docker build script for Portfolio project
echo "Building Docker image for Portfolio project..."

# Build the Docker image
docker build -t portfolio-app .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo "To run the container:"
    echo "docker run -p 3000:3000 portfolio-app"
else
    echo "❌ Docker build failed!"
    echo "Trying with simple Dockerfile..."
    docker build -f Dockerfile.simple -t portfolio-app .
fi
