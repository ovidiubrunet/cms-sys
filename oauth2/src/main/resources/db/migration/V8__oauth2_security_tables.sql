CREATE TABLE IF NOT EXISTS oauth_access_token (
  token_id varchar(255) DEFAULT NULL,
  token BYTEA,
  authentication_id varchar(255) NOT NULL PRIMARY KEY,
  user_name varchar(255) DEFAULT NULL,
  client_id varchar(255) DEFAULT NULL,
  authentication BYTEA,
  refresh_token varchar(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS oauth_approvals (
  userId varchar(255) DEFAULT NULL,
  clientId varchar(255) DEFAULT NULL,
  scope varchar(255) DEFAULT NULL,
  status varchar(10) DEFAULT NULL,
  expiresAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  lastModifiedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS oauth_client_details (
  client_id varchar(255) PRIMARY KEY,
  resource_ids varchar(255) DEFAULT NULL,
  client_secret varchar(255) DEFAULT NULL,
  scope varchar(255) DEFAULT NULL,
  authorized_grant_types varchar(255) DEFAULT NULL,
  web_server_redirect_uri varchar(255) DEFAULT NULL,
  authorities varchar(255) DEFAULT NULL,
  access_token_validity int DEFAULT NULL,
  refresh_token_validity int DEFAULT NULL,
  additional_information varchar(4096) DEFAULT NULL,
  autoapprove varchar(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS oauth_client_token (
  token_id varchar(255) DEFAULT NULL,
  token BYTEA,
  authentication_id varchar(255) NOT NULL PRIMARY KEY,
  user_name varchar(255) DEFAULT NULL,
  client_id varchar(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS oauth_code (
  code varchar(255) DEFAULT NULL,
  authentication BYTEA
);

CREATE TABLE IF NOT EXISTS oauth_refresh_token (
  token_id varchar(255) DEFAULT NULL,
  token BYTEA,
  authentication BYTEA
);