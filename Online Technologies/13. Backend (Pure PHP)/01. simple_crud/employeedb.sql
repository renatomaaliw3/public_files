CREATE DATABASE employeedb;

CREATE TABLE tblemployees (
	
	employeeid int NOT NULL AUTO_INCREMENT,
	lastname varchar(255) NOT NULL,
	firstname varchar(255) NOT NULL,
	department varchar(255) NOT NULL,
	PRIMARY KEY (employeeid)

)

-- CREATE (INSERT) --

INSERT INTO tblemployees (lastname, firstname, department) VALUES ('Maaliw', 'Renato III', 'CIT')

-- READ --

SELECT * FROM tblemployees;

-- READ WITH FILTER --

SELECT * FROM tblemployees WHERE employeeid = 1

-- UPDATE --

UPDATE tblemployees SET lastname = 'Maaliw', firstname = 'Renato Jr.', department = 'CEN'
WHERE employeeid = 1

-- DELETE --

DELETE FROM tblemployees WHERE employeeid = 1


