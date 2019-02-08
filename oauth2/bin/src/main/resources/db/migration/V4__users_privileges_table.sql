CREATE TABLE IF NOT EXISTS `users_privileges` (
  `user_id` bigint(20) NOT NULL,
  `privilege_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`privilege_id`),
  KEY `K_USERS_PRIVILEGES_PRIVILEGE` (`privilege_id`),
  CONSTRAINT `FK_USERS_PRIVILEGES_PRIVILEGE` FOREIGN KEY (`privilege_id`) REFERENCES `privilege` (`id`),
  CONSTRAINT `FK_USERS_PRIVILEGES_USER` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;