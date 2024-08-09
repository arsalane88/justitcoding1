-- sql_2

SELECT * FROM tbl_songs WHERE Artist LIKE 'M%'; -- starts with m

SELECT * FROM tbl_songs WHERE Artist LIKE '%M'; -- end with m

SELECT * FROM tbl_songs WHERE Artist LIKE '%ia%'; -- ia in the Artist

SELECT * FROM tbl_songs WHERE Artist LIKE 'a%e'; -- start/end with a
 
 SELECT * FROM tbl_songs WHERE Genre LIKE 'r__'; -- three characters
 
 SELECT * FROM tbl_songs WHERE Genre LIKE '_o__'; -- four characters
 
SELECT * FROM tbl_members WHERE Email LIKE '%.com'; --

SELECT * FROM tbl_members WHERE Email LIKE '%.org';
 
 -- UNION keyword is to retrieve two or more tables/fields together
-- Requirements: Fields from each table must match in terms of
-- Datatypes, tables must have the same number of fields
-- with exactly the same name
 
SELECT Firstname FROM tbl_members WHERE Firstname LIKE 'A%'
UNION
SELECT Firstname FROM tbl_members WHERE Firstname LIKE 'B%';

-- Only display correct data if datatype, number of columns and field names

-- are the same for each table in the union

SELECT * FROM tbl_songs
UNION
SELECT * FROM tbl_members;

 
-- INNER JOINS: (Uses the primary and foreign key relationship

-- to join and data from related tables

-- The link between downloads and members, and songs is based

-- on the MemberID and SongID
 
SELECT * FROM tbl_downloads
INNER JOIN
tbl_songs ON tbl_downloads.SongID = tbl_songs.SongID;
 

SELECT tbl_downloads.Date, tbl_downloads.SongID, tbl_songs.Artist
FROM tbl_downloads
INNER JOIN
tbl_songs ON tbl_downloads.SongID = tbl_songs.SongID;

 SELECT * FROM tbl_downloads
INNER JOIN
tbl_members ON tbl_downloads.MemberID = tbl_members.MemberID;
 
 
SELECT tbl_downloads.Date, tbl_downloads.SongID, tbl_members.Email
FROM tbl_downloads
INNER JOIN
tbl_members ON tbl_downloads.MemberID = tbl_members.MemberID;

-- INNER JOIN with WHERE  clause
SELECT tbl_downloads.*, tbl_members.*
FROM tbl_downloads
INNER JOIN
tbl_members ON tbl_downloads.MemberID = tbl_members.MemberID
WHERE tbl_downloads.MemberID = 3;

-- Add a new column/field to songs table
ALTER TABLE tbl_songs ADD Duration INT NOT NULL DEFAULT 0;

ALTER TABLE tbl_songs ADD testField INT;

-- Modify the datatype for a column

ALTER TABLE tbl_songs MODIFY COLUMN testField VARCHAR(30);
 
-- Drop column

ALTER TABLE tbl_songs DROP testField;

-- pk, fk insertion

CREATE TABLE tbl_test(
SongID INT NOT NULL,
Title VARCHAR(60) NOT NULL,
Artist VARCHAR(60) NOT NULL,
Genre VARCHAR(30) NOT NULL
);

ALTER TABLE tbl_test 
ADD CONSTRAINT pk_SongID PRIMARY KEY (SongID);
 
CREATE TABLE tbl_test2(
MemberID INT NOT NULL AUTO_INCREMENT,
SongID INT NOT NULL,
Firstname VARCHAR(60) NOT NULL,
Latname VARCHAR(60) NOT NULL,
Email VARCHAR(60) NOT NULL,
PRIMARY KEY (MemberID));
 
EXPLAIN tbl_test2;
ALTER TABLE tbl_test2
ADD CONSTRAINT fk_SongID FOREIGN KEY (SongID)
REFERENCES tbl_test (SongID);
 
-- Stored Procedure with variable:parameters and arguments
 
-- To start a procedure use the DELIMITER $$
DELIMITER $$
 
-- create procedure name(IN operator, variable:parameters, datatype)
CREATE PROCEDURE findASong(IN parameter_SongID INT)
BEGIN
SELECT * FROM tbl_songs WHERE SongID = parameter_SongID;
END$$
 
DELIMITER $$


-- To call/invoke a procedure

CALL findASong(10);
 
-- Display a procedure

SHOW CREATE PROCEDURE findASong;

DELIMITER $$
-- create procedure name(IN operator, variable:parameters, datatype)
CREATE PROCEDURE aMember()
BEGIN
SELECT * FROM tbl_members WHERE MemberID = 10;
END$$
DELIMITER $$
 
CALL aMember();

-- CASE statement/epression checks for multiple condition and peform some operations

-- based on the condition(s)
 
 
SELECT * FROM tbl_members;
 
UPDATE tbl_members SET Lastname =

(CASE MemberID -- 1/2/3/4.....

WHEN 5 THEN 'Bond'

WHEN 10 THEN 'Blue'

WHEN 21 THEN 'Red'

END

)

WHERE MemberID IN(5,10,21);
 

UPDATE tbl_members SET Firstname =

CASE MemberID 

WHEN 22 THEN 'Brian'

WHEN 23 THEN 'Ben'

WHEN 24 THEN 'Rheon'

ELSE Firstname -- Keep the exisyting Firstname if no match is found

END,
 
Email = CASE MemberID

WHEN 22 THEN 'brian@example.org'

WHEN 23 THEN 'ben@test.org'

WHEN 24 THEN 'rheon@db.co.uk'

END

WHERE MemberID IN(22,23,24);

-- SQL VIEWS creates a virtual table that is not related to any other tables

CREATE VIEW all_members

AS

SELECT * FROM tbl_members;
 
-- To use the view

SELECT * FROM all_members;

-- USING keyword on a view

CREATE VIEW all_downloads

AS

SELECT * FROM tbl_members

INNER JOIN tbl_downloads

USING(MemberID)
 
SELECT * FROM all_downloads;

-- eg 2

SELECT * FROM tbl_members

INNER JOIN tbl_downloads

USING(MemberID)

WHERE MemberID = 3;
 

CREATE VIEW dowbloads_by_member

AS

SELECT * FROM tbl_members

INNER JOIN tbl_downloads

USING(MemberID)

WHERE MemberID = 3;
 
SELECT * FROM dowbloads_by_member;
 
-- SQL Distinct: returns one instance of value in a column

-- despite the number of occurences of tha value

SELECT DISTINCT Artist FROM tbl_songs;
 