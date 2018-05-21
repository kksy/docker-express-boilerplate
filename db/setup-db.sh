#!/bin/bash
set -e

echo "Delete old data from test database"

mongo ./docker-entrypoint-initdb.d/scripts/clearDatabaseContents.js

echo "Setting up database schema for test database"

mongo ./docker-entrypoint-initdb.d/scripts/createSchema.js

echo "Importing sample data to test database"

mongo ./docker-entrypoint-initdb.d/scripts/importSampleData.js
