CREATE TABLE variables (
  id SERIAL ,
  name varchar(255) NOT NULL,
  type variable_type NOT NULL,
  template_id BIGINT NOT NULL,
  default_value varchar(255),
  input_type varchar(255),
  label varchar(255),


  PRIMARY KEY (id),
  CONSTRAINT FK_VARIABLES_TEMPLATE FOREIGN KEY (template_id) REFERENCES templates (id)
);

CREATE SEQUENCE VARIABLES_SEQ START WITH 1 INCREMENT BY 1;