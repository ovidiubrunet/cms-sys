CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  date_created TIMESTAMP  DEFAULT NULL,
  date_updated TIMESTAMP  DEFAULT NULL,
  email varchar DEFAULT NULL,
  is_enabled int DEFAULT NULL,
  first_name varchar DEFAULT NULL,
  last_name varchar DEFAULT NULL,
  password varchar DEFAULT NULL,
  username varchar DEFAULT NULL,
  version int DEFAULT NULL
);
