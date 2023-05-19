DROP DATABASE IF EXISTS `GYM_DB`;

CREATE DATABASE IF NOT EXISTS `GYM_DB`;

USE `GYM_DB`;

CREATE TABLE `status` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `gym` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `training` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `client` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `abonement_status` int(2) unsigned NOT NULL,
  `gym_index` int(5) unsigned NOT NULL,
  CONSTRAINT `fk_abonement_status` FOREIGN KEY (`abonement_status`) REFERENCES `status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_gym_index` FOREIGN KEY (`gym_index`) REFERENCES `gym` (`id`) ON DELETE CASCADE,
  INDEX `idx_abonement_status` (`abonement_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `trainer` (
  `id` int(5) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL, 
  `gym_id` int(5) unsigned NOT NULL,
  `training_index` int(5) unsigned NOT NULL,
  CONSTRAINT `fk_gym_id` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_training_index` FOREIGN KEY (`training_index`) REFERENCES `training` (`id`) ON DELETE CASCADE,
  INDEX `idx_gym_id` (`gym_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `client_info` (
  `client_id` int(10) unsigned NOT NULL PRIMARY KEY,
  `trainer_id` int(5) unsigned NULL DEFAULT NULL,
  `training_id` int(5) unsigned NOT NULL,
  CONSTRAINT `fk_client_id` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_trainer_id` FOREIGN KEY (`trainer_id`) REFERENCES `trainer` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_training_id` FOREIGN KEY (`training_id`) REFERENCES `training` (`id`) ON DELETE CASCADE,
  INDEX `idx_training_id` (`training_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;