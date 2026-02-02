#!/bin/bash

## Description: Run ci checks
## Usage: ci
## Example: ddev ci

# Navigate to project directory
cd /var/www/html
npm run lint && npm run test && npm run generate && npm run lhci:mobile && npm run lhci:desktop
#npm run lint && npm run test && npm run generate
