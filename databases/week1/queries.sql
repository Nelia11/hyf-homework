SELECT COUNT(*) AS total
FROM task;

SELECT COUNT(*) AS total
FROM task
WHERE due_date IS NULL;

SELECT title
FROM task
JOIN status ON task.status_id = status.id 
WHERE status.name = "Done";

SELECT title
FROM task
JOIN status ON task.status_id = status.id 
WHERE status.name != "Done";

SELECT title
FROM task
ORDER BY created DESC;

SELECT title
FROM task
ORDER BY created DESC LIMIT 1;

SELECT title
	,due_date
FROM task
WHERE title LIKE "%database%"
	OR description LIKE "%database%";
    
SELECT task.title
	,status.name AS status 
FROM task 
INNER JOIN status ON task.status_id = status.id;

SELECT status.name AS status
	,COUNT(*) AS total 
FROM status INNER JOIN task ON task.status_id = status.id 
GROUP BY status.name;

SELECT status.name AS status
	,COUNT(*) AS total 
FROM status 
INNER JOIN task ON task.status_id = status.id 
GROUP BY status.name 
ORDER BY total DESC;