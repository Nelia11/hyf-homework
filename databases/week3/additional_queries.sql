USE `meal_sharing`;
-- Add a couple of different meals, reservations and reviews with different attributes
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) 
VALUES (1, 'Pasta Quattro Formaggi', 'Pasta with 4 types of cheese', 'Naestved Storcenter', 
	   CURRENT_TIMESTAMP() + INTERVAL 1 DAY, 2, 129.9, CURDATE()), 
       (2, 'Cheesecake', 'Cheesecake with salty caramel', 'Restaurant Nimb, Cph', 
	   CURRENT_TIMESTAMP() + INTERVAL 5 DAY, 3, 259.9, CURDATE() - INTERVAL 7 DAY),
	   (3, 'Pumpkin soup', 'Cream-soup from pumpkin', 'IKEA Taastrup', 
	   CURRENT_TIMESTAMP() + INTERVAL 2 HOUR, 8, 10.0, CURDATE()),
	   (4, 'Rød grød med fløde', 'Rød grød med fløde', 'Cafe Vivaldi, Naestved', 
	   CURRENT_TIMESTAMP() + INTERVAL 3 DAY, 3, 49.9, CURDATE() - INTERVAL 2 DAY),
	   (5, 'Salat Box', 'Salat from seasonal vegetables', 'Restaurant Flammen, Naestved', 
	   CURRENT_TIMESTAMP() + INTERVAL 2 DAY, 5, 19.9, CURDATE() - INTERVAL 1 DAY);
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 1, 2, CURDATE() - INTERVAL 2 DAY, '79682896', 'Apolina', 'app582olina@icloud.com'),
	   (2, 2, 1, CURDATE(), '85569836', 'Simon', 'simon50@yahoo.com'),
       (3, 1, 3, CURDATE(), '47963282', 'Jason', 'jason56@gmail.com'),       
       (4, 1, 2, CURDATE() - INTERVAL 1 DAY, '77336699', 'Jens Jensen', 'jens.jensen@gmail.com'); 
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES (1, 'So-so', 'I thought I bought pasta with 4 types of cheese but it was paste with 3 types of cheese and one spoon of sour-cream', 1, 2, CURDATE() + INTERVAL 2 DAY),
	   (2, 'Nice atmosphere', 'Nice place and food, but a bit expensive', 2, 4, CURDATE() + INTERVAL 6 DAY),
       (3, 'It was ok', 'Good value for money', 3, 4, CURDATE() + INTERVAL 1 DAY),
       (4, 'I like this place', 'The best restaurant in the city', 2, 5, CURDATE() + INTERVAL 4 DAY);
-- Get meals that has a price smaller than a specific price fx 90
SELECT 
    title, price
FROM
    meal
WHERE
    price < 90;
-- Get meals that still has available reservations
SELECT 
    title, max_reservations, SUM(number_of_guests) AS reservated
FROM
    meal
        LEFT JOIN
    reservation ON meal.id = reservation.meal_id
GROUP BY title , max_reservations
HAVING max_reservations - IFNULL(SUM(number_of_guests), 0) > 0;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
    title
FROM
    meal
WHERE
    title LIKE '%Rød grød med%';
-- Get meals that has been created between two dates
SELECT 
    title, created_date
FROM
    meal
WHERE
    created_date BETWEEN CURDATE() - INTERVAL 1 DAY AND CURDATE();
-- Get only specific number of meals fx return only 5 meals
SELECT 
    *
FROM
    meal
LIMIT 3;
-- Get the meals that have good reviews
SELECT 
    meal.title, review.stars
FROM
    meal
        RIGHT JOIN
    review ON meal.id = review.meal_id
WHERE
    stars = 4;
-- Get reservations for a specific meal sorted by created_date
SELECT 
    meal.title, reservation.created_date
FROM
    meal
        RIGHT JOIN
    reservation ON meal.id = reservation.meal_id
WHERE
    meal.title = 'Cheesecake'
ORDER BY created_date DESC;
-- Sort all meals by average number of stars in the reviews
SELECT 
    meal.title, AVG(stars) AS avg_score
FROM
    meal
        RIGHT JOIN
    review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY AVG(stars) DESC;