-- MEDIUM
DROP DATABASE IF EXISTS moviesList;
CREATE DATABASE moviesList;
DROP TABLE IF EXISTS movies;

USE moviesList;
CREATE TABLE movies (
id INT AUTO_INCREMENT PRIMARY KEY,
titleName VARCHAR(255),
releaseDate DATE,
rating INT
);

INSERT INTO movies(titleName, releaseDate, rating ,id) VALUES 
('Iron Man', '2018-05-02', 3, 1),('Batman', '2020-07-30', 4, 2),
('The Incredible Hulk', '2008-06-13', 5, 3),('Marvel The Avengers	', '2012-05-04', 3, 4),
('ron Man 2', '2011-05-06', 7, 5),('Iron Man 3', '2013-05-13', 9, 6),
('Thor', '2011-05-06', 6, 7),('Thor: The Dark World', '2013-11-08', 10, 8),
('Captain America: The First Avenger', '2011-07-22', 10, 9),('Captain America: The Winter Soldier', '2014-12-13', 04, 04);


SELECT titleName FROM movies
WHERE titleName LIKE '09';


SELECT*FROM movies;
