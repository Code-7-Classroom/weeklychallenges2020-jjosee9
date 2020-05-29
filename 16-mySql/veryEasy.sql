
DROP DATABASE IF EXISTS challenges;

CREATE DATABASE challenges;

USE challenges;

CREATE TABLE topCars (
id INT AUTO_INCREMENT PRIMARY KEY, 
make VARCHAR(30),
model VARCHAR(30),
year INT(30)
);

INSERT INTO topCars(id, make, model, year) 
VALUES (1,'Toyota', 'Tacoma', 2019),
       (2,'Ford', 'Raptor', 2020),
	   (3,'Dodge', 'Ram', 2021);
 
SELECT * FROM topCars;