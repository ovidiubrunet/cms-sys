CREATE TABLE templates (
  id SERIAL primary key ,
  template_name varchar(255),
  template_content text  NOT NULL
);

CREATE SEQUENCE TEMPLATE_SEQ START WITH 1 INCREMENT BY 1;