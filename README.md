# Docker Express Boilerplate

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
    run tests on a new container and delete it afterwards

4. rebuilding the image
    ```
    $ make rebuild
    ```
    this deletes the old image, container and runs the test after building


