CREATE DATABASE employeedb;

CREATE TABLE tblemployees (
	
	employeeid int NOT NULL AUTO_INCREMENT,
	lastname varchar(255) NOT NULL,
	firstname varchar(255) NOT NULL,
	department varchar(255) NOT NULL,
	PRIMARY KEY (employeeid)

)