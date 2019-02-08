#!/bin/bash

cd ../oauth2/project-startup-spring-boot/
./mvnw install dockerfile:build
cd ../../admin-dashboard/
npm run-script staticNginx
cd ../configfiles/dockersfiles
docker network rm $(docker network ls | grep "bridge" | awk '/ / { print $1 }')
echo y | docker-compose rm 
docker-compose up --build
