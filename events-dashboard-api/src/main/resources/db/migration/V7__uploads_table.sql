CREATE TABLE uploads (
id SERIAL primary key ,
file_name varchar(255) NOT NULL,
file_uri varchar(255),
file_type text NOT NULL,
file_size text NOT NULL,
file_content oid ,
date_uploaded timestamp  DEFAULT now(),
version BIGINT
);

CREATE SEQUENCE UPLOAD_SEQ START WITH 1 INCREMENT BY 1;