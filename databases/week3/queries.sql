USE `meal_sharing`;
-- MEAL
-- Get all meals
SELECT 
    *
FROM
    meal;
-- Add a new meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date) 
VALUES 
(1, 'Pizza Margarita', 'Pizza with tomato souce and mozarella', 'Kildemarksvej 153', CURRENT_TIMESTAMP() + INTERVAL 1 DAY, 2, 39.9, CURDATE());
-- Get a meal with any id, fx 1
SELECT 
    *
FROM
    meal
WHERE
    id = 1;
-- Update a meal with any id, fx 1. Update any attribute or multiple attributes
UPDATE meal 
SET 
    max_reservations = 3,
    price = 49.9
WHERE
    id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE
    id = 1;
-- Reservation
-- Get all reservations
SELECT 
    *
FROM
    reservation;
-- Add a new reservation
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(1, 2, 1, CURDATE(), '71355896', 'Nick', 'nick4565@gmail.com');
-- Get a reservation with any id, fx 1
SELECT 
    *
FROM
    reservation
WHERE
    id = 1;
-- Update a reservation with any id, fx 1. Update any attribute or multiple attributes
UPDATE reservation 
SET 
    number_of_guests = 1,
    contact_phonenumber = '71689546'
WHERE
    id = 1;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE
    id = 1;
-- Review
-- Get all reviews
SELECT 
    *
FROM
    review;
-- Add a new review
INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES 
(1, 'Good', 'All good!', 1, 5, CURDATE() + INTERVAL 2 DAY);
-- Get a review with any id, fx 1
SELECT 
    *
FROM
    review
WHERE
    id = 1;
-- Update a review with any id, fx 1. Update any attribute or multiple attributes
UPDATE review 
SET 
    stars = 4
WHERE
    id = 1;
-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;