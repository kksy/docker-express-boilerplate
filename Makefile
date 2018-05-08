CONTAINER_NAME=testapp
IMAGE_NAME=docker-express
CONTAINER_PORT=5000
HOST_PORT=5000

build:
	docker image build -t $(IMAGE_NAME) .
.PHONY: build_image

start:
	docker container run --detach --publish $(HOST_PORT):$(CONTAINER_PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

delete_old_container:
	docker rm -f $(CONTAINER_NAME)

rebuild:
	 make delete_old_container && make build -rm

