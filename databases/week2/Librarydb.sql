-- Create a Library database.

CREATE DATABASE IF NOT EXISTS `Library`;
  
  CREATE TABLE    
 Library.author (
        `id` int  unsigned NOT NULL AUTO_INCREMENT,
        `full_name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `phone` varchar(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
    
  CREATE TABLE    
 Library.genres(
        `id` int  unsigned NOT NULL AUTO_INCREMENT,
        `genres` varchar(255) NOT NULL,
	   PRIMARY KEY (`id`)
            ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  CREATE TABLE
  Library.books(
        `id` int  unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) NOT NULL,
        `author_id`int  unsigned NOT NULL,
        `price` int  NOT NULL,
        `genres_id` int  unsigned NOT NULL,
         `published_date` DATETIME NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON UPDATE CASCADE,
	    CONSTRAINT `fk_genres` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`) ON UPDATE CASCADE

    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
    
    CREATE TABLE    
  Library.member(
        `id` int  unsigned NOT NULL AUTO_INCREMENT,
        `full_name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `phone` varchar(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
    
    
     CREATE TABLE
   Library.loan (
        `id` INT unsigned NOT NULL AUTO_INCREMENT,
        `loan_date` DATETIME NOT NULL,
        `due_date` DATETIME NOT NULL,
        `book_id` int  unsigned NOT NULL,
        `member_id`int  unsigned NOT NULL ,
        PRIMARY KEY (`id`),
		CONSTRAINT `fk_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON UPDATE CASCADE,
        CONSTRAINT `fk_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON UPDATE CASCADE

) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;