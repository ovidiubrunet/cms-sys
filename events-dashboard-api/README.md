- https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html
- https://dzone.com/articles/spring-5-webflux-and-jdbc-to-block-or-not-to-block
- https://github.com/rxonda/webflux-with-jpa/
- https://huongdanjava.com/concurrency-in-project-reactor-with-scheduler.html

docker-maven-plugin

By default the plugin will try to connect to docker on localhost:2375. Set the DOCKER_HOST environment variable to connect elsewhere.

DOCKER_HOST=tcp://<host>:2375
clean package dockerfile:build

Docker useful commands:

  - docker build -t myapp --no-cache .
  - docker run -d  -p 9001:9001 --name events-dashboard-api events-dashboard-api
  - localhost:8080/mydockerapp/
  -  docker logs <container>   
  -  docker exec -t -i <container_name> /bin/bash
  
List all containers (only IDs)
 - docker ps -aq
 
Stop all running containers
- docker stop $(docker ps -aq)

Remove all containers
- docker rm $(docker ps -aq)

Remove all images
- docker rmi -f $(docker images -q)

show networks:
- docker network create --driver=bridge startup-db-network
- docker network ls

check from inside container :
- nmap -p 3306 startup-database-host