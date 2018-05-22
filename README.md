# Docker Express Boilerplate [![Build Status](https://travis-ci.org/kksy/docker-express-boilerplate.svg?branch=master)](https://travis-ci.org/kksy/docker-express-boilerplate)

To build and run the app, you will only need the `Docker CLI`.

## Project structure

```
 ┬
 ├ db
 ├ src
    ┬
    ├ models
    ├ controllers
    └ utils
 ├ test
    ┬
    ├ models
    ├ controllers
    └ utils
 ├ server.js
 └ ...(other files for project build)
```
- **db** - contains the scripts needed for setting up the database
- **src** - main project library
- **test** - all test files following the structure of src

## Running the app

#### Installation and build
```
$ docker-compose build
```
This creates an image for the app and MongoDB database

#### Starting the app
```
$ docker-compose up
```
- Then go to http://localhost:5000
- To restart, use `docker-compose down` to stop the containers and `docker-compose up` to start the containers. If packages have changed, make sure to run `docker-compose build` first.

#### Restart the app after making changes
- Use `docker-compose down` to stop the containers and `docker-compose up` to start the containers. If packages have changed, make sure to run `docker-compose build` first.
- If package dependencies change, run `make build` again. This rebuilds the app image only and not the database. If you need to rebuild both app and database, use `docker-compose build`.

## MongoDB
To setup the database, the schema and sample files live in the `db` folder. `setup-db.sh` gets ran when the database is first set up.

## Testing

#### Unit
```
$ make test
```
Runs tests with the file pattern test/**/*.test.js

#### Integration
```
$ make test-integration
```
- Runs tests with the file pattern test/**/*.integration.js
- In this project, the integration test runs a database check on `models/Sample.js`
- The `docker-compose.yml` file in the test folder is used in this case

## App Environment Configuration
Use environment-specific configuration by importing `config.js`. The default config is 'development'. All tests use the 'test' environment.

## Build pipeline
The project uses [Travis CI](https://travis-ci.org/). It has stages for unit tests and integration tests. Check `.travis.yml` for the config.

## In progress
- Preparing the app for deployment
- Database credentials
- Easier way to add fixtures for integration test?
- Pruning old volumes, and dangling images


