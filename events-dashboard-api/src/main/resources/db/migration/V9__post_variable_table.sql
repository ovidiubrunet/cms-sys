CREATE TABLE post_variable (
  variable_id BIGINT NOT NULL,
  post_id BIGINT NOT NULL,
  value text NOT NULL,
  PRIMARY KEY (variable_id,post_id),
  CONSTRAINT FK_POST_VARIABLE_VARIABLE FOREIGN KEY (variable_id) REFERENCES variables (id),
  CONSTRAINT FK_POST_VARIABLE_POST FOREIGN KEY (post_id) REFERENCES posts (id)
);