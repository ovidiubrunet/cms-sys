#!/bin/bash

function countContainers() {
	if [ `docker ps -q $1 | wc -l` -gt 0 ] 
	then	
		echo "Stoping and deleting containers"
		docker stop $(docker ps -a -q)
		docker rm $(docker ps -a -q)
	else
		echo "No containers, nothing to stop and delete"
	fi
}

function countCrashedContainers() {
	docker ps -a | grep -v -F 'Exited (0)' | grep -c -F 'Exited ('
}

function countImages() {
	if [ `docker image ls -q $1 | wc -l` -gt 0 ]
	then
		echo "Deleting images"
		docker rmi $(docker images -q) 
	else
		echo "No images, nothing to delete"
	fi
}


countContainers -a

countImages -a
