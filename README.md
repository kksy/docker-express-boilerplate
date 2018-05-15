# Docker Express Boilerplate [![Build Status](https://travis-ci.org/kksy/docker-express-boilerplate.svg?branch=master)](https://travis-ci.org/kksy/docker-express-boilerplate)

## Usage

- Installation and build
    ```
    $ make build
    ```

- Starting the app
    ```
    $ make start
    ```
    then go to http://localhost:5000

- Running tests
    ```
    $ make test
    ```
    This runs tests on a new container and deletes it afterwards

- Restart the container after making changes
    ```
    $ make restart
    ```
    This deletes the old container and runs container with local changes.

- If package dependencies change, run `make build` again


