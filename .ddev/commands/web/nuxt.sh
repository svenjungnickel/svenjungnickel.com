#!/bin/bash

## Description: Check if node_modules exists, install or update if needed, and start Nuxt dev server
## Usage: nuxt
## Example: ddev nuxt

# Navigate to project directory
cd /var/www/html

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found, running npm install..."
  npm install --prefer-offline --no-audit
elif [ "package.json" -nt "node_modules" ]; then
  echo "package.json is newer than node_modules, running npm install..."
  npm install --prefer-offline --no-audit
else
  echo "node_modules is up to date"
fi

# Start the Nuxt dev server
echo "Starting Nuxt dev server..."
npm run dev
