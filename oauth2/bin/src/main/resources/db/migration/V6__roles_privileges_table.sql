CREATE TABLE IF NOT EXISTS `roles_privileges` (
  `role_id` bigint(20) NOT NULL,
  `privilege_id` bigint(20) NOT NULL,
  KEY `K_ROLES_PRIVILEGES_PRIVILEGE` (`privilege_id`),
  KEY `K_ROLES_PRIVILEGES_ROLE` (`role_id`),
  CONSTRAINT `FK_ROLES_PRIVILEGES_PRIVILEGE` FOREIGN KEY (`privilege_id`) REFERENCES `privilege` (`id`),
  CONSTRAINT `FK_ROLES_PRIVILEGES_ROLE` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;