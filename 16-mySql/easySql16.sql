DROP DATABASE IF EXISTS bookList;
CREATE DATABASE bookList;

USE bookList;
CREATE TABLE book (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
firstName VARCHAR(255),
lastName VARCHAR(255),
publishDate DATE
);

INSERT INTO book(title, firstName, lastName, publishDate, id) 
VALUES 
('The Lion, the Witch and the Wardrobe','C.S.', 'Lewis', '1950-10-16' ,1),
('Prince Caspian','C.S.', 'Lewis', '1951-10-15' ,2),
('Just as I Am','Billy', 'Graham', '2018-03-13' ,3),
('The End of Reason','Ravi', 'Zacharias', '2008-05-11' ,4),
('Beyond Opinion','Ravi', 'Zacharias', '2010-01-10' ,5);


SELECT*FROM book;
