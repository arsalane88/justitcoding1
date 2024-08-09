-- MySQL runs on local host 127.0.0.1

-- Uses a username and a password

-- Once connected to the MySQl Server

-- Display all datbases;

SHOW DATABASES;

-- To create a database

CREATE DATABASE DFEC3;
 
-- Use database

USE DFEC3;
 
-- Check database in use

SELECT DATABASE();
 USE DFEC3;
 

-- tbl_songs is the entity

CREATE TABLE tbl_songs(

-- create the attributes(column/field names)

SongID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

Title VARCHAR(60) NOT NULL,

Artist VARCHAR(60) NOT NULL,

Genre VARCHAR(30) NOT NULL

);

 SHOW TABLES;

DESC tbl_songs;
EXPLAIN tbl_songs;

-- Task1 (Members Table): Basic SQL commands (CRUD): 

-- MemberID (primary key, auto increment, int and not null)

-- Firstname, Latname ,Email (not null, varchar(50/60))

CREATE TABLE members_tbl(
memberID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

Firstname VARCHAR(50) NOT NULL,

Lastname VARCHAR(50) NOT NULL,

Email VARCHAR(50) NOT NULL
);


-- ALTER 

-- Change the table name

ALTER TABLE members_tbl RENAME TO tbl_members;

-- Add costraint to the Email column

ALTER TABLE tbl_members

ADD CONSTRAINT UNIQUE (Email);

 

CREATE TABLE tbl_downloads(

DownloadID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

-- To create and enforce the primary key and foreign key relationship

SongID INT NOT NULL, -- references the SongID FROM bl_songs 

MemberID INT NOT NULL, -- references MemberID from tbl_members

Date DATE,

CONSTRAINT SongID 

FOREIGN KEY (SongID)

REFERENCES tbl_songs(SongID)

ON DELETE CASCADE

ON UPDATE CASCADE,

CONSTRAINT MemberID 

FOREIGN KEY (MemberID)

REFERENCES tbl_members(MemberID)

ON DELETE CASCADE

ON UPDATE CASCADE);

CREATE TABLE downloads_tbl(
    DownloadID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    SongID INT NOT NULL,
    MemberID INT NOT NULL,
    Date DATE,
    CONSTRAINT fk_SongID FOREIGN KEY (SongID) REFERENCES tbl_songs(SongID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_MemberID FOREIGN KEY (MemberID) REFERENCES tbl_members(MemberID) ON DELETE CASCADE ON UPDATE CASCADE
);
 

-- Apply CREATE/INSERT, SELECT, UPDATE, and DELETE.
 
-- Task 1.1: Create/Add 10 records to the table.

INSERT INTO members_tbl (Firstname, Lastname, Email) VALUES
('Paul', 'Smith', 'paul.smith@example.com'),
('Sally', 'Jones', 'sally.jones@example.com'),
('Aisha', 'Masuud', 'aisha.masuud@example.com'),
('Elijah', 'Jackson', 'elijah.jackson@example.com'),
('Rita', 'Patel', 'rita.patel@example.com'),
('Ayoub', 'Belmadi', 'ayoub.belmadi@example.com'),
('Alice', 'Williams', 'alice.williams@example.com'),
('Brahim', 'Mendez', 'brahim.mendez@example.com'),
('Saliha', 'Beloumi', 'saliha.beloumi@example.com'),
('Chuck', 'Abrams', 'chuck.abrams@example.com');

INSERT INTO tbl_songs (Title, Artist, Genre) VALUES
('Shape of You', 'Ed Sheeran', 'Pop'),
('Blinding Lights', 'The Weeknd', 'R&B'),
('Bohemian Rhapsody', 'Queen', 'Rock'),
('Bad Guy', 'Billie Eilish', 'Alternative'),
('Rolling in the Deep', 'Adele', 'Soul'),
('Uptown Funk', 'Mark Ronson ft. Bruno Mars', 'Funk'),
('Hotel California', 'Eagles', 'Rock'),
('Someone Like You', 'Adele', 'Pop'),
('Smells Like Teen Spirit', 'Nirvana', 'Grunge'),
('Thinking Out Loud', 'Ed Sheeran', 'Pop');


-- INSERT statements with column names and values

INSERT INTO tbl_songs (Artist,Title,Genre) VALUES('Ed Sheeran','Shape of you','Pop');

-- INSERT statements without column names , just values values and NULL keyword

-- for auto increment field

INSERT INTO tbl_songs VALUES(NULL,'Beautiful','James Blunt','Classic');
 
 
-- Task 1.2: Read all records from the table.

SELECT * FROM members_tbl;


-- Display all records in the tbl_songs table

SELECT * FROM tbl_songs;

-- Display a specific record(s) in the tbl_songs table based on the condintion

-- after the WHERE clause

SELECT * FROM tbl_songs WHERE SongID = 2;
 
 
-- Task 1.3: Read a specific record(s) from the table using the where clause.

SELECT * FROM members_tbl WHERE Lastname = 'Mendez';

SELECT * FROM members_tbl WHERE memberID > 7;
 
-- Task 1.4: Update any two records

UPDATE members_tbl
SET Email = 'paul.smith@gmail.com'
WHERE memberID = 1;

UPDATE members_tbl
SET Lastname = 'Chacrubati'
WHERE memberID = 5;
 
-- Task 1.5: Delete one/more of the records

DELETE FROM members_tbl
WHERE memberID = 2;

-- 2

INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(1, 1, '2024-07-01');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(4, 5, '2024-06-02');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(3, 3, '2024-07-03');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(4, 4, '2024-07-04');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(5, 5, '2024-07-05');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(6, 6, '2024-07-06');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(7, 7, '2024-07-07');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(8, 8, '2024-07-08');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(9, 9, '2024-07-09');
INSERT INTO downloads_tbl (SongID, MemberID, Date) VALUES
(10, 10, '2024-07-10');

SELECT * FROM downloads_tbl;

SELECT * FROM downloads_tbl WHERE DownloadID = 15;

UPDATE downloads_tbl
SET Date = '2024-05-10'
WHERE DownloadID = 18;


UPDATE downloads_tbl
SET SongID = '9'
WHERE DownloadID = 21;

DELETE from downloads_tbl WHERE DownloadID = 17;

-- 3

SELECT * FROM tbl_members ORDER BY Lastname DESC;
SELECT * FROM tbl_members ORDER BY Firstname ASC;

SELECT SongID, COUNT(*) AS 'Two or more songs'
FROM downloads_tbl GROUP BY SongID
HAVING COUNT(*) >=2;

-- 4

SELECT * FROM tbl_songs WHERE Artist = 'Ed Sheeran' AND Genre = 'Pop';

SELECT * FROM tbl_songs WHERE NOT Genre = 'Pop';

SELECT * FROM tbl_songs WHERE Artist = 'Adele' OR Genre = 'Soul';

SELECT Firstname, Lastname, Email
FROM members_tbl
WHERE (Firstname = 'Paul' AND Lastname = 'Smith')
   OR (Firstname = 'Sally' AND NOT Lastname = 'Jones');

-- Task 5 Functions: Using a string and date functions
-- 5.1 use the concat function to join any two fields 

SELECT * FROM tbl_songs;
SELECT CONCAT(Title, ': ', Genre ) AS 'Track' FROM tbl_songs;

-- 5.2 use the concat function to join any three fields 

SELECT CONCAT(Firstname, ' ', Lastname, ': ', Email ) AS 'Member Details'
FROM members_tbl;

-- Task 5.3: Strech and challenge: Research and apply the DATEDIFF where it applies to any table:
-- Using a date function (https://www.w3schools.com/sql/func_mysql_datediff.asp)


SELECT MemberID, DATEDIFF(CURDATE(),Date) AS 'Number of days since song last downloaded',
SongID
FROM downloads_tbl;

-- Task 6: Use the like Operator(SQL Logical Operators)
-- Task 6.1
-- Query the members table to find Lastname that starts with b
SELECT * FROM members_tbl WHERE Lastname LIKE 'B%';
-- Query the members table to find Lastname that ends with a
SELECT * FROM members_tbl WHERE Lastname LIKE '%a';
-- Query the members table to find Lastname that starts a with and ends with a
SELECT * FROM members_tbl WHERE Lastname LIKE 'A%a';

-- Task 6.2: 
-- Query the members table to find email address that contain .co.uk
SELECT * FROM members_tbl WHERE Email LIKE '%.co.uk';
-- Query the members table to find email address that does not contain com
SELECT * FROM members_tbl WHERE Email NOT LIKE '%.com';
-- Query the members table to find email address that does not contain .co.uk
SELECT * FROM members_tbl WHERE Email NOT LIKE '%.co.uk';
-- Query the members table to find email address that contain .co.uk and does not contain coldmail.co.uk
SELECT * FROM members_tbl WHERE Email LIKE '%.co.uk' AND Email NOT LIKE '%.coldmail.co.uk';

-- Task 6.2: Strech and challenge: Research and apply the following operators to any of the three tables:
-- SQL IN and NOT IN Operator (https://www.w3schools.com/sql/sql_in.asp)
select * from tbl_songs where genre in ('pop', 'rock', 'soul');

select * from tbl_songs where artist not in ('Ed Sheeran', 'Eagles', 'Queen');
-- The SQL Between Operator (https://www.w3schools.com/sql/sql_between.asp)
