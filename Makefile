CONTAINER_NAME=test-app
IMAGE_NAME=docker-express
CONTAINER_PORT=5000
HOST_PORT=5000

build:
	docker image build -t $(IMAGE_NAME) .

start:
	docker run \
		--detach \
		--publish $(HOST_PORT):$(CONTAINER_PORT) \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME)

start-dev:
	docker run \
		--detach \
		--publish $(HOST_PORT):$(CONTAINER_PORT) \
		--name $(CONTAINER_NAME) \
		-v $(PWD):/app:ro \
		$(IMAGE_NAME)

test:
	docker run -it --rm -v $(PWD):/app:ro $(IMAGE_NAME) npm run docker:test

test-integration:
	cd test && docker-compose down && docker-compose build && docker-compose up -d && cd .. && sleep 5 && docker exec -it test-app npm run docker:test-integration

.PHONY: test

delete-old-container:
	docker rm -f $(CONTAINER_NAME)

delete-old-image:
	docker rmi -f $(IMAGE_NAME)

restart:
	make delete-old-container && make start-dev


