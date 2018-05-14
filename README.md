# Docker Express Boilerplate [![Build Status](https://travis-ci.org/kksy/docker-express-boilerplate.svg?branch=master)](https://travis-ci.org/kksy/docker-express-boilerplate)

1. installation and build
    ```
    $ make build
    ```

2. starting the app
    ```
    $ make start
    ```
    then go to http://localhost:5000

3. running tests
    ```
    $ make test
    ```
    This runs tests on a new container and deletes it afterwards

4. restart the container after making changes
    ```
    $ make restart
    ```
    This deletes the old container and runs container with local changes.


