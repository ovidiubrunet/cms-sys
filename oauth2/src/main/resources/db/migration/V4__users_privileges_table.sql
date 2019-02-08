CREATE TABLE IF NOT EXISTS users_privileges (
  user_id INTEGER,
  privilege_id INTEGER ,
  PRIMARY KEY (user_id,privilege_id),
  CONSTRAINT FK_USERS_PRIVILEGES_PRIVILEGE FOREIGN KEY (privilege_id) REFERENCES privilege (id),
  CONSTRAINT FK_USERS_PRIVILEGES_USER FOREIGN KEY (user_id) REFERENCES users (id)
);