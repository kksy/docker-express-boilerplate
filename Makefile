APP_CONTAINER_NAME=test-app
APP_IMAGE_NAME=docker-express
APP_CONTAINER_PORT=5000
APP_HOST_PORT=5000

build:
	docker image build -t $(APP_IMAGE_NAME) .

start:
	docker-compose up

start-dev:
	docker run \
		--detach \
		--publish $(APP_HOST_PORT):$(APP_CONTAINER_PORT) \
		--name $(APP_CONTAINER_NAME) \
		-v $(PWD):/app:ro \
		$(APP_IMAGE_NAME)

test:
	docker run -it --rm -v $(PWD):/app:ro $(APP_IMAGE_NAME) npm run docker:test

test-integration:
	cd test && \
	docker-compose down && docker-compose build && docker-compose up -d && \
	cd .. && sleep 5 && docker exec -it $(APP_CONTAINER_NAME) npm run docker:test-integration

.PHONY: test

delete-old-container:
	docker rm -f $(APP_CONTAINER_NAME)

delete-old-image:
	docker rmi -f $(APP_IMAGE_NAME)

restart:
	make delete-old-container && make start-dev


