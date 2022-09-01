-- Create a school database contating class and student tables.

CREATE DATABASE IF NOT EXISTS `School`;

CREATE TABLE
   class (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `begins_date` varchar(255) NOT NULL,
        `ends_date` varchar(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
select * from `class`;
    CREATE TABLE    
    student (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `phone` varchar(255) NULL,
        `class_id` int(10) unsigned NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
    
    select * from `student` ;
    insert into class (id, name, begins_date, ends_date)
    values (1,'database','2022-01-02','2022-12-20'); 
            
    insert into class (id, name, begins_date, ends_date)
    values (2,'javascript', '2022-01-02','2022-4-30');
    
    insert into  class (id, name, begins_date, ends_date)
    values (3,'css','2022-05-01','2022-07-30');
    
    insert into class (id, name, begins_date, ends_date)
    values (4,'HTML','2022-03-01','2022-05-30');
    
    insert into class (id, name, begins_date, ends_date)
    values (        5,'git','2022-02-01','2022-03-30');
    
    
    -- student 
    insert into student (id, name, email, phone,class_id)
    values ( 1,'Aarika Ellingworth','aellingworth0@harvard.edu','483-396-8795',5);

    insert into student (id, name, email, phone,class_id)
    values (2,'Pren Goldsworthy','pgoldsworthy1@spotify.com','635-572-8467', 4);

    insert into student  (id, name, email, phone, class_id)
    values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683',1 );
        
    insert into student  (id, name, email, phone,class_id)
    values (4,'Rodie Duncan','rduncan3@quantcast.com','646-743-6191', 2);

  insert into student  (id, name, email, phone,class_id)
  values ( 5, 'Aubry Polak','apolak4@indiatimes.com','302-678-7931', 3);

  insert into student  (id, name, email, phone,class_id)
  values ( 6, 'Maryrose Meadows', 'mmeadows5@comcast.net','251-524-6594',1);

  insert into student  (id, name, email, phone,class_id)
  values (7,'Pavel Brushneen','pbrushneen6@techcrunch.com', '316-170-3640',4);

  insert into student  (id, name, email, phone,class_id)
  values ( 8,'Hedy Gerault','hgerault7@nymag.com', '176-177-5579',3);

  insert into student  (id, name, email, phone,class_id)
  values ( 9, 'Donald Duck','donald@duck.com', NULL,2);

  insert into    student  (id, name, email, phone,class_id)
  values ( 10, 'Adam Smith','smith@bla.com', NULL,3);
    
   -- Create an index on the name column of the student table 
CREATE INDEX index_name
ON student (name);

-- Add a new column to the class table named status 

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
UPDATE class
 SET status = 'ongoing'
  WHERE id = 1;
  UPDATE class
 SET status = 'finished'
  WHERE id = 2;
  UPDATE class
 SET status = 'finished'
  WHERE id = 3;
  UPDATE class
 SET status = 'finished'
  WHERE id = 4;
select * from class;
