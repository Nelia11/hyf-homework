CREATE TABLE meal(
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   title VARCHAR(200) NOT NULL,
   description TEXT NOT NULL,
   location VARCHAR(100),
   when_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   max_reservations INT NOT NULL,
   price DECIMAL(10,2),  
   created_date DATE,
   src VARCHAR(100)
);

CREATE TABLE review(
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   title VARCHAR(100) NOT NULL,
   description TEXT NOT NULL,
   meal_id INT NOT NULL REFERENCES meal(id),
   stars INT,  
   created_date DATE
);

 CREATE TABLE reservation(
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   number_of_guests INT NOT NULL,
   meal_id INT NOT NULL REFERENCES meal(id),
   created_date TIMESTAMP,
   contact_phonenumber VARCHAR(50),
   contact_name VARCHAR(100),
   contact_email VARCHAR(100)
);


INSERT INTO meal (title, description, max_reservations, location, when_date, price, created_date, src)
VALUES 
    ('Cheesecake', 'Cheesecake with salty caramel', 9, 'Restaurant Nimb, Cph', '2023-11-24 13:45:30', 159.00, '2023-11-23', 'https://meal-sharing-photos.s3.eu-north-1.amazonaws.com/cheesecake.jpg'),
    ('Pumpkin soup', 'Cream-soup from pumpkin', 8, 'IKEA Taastrup', '2023-11-21 17:30:00', 28.50, '2023-11-20', 'https://meal-sharing-photos.s3.eu-north-1.amazonaws.com/pumpkin-soup.jpg'),
    ('Rød grød med fløde', 'Rød grød med fløde', 3, 'Cafe Vivaldi, Naestved', '2023-11-23 11:00:00', 49.99, '2023-11-22', 'https://meal-sharing-photos.s3.eu-north-1.amazonaws.com/rodgrod-med-flode.jpg'),
    ('Salat Box', 'Salat from seasonal vegetables', 8, 'Restaurant Flammen, Naestved', '2023-11-24 20:30:00', 19.50, '2023-11-22', 'https://meal-sharing-photos.s3.eu-north-1.amazonaws.com/salad-box.jpg'),
    ('Pasta Quattro Formaggi', 'Pasta with 4 types of cheese', 7, 'Naestved Storcenter', '2023-11-19 14:00:00', 119.90, '2023-11-20', 'https://meal-sharing-photos.s3.eu-north-1.amazonaws.com/spagetti-quattro-formaggi.jpg');
