INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES (36, 'Start learning TypeScript', NULL, '2023-05-17 11:57:47', '2023-05-17 12:37:47', '2023-09-30 12:00:00', 1, 5);

UPDATE task
SET  title = 'Remove facebook and instagram from phone'
WHERE id = 30;

UPDATE task
SET due_date = '2023-05-17 12:19:00'
WHERE id = 30;

UPDATE task
SET status_id = 
	(SELECT id
    FROM status
    WHERE name = 'In progress')
WHERE id = 30;

UPDATE task
SET status_id = 
	(SELECT id
    FROM status
    WHERE name = 'Done')
WHERE id = 30;

DELETE 
FROM task
WHERE id = 30;