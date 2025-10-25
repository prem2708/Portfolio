#!/bin/bash

# Alternative 1: Use npm install instead of npm ci
npm install --omit=dev

# Alternative 2: If package-lock.json exists, use npm ci
if [ -f "package-lock.json" ]; then
    npm ci --omit=dev
else
    npm install --omit=dev
fi

# Build the project
npm run build
