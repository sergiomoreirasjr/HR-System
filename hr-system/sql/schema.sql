CREATE SCHEMA IF NOT EXISTS user_info;

USE user_info;

CREATE TABLE IF NOT EXISTS user_info_table (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255)
);