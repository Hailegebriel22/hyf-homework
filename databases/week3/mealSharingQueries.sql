-- Meal Sharing Queries

-- Get all meals

SELECT * FROM `meal`;

-- Add a new meal

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created
    )
values (
        'Buffet',
        'ten different types of meals',
        'Copenhagen',
        '2022-08-15 12:00:00',
        10,
        75.00,
        '2022-08-10 12:30:00'
    );

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created
    )
values (
        'Beef steak',
        'with thai sauce',
        'Copenhagen',
        '2022-08-13 18:30:00',
        15,
        199.00,
        '2022-08-11 11:15:00'
    );

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created
    )
values (
        'Beef burger',
        'with soda',
        'Aarhus',
        '2022-07-22 11:30:00',
        20,
        85.00,
        '2022-07-20 12:12:12'
    );

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created
    )
values (
        'Salmon',
        'Smoked salmon',
        'Odense',
        '2022-09-10 11:30:00',
        20,
        105.00,
        '2022-09-02 10:15:00'
    );

INSERT INTO
    meal (
        title,
        description,
        location,
        `when`,
        max_reservations,
        price,
        created
    )
values (
        'Pizza',
        'Pepperoni pizza',
        'Odense',
        '2022-09-02 12:15:00',
        25,
        75.00,
        '2022-08-30 14:15:00'
    );

-- Get a meal with any id, fx 1

SELECT * FROM `meal` WHERE id=3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE `meal` SET title = 'Beef burger with fries' WHERE id = 3;

-- Delete a meal with any id, fx 1

DELETE FROM meals WHERE id=1;

-- Get all reservation

SELECT * FROM `Reservation`;

-- Add a new Reservation

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
values (
        3,
        2,
        '2022-09-01 12:15:00',
        '333333',
        'mani jone',
        'mani@example.com'
    );

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
values (
        2,
        1,
        '2022-08-15 12:15:00',
        '1111111',
        'Dave Chappelle',
        'dave_chappelle@comedy.com'
    );

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
values (
        4,
        1,
        '2022-09-02 15:15:00',
        '222222',
        'Lewis Hamilton',
        'lewis_hamilton@racecar.com'
    );

-- Get a Reservation with any id, fx 1

SELECT * FROM `Reservation` WHERE id=1;

-- Update a Reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE `Reservation` SET number_of_guests = 4 WHERE id = 1;

-- Delete a Reservation with any id, fx 1

DELETE FROM Reservation WHERE id=1;

-- Get all Review

SELECT * FROM `Review`;

-- Add a new Review

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
values (
        'Good service',
        'Good service and good food taste.',
        3,
        4,
        '2022-07-23 12:00:00'
    );

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
values (
        'A cozy restaurant',
        'The food test okay, but the place is cozy.',
        5,
        3,
        '2022-09-02 19:00:00'
    );

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
values (
        'unfair price',
        'expensive food prices.',
        2,
        2,
        '2022-08-14 20:00:00'
    );

-- Get a Review with any id, fx 1

SELECT * FROM `Review` WHERE id=1;

-- Update a Review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE `Review`
SET
    description = 'The place is cozy and the food test was okay.'
WHERE id = 2;

-- Delete a Review with any id, fx 1

DELETE FROM Review WHERE id=2;

--  Additional queries and Functionality

-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM meal WHERE price<=100;

-- Get meals that still has available reservations

SELECT
    meal.title,
    meal.max_reservations, (
        meal.max_reservations - sum(Reservation.number_of_guests)
    ) AS available_reservations
FROM meal
    JOIN Reservation ON meal.id = Reservation.meal_id
GROUP BY meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM meal WHERE title LIKE '%Beef%';

-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE
    created BETWEEN '2022-07-10' AND '2022-08-30';

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM meal LIMIT 5;

-- Get the meals that have good reviews

SELECT
    meal.id,
    meal.title,
    meal.description,
    meal.location,
    meal.when,
    meal.max_reservations,
    meal.price,
    meal.created
FROM meal
    INNER JOIN Review ON Review.meal_id = meal.id
WHERE stars >= 3;

-- Get reservations for a specific meal sorted by created_date

SELECT
    meal.title,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
FROM Reservation
    INNER JOIN meal ON Reservation.meal_id = meal.id
WHERE meal.title = 'Buffet'
ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews

SELECT
    meal.title,
    AVG(Review.stars)
FROM meal
    INNER JOIN Review ON meal.id = Review.meal_id
GROUP BY Review.meal_id
ORDER BY AVG(Review.stars)