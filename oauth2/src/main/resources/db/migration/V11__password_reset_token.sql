CREATE TABLE IF NOT EXISTS password_reset_token (
  id INTEGER PRIMARY KEY,
  expiryDate timestamp DEFAULT NULL,
  token varchar(255) DEFAULT NULL,
  user_id int NOT NULL
);