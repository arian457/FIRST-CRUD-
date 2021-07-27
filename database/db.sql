CREATE DATABASE database_friends;

USE database_friends;
-- USERS TABLE
CREATE TABLE users (
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
 ADD PRIMARY KEY (id);
ALTER TABLE users
 MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
-- FRIENDS TABLES
CREATE TABLE friends (
    id INT(11) NOT NULL,
    name VARCHAR(150) NOT NULL,
    surname VARCHAR(150) NOT NULL,
    description TEXT, 
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
)
ALTER TABLE friends 
ADD PRIMARY KEY (id)
ALTER TABLE friends 
 MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
DESCRIBE users;