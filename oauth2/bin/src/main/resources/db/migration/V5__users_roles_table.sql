CREATE TABLE IF NOT EXISTS `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  KEY `K_USERS_ROLES_ROLE` (`role_id`),
  KEY `K_USERS_ROLES_USER` (`user_id`),
  CONSTRAINT `FK_USERS_ROLES_USER` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_USERS_ROLES_ROLE` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;