CREATE TABLE IF NOT EXISTS `privilege` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_h7iwbdg4ev8mgvmij76881tx8` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
