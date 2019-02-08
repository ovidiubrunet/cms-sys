CREATE TABLE IF NOT EXISTS roles_privileges (
  role_id INTEGER,
  privilege_id INTEGER,
  PRIMARY KEY (privilege_id, role_id),
  CONSTRAINT FK_ROLES_PRIVILEGES_PRIVILEGE FOREIGN KEY (privilege_id) REFERENCES privilege (id),
  CONSTRAINT FK_ROLES_PRIVILEGES_ROLE FOREIGN KEY (role_id) REFERENCES role (id)
);