SELECT * FROM `task`;
	SELECT * FROM `user`;
    SELECT * FROM `status`;
    -- Part 1
    -- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
	
    INSERT INTO task (id,title, description, created, updated, due_date, status_id, user_id)
 values (36,'read database lesson2 materials','Documents are in HYF curriculum database week2 folder',
         '2020-08-21 16:00:30','2020-10-06 04:03:15','2020-12-07 12:50:11', 1, 1);
         
-- Change the title of a task
	
	UPDATE task
 SET title = 'work on database week2 homework'
  WHERE id = 36;
   
-- Change a task due date

	UPDATE task
 SET due_date = '2020-12-15 01:00:00'
  WHERE id = 36;
  
  -- Change a task status
  UPDATE task
 SET status_id = 2
  WHERE id = 36;
  
  -- Mark a task as complete
  UPDATE task
 SET status_id = 3
  WHERE id = 36;
  
  -- Delete a task
  DELETE FROM task WHERE id=36;
  
  -- Part 3: More queries
  -- email ends in @spotify.com
  
  SELECT * FROM `user`
 WHERE `email` LIKE '%@spotify.com';
  
  -- 'Donald Duck' with status 'Not started'
SELECT * FROM `task`
INNER JOIN `user` ON  user.id = task.user_id
INNER JOIN `status` ON  status.id = task.status_id
WHERE user.name='Donald Duck' AND status.name='Not started'  ;

-- tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * FROM `task`
INNER JOIN `user` ON  user.id = task.user_id
WHERE user.name='Maryrose Meadows' AND MONTH(created) = 09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october
SELECT COUNT(task.title) AS num_of_tasks,date_format(created,'%M') AS month FROM `task`
      group by month;