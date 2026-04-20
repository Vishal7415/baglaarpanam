#!/bin/bash

echo "Starting Baglarpanam Admin Services..."

# Navigate to server and start admin_api
cd server
node admin_api.js &
ADMIN_PID=$!

echo "Admin API is running on http://localhost:5001"
echo "You can now access the admin panel at http://localhost:3000/admin"

# Wait for process
wait $ADMIN_PID
