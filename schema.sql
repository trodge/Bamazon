DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER,
    PRIMARY KEY(id)
);

INSERT INTO products VALUES 
(NULL, "Plumbus", "Interdimensional", 6.5, 69),
(NULL, "Grodus", "Interdimensional", 2.1, 121),
(NULL, "Chumble", "Interdimensional", 1.5, 87),
(NULL, "Bobbish", "Food", 1.11, 33),
(NULL, "Eyeholes", "Food", 1.64, 17),
(NULL, "Jan Quadrant Vincent 16", "DVDs", 13.3, 57),
(NULL, "Lil' Bits", "Food", 2.2, 45),
(NULL, "The Northsiders Season 1", "DVDs", 13.3, 43),
(NULL, "Schechuan Sauce", "Food", 0.77, 3),
(NULL, "Grodus", "Interdimensional", 2.1, 121),
(NULL, "Chumble", "Interdimensional", 1.5, 87),
(NULL, "Portal Gun", "Interdimensional", 99999999.99, 1);