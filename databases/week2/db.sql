DROP DATABASE IF EXISTS  `SCHOOL_DATABASE`;

CREATE DATABASE IF NOT EXISTS `SCHOOL_DATABASE`;

USE `SCHOOL_DATABASE`;

CREATE TABLE `classes` (
	`id` int(5) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- add a new column to the class table
ALTER TABLE `classes` 
ADD COLUMN `status` 
ENUM ('not-started', 'ongoing', 'finished')
NOT NULL DEFAULT 'not-started';

CREATE TABLE `students` (
	`id` int(5) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL,
    `phone` varchar(20) NOT NULL,
    `class_id` int(5) unsigned NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) 	REFERENCES `classes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create an index on the name column of the student table
CREATE INDEX `idx_name` 
ON `students` (`name`);

-- classes
INSERT INTO classes (id, name, start_date, end_date) VALUES (1, 'Class1', '2023-09-01', '2024-05-31');
INSERT INTO classes (id, name, start_date, end_date) VALUES (2, 'Class2', '2023-10-01', '2024-06-30');


-- students
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Antonio Moreno', 'antonio.moreno@gmail.com', '12205021', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (2, 'Maria Anders', 'maria.anders@icloud.com', '72205021', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (3, 'Ana Trujillo', 'ana.trujillo@gmail.com', '12547721', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (4, 'Hanna Moos', 'hanna.moos@icloud.com', '17268723', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (5, 'Elizabeth Lincoln', 'elizabeth.lincoln@gmail.com', '78605021', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (6, 'Victoria Ashworth', 'victoria.ashworth@gmail.com', '15505025', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (7, 'Yang Wang', 'yang.wang@yahoo.com', '15484877', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (8, 'Pedro Afonso', 'pedro.afonso@icloud.com', '84854454', 1);