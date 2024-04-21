CREATE DATABASE IF NOT EXISTS banking;
USE banking;
CREATE TABLE users (username VARCHAR(255), password VARCHAR(255), address1 VARCHAR(255), address2 VARCHAR(255));
CREATE TABLE accounts (username VARCHAR(255), accname VARCHAR(255), balance DECIMAL(10,2));
INSERT INTO users VALUES('leak', '$2b$10$CpAWxLmggaU.bUOMs2DtJOgmYj5EfnpPYLy10X4PIeLuPl2zk59ZC', 'university road', 'california');
INSERT INTO accounts VALUES('leak, 'checking', 10000000);
INSERT INTO accounts VALUES('leak', 'saving', 90000000);
GRANT ALL PRIVILEGES ON banking.* TO 'root'@'localhost' IDENTIFIED BY '12345678';


