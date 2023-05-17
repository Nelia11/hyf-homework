SELECT  user.name, 
		user.email, 
		task.title 
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com%';

SELECT 	user.name, 
		task.title, 
		status.name 
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
INNER JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck'
	AND status.name LIKE '%Not started%';

SELECT 	user.name, 
		task.title, 
        task.created 
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows'
	AND MONTH(created) = 09;

SELECT  MONTHNAME(created) AS month, 
		COUNT(*) AS tasks
FROM task
GROUP BY MONTH(created), 
		 MONTHNAME(created)
ORDER BY MONTH(created);