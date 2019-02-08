CREATE TABLE posts (
id SERIAL primary key ,
name varchar(255) NOT NULL,
url varchar(255),
post_template_id BIGINT NOT NULL,
date_posted date ,
version BIGINT,
CONSTRAINT FK_POST_TEMPLATE FOREIGN KEY (post_template_id) REFERENCES templates (id)
);

CREATE SEQUENCE POST_SEQ START WITH 1 INCREMENT BY 1;