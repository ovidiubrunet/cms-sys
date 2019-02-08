INSERT INTO oauth_client_details (client_id, client_secret, scope, authorized_grant_types, authorities, access_token_validity, refresh_token_validity)
VALUES ('projectstartup', '{bcrypt}$2a$11$ursudt/lYytZeZygu46ydurnWSw4FSZFBPfcKvesdXGIBG90QRkHC', 'read, write, trust','password, authorization_code, refresh_token, implicit', 'ROLE_CLIENT, ROLE_TRUSTED_CLIENT', 3600, 3600);

INSERT INTO users (username, password, email, first_name, last_name, is_enabled, version)
VALUES ('admin', '{bcrypt}$2a$11$ursudt/lYytZeZygu46ydurnWSw4FSZFBPfcKvesdXGIBG90QRkHC', 'dragoiovidiu2011@gmail.com', 'ovidiu', 'dragoi',1,1);

INSERT INTO users (username, password, email, first_name, last_name, is_enabled, version)
VALUES ('user', '{bcrypt}$2a$11$ursudt/lYytZeZygu46ydurnWSw4FSZFBPfcKvesdXGIBG90QRkHC', 'dragoiovidiu2011@yahoo.com', 'johh', 'doe',1,1);

INSERT INTO users (username, password, email, first_name, last_name, is_enabled, version)
VALUES ('client', '{bcrypt}$2a$11$ursudt/lYytZeZygu46ydurnWSw4FSZFBPfcKvesdXGIBG90QRkHC', 'ovidiu.dragoi@icloud.com', 'mary', 'joe',1,1);

INSERT INTO role (id,name) VALUES (1,'ADMIN');
INSERT INTO role (id,name) VALUES (2,'USER');
INSERT INTO role (id,name) VALUES (3,'CLIENT');

INSERT INTO privilege (id,name) VALUES (1,'READ');
INSERT INTO privilege (id,name) VALUES (2,'EDIT');
INSERT INTO privilege (id,name) VALUES (3,'CREATE');
INSERT INTO privilege (id,name) VALUES (4,'DELETE');

INSERT INTO users_roles (user_id, role_id) VALUES (1,1);
INSERT INTO users_roles (user_id, role_id) VALUES (2,2);
INSERT INTO users_roles (user_id, role_id) VALUES (3,3);

-- ADMIN PRIVILEGES
INSERT INTO users_privileges (user_id, privilege_id) VALUES (1,1);
INSERT INTO users_privileges (user_id, privilege_id) VALUES (1,2);
INSERT INTO users_privileges (user_id, privilege_id) VALUES (1,3);
INSERT INTO users_privileges (user_id, privilege_id) VALUES (1,4);

-- USER PRIVILEGES
INSERT INTO users_privileges (user_id, privilege_id) VALUES (2,1);
INSERT INTO users_privileges (user_id, privilege_id) VALUES (2,2);
INSERT INTO users_privileges (user_id, privilege_id) VALUES (2,3);

-- CLIENT PRIVILEGES
INSERT INTO users_privileges (user_id, privilege_id) VALUES (3,1);



-- ADMIN ROLE PRIVILEGES
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(1,1);
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(1,2);
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(1,3);
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(1,4);

-- USER ROLE PRIVILIGES
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(2,1);
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(2,2);
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(2,3);

-- CLIENT ROLE PRIVILEGES
INSERT INTO roles_privileges (role_id, privilege_id) VALUES(3,1);











