CONTAINER_NAME=testapp
IMAGE_NAME=docker-express
CONTAINER_PORT=5000
HOST_PORT=5000

build:
	docker image build -t $(IMAGE_NAME) .

start:
	docker container run \
		--detach \
		--publish $(HOST_PORT):$(CONTAINER_PORT) \
		--name $(CONTAINER_NAME) $(IMAGE_NAME)

test:
	docker run -it --rm $(IMAGE_NAME) npm t

.PHONY: test

delete_old_container:
	docker rm -f $(CONTAINER_NAME)

delete_old_image:
	docker rmi -f $(IMAGE_NAME)

rebuild:
	make delete_old_container && make delete_old_image && make build && make test


