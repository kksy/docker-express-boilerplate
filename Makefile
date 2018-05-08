CONTAINER_NAME=testapp
IMAGE_NAME=docker-express

build:
	docker image build -t $(IMAGE_NAME) .
.PHONY: build_image

start:
	docker container run --detach --publish 5000:5000 --name $(CONTAINER_NAME) docker-express

rebuild:
	make build && docker rm -f $(CONTAINER_NAME)

