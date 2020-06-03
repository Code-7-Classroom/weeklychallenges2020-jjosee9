
DROP DATABASE IF EXISTS challengesUp;

CREATE DATABASE challengesUp;

USE challengesUp;

CREATE TABLE topCarsUp (
id INT AUTO_INCREMENT PRIMARY KEY, 
make VARCHAR(30),
model VARCHAR(30),
year INT(30)
);

INSERT INTO topCarsUp(id, make, model, year) 
VALUES (1,'Toyota', 'Tacoma', 2019),
       (2,'Ford', 'Raptor', 2020),
	   (3,'Dodge', 'Ram', 2021);
 

ALTER TABLE carsUp ADD carPrice INT;
ALTER TABLE carsUp ADD carColor VARCHAR(255);

UPDATE cars2 SET carPrice = 40000 
WHERE carModel = "Tacoma";
UPDATE carsUp SET carPrice = 60000 
WHERE carModel = "Raptor";
UPDATE carsUp SET carPrice = 50000 
WHERE carModel = "Ram";

UPDATE carsUp SET carColor = 'Grey' 
WHERE id = 1;
UPDATE carsUp SET carColor = 'Blak' 
WHERE id = 2;
UPDATE carsUp SET carColor = 'BLue' 
WHERE id = 3;

SELECT CONCAT(carMake , ' ' , carModel) AS carType FROM cars2;

SELECT carMake, COUNT(carMake) FROM carsUp
GROUP BY carMake HAVING COUNT(carMake) > 1;


SELECT*FROM carModel;

