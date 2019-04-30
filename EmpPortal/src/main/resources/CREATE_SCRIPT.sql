/*Create 'emp_portal' Database*/
--DROP DATABASE IF EXISTS emp_portal;
CREATE DATABASE emp_portal;

USE emp_portal;

CREATE TABLE USER (
id bigint not null auto_increment,
username varchar(255),
password varchar(255),
first_name varchar(255), 
last_name varchar(255), 
gender varchar(255), 
dob varchar(255),  
primary key (id)
) engine=MyISAM;

CREATE TABLE EMPLOYEE (
id bigint not null auto_increment,
first_name varchar(255), 
last_name varchar(255), 
gender varchar(255), 
dob varchar(255),  
department varchar(255),  
primary key (id)
) engine=MyISAM;


