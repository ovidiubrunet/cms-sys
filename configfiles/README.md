1. The scripts for db execution after the database container is up, are located in ./dockerfiles/init
    - https://github.com/mrts/docker-postgresql-multiple-databases
    - If you would like to do additional initialization in an image derived from this one, add one or more *.sql, *.sql.gz, or *.sh scripts under /docker-entrypoint-initdb.d       (creating the directory if necessary). After the entrypoint calls initdb to create the default postgres user and database, it will run any *.sql files, run any executable     *.sh scripts, and source any non-executable *.sh scripts found in that directory to do further initialization before starting the service.
    - For example, to add an additional user and database, add the following to /docker-entrypoint-initdb.d/init-user-db.sh:
    - Using multiple databases with the official PostgreSQL Docker image (POSTGRES_MULTIPLE_DATABASES=db1,db2)

2. Docker secrets offer a secure way to store sensitive information such as username, passwords, and even files like self-signed certificates.
    - the secrets are located under./dockerfiles/secrets
    - https://docs.docker.com/engine/swarm/secrets/#build-support-for-docker-secrets-into-your-images
    - Steps: 
        1. docker swarm init
        3. docker secret create db_password ./secrets/db_password.txt (generates a hash e.g.[v5993cpcom60snt1bbr4p7ld3])
        4. docker swarm leave
    - Commands: 
        - docker inspect db_password