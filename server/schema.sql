CREATE DATABASE chatterz;

USE chatterz;

CREATE TABLE Users (
  id int NOT NULL,
  name varchar(20),
  PRIMARY KEY(id)
);

CREATE TABLE Room (
  id int NOT NULL,
  roomname varchar(20),
  PRIMARY KEY(id)
);

CREATE TABLE Messages (
  id int NOT NULL,
  message varchar(255),
  userID int,
  roomID int,
  PRIMARY KEY(id),
  FOREIGN KEY(userID) REFERENCES Users (id),
  FOREIGN KEY(roomID) REFERENCES Room (id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
