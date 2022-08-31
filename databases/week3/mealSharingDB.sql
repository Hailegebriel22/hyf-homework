CREATE DATABASE IF NOT EXISTS `Meal_sharing`;

CREATE TABLE
    `meal` (
        `id` int unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL,
        `description` text (255) DEFAULT NULL,
        `location` varchar(255) NOT NULL,
        `when` DATETIME NOT NULL,
        `max_reservations` int unsigned NOT NULL,
        `price` DECIMAL(10, 2) NOT NULL,
        `created` DATETIME NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    `Reservation` (
        `id` int unsigned NOT NULL AUTO_INCREMENT,
        `number_of_guests` int NOT NULL,
        `meal_id` int unsigned NOT NULL,
        `created_date` DATETIME NOT NULL,
        `contact_phonenumber` varchar(255) NULL,
        `contact_name` varchar(255) NOT NULL,
        `contact_email` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE
    `Review` (
        `id` int unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL,
        `description` text NULL DEFAULT NULL,
        `meal_id` int unsigned NOT NULL,
        `stars` int NOT NULL,
        `created_date` DATETIME NULL DEFAULT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;