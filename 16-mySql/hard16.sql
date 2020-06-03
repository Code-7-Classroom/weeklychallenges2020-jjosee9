-- Hard
DROP DATABASE IF EXISTS moviesList;
CREATE DATABASE moviesList;
DROP TABLE IF EXISTS movies;

USE moviesList;
CREATE TABLE movies (
id INT AUTO_INCREMENT PRIMARY KEY,
titleName VARCHAR(255),
releaseDate DATE,
rating INT,
firstName VARCHAR(255),
lastName VARCHAR(255)
);

INSERT INTO movies(titleName, releaseDate, rating ,id) VALUES 
('Jon','Favreau','Iron Man', '2018-05-02', 3, 1),('Scott ','Derrickson','Doctor Strange', '2016-11-04', 4, 2),
('Louis ','Leterrier','The Incredible Hulk','2008-06-13', 5, 3),('Joss','Whedon','Marvel The Avengers	', '2012-05-04', 3, 4),
('Jon','Favreau','ron Man 2', '2011-05-06', 7, 5),('Shane','Blak','Iron Man 3', '2013-05-13', 9, 6),
('Kenneth ', 'Branagh''Thor', '2011-05-06', 6, 7),('Alan','Taylor''Thor: The Dark World', '2013-11-08', 10, 8),
('Joe','Johnston','Captain America: The First Avenger', '2011-07-22', 10, 9),('Anthony','Russo''Captain America: The Winter Soldier', '2014-12-13', 04, 04);


SELECT CONCAT(firstName , ' ' , lastName) AS fullName FROM movies2;

SELECT*FROM movies2
ORDER BY lastName ASC;

SELECT titleName FROM movies2
WHERE titleName LIKE '%s%';

DELETE FROM movies2 WHERE lastName REGEXP '[R-Z]$';
SELECT*FROM movies2;

SELECT*FROM movies2 LIMIT 3;


SELECT*FROM movies2;