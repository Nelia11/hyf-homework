USE `lesson2-data`;
-- Get all the tasks assigned to users whose email ends IN @spotify.com
SELECT  user.name
       ,user.email
       ,task.title
FROM user_task
INNER JOIN task
ON task.id = user_task.task_id
INNER JOIN user
ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com%';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT  user.name
       ,task.title
       ,status.name
FROM user_task
INNER JOIN task
ON task.id = user_task.task_id
INNER JOIN user
ON user.id = user_task.user_id
INNER JOIN status
ON status.id = task.status_id
WHERE user.name = 'Donald Duck'
AND status.name LIKE '%Not started%';
-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT  user.name
       ,task.title
       ,task.created
FROM user_task
INNER JOIN task
ON task.id = user_task.task_id
INNER JOIN user
ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows'
AND MONTH(created) = 09;
-- Find how many tasks where created in each month
SELECT  MONTHNAME(created) AS month
       ,COUNT(*)           AS tasks
FROM task
GROUP BY  MONTH(created)
         ,MONTHNAME(created)
ORDER BY MONTH(created);