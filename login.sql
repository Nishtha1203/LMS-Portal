create database IF NOT EXISTS login;
USE login;
CREATE TABLE IF NOT EXISTS logindetails (
    username varchar(20) PRIMARY KEY,
    password varchar(20)
);

INSERT INTO logindetails(username,password) VALUES
('Nishtha','npabreja@muj'),
('Mayank','mayank98@muj');