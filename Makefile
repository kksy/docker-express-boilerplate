CONTAINER_NAME=testapp
IMAGE_NAME=docker-express
CONTAINER_PORT=5000
HOST_PORT=5000

build:
	docker image build -t $(IMAGE_NAME) .
.PHONY: build_image

start:
	docker container run --detach --publish $(HOST_PORT):$(CONTAINER_PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

rebuild:
	make build && docker rm -f $(CONTAINER_NAME)

