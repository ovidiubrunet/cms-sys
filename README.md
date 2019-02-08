# Events-dashboard infrastructure

### Access jenkis

In order to access jenkins you just need to enter the url http://178.22.68.114:8080/ and log in with the correct credentials. Here you will find the main page with all the jobs.

### Slack plugin
When the jobs buildAndDeploy or quickbuild fail, you will be notified on the events dashboard channel.

### Pipelines
In the project you will find a folder named jenkins-pipeline witch has several scripts for the jenkins jobs.

* jenkinsfile-buildAndDeploy is the script that will run all the jobs in order to clear containers, build the app, build containers and deploy the application. This job is meant to run other jobs:
  * clearcontainers
  * sonar
  * quickbuld
  * buildimages
  * deploy


* __jenkinsfile-clearcontainers__ will run a bash script that will stop the current containers and delete them and the images. This job is needed since docker will always create new images when running the build.

* __jenkinsfile-sonar__ is the job needed to build and deploy the sonar image. This container needs to be up in order to run the quickbuild

* __jenkinsfile-quickbuild__ is the job that will build both java apps (events-dashboard api and oauth2) but also will build both the front-end dashboards. In the front-end build process, the `mvn clean install will` run a npm script that will copy all the static resources in the nginx folder.

* __jenkinsfile-buildimages__ this job will bring up all the docker images. For the BE side it will run the spotify plugin that will automatically create docker images based on the artifact of the application. For the FE part it will build a container with nginx installed and copy all the static resources of the FE in `/var/www/html/` folder.

* __jenkinsfile-deploy__ will run another `mvn clean install`. This install will execute a docker-compose file that will deploy all the images. All the images are in the same network and static ip's are allocated for each one of them.

### Nginx static resource

#### Maven build

The FE part is served as a static resource inside the nginx. In each FE project we have a `pom.xml` file.
When running the `mvn clean install` command the build will do the following steps:
1. Install nodejs and npm
2. Install cpx (needed to copy the static files from dist to nginx folder)
3. npm install
4. npm run-script staticNginx. This script will build the project with `--prod` flag and then it will copy all of the dist content in the nginx folder

#### Building of the docker image

After all the files are copied in the nginx folder the pipeline will also run a `docker-build` in order to build the image with all the static content. There are some custom configfiles in the nginx folder, so when the docker-build is made, those files will be copied in the image.


#### Serving static context from nginx
In order to serve static context from nginx you will first need to set a route. If you check the `dockerfile-nginx` you will see that all the static context is copied in the `/var/www/html/`. When a request is made on  location `/` nginx will set the router and the index and it will serve the content. 


### Nginx reverse proxy

Nginx is also used as a reverse proxy to serve all the request for the BE server. When a request on the `/events-api` is made, nginx will set the headers needed to avoid the cors origin problem and it will send the request on the BE server.
