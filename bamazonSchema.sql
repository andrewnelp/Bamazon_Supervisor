DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  item_id INT NOT NULL 
  AUTO_INCREMENT,
  product_name VARCHAR
  (100) NOT NULL,
  department_name VARCHAR
  (100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY
  (item_id)
);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)
VALUES
  ("headphones", "electronics", 50, 15),
  ("Iphone", "electronics", 600, 25),
  ("Samsung Note 9 phone", "electronics", 500, 11),
  ("Samsung galaxy Note 9 Case ", "electronics", 50, 15),
  ("Energy Green Superfood", "dieting supplements", 45, 12),
  ("Woman's gloves", "clothes", 15, 50),
  ("Man's gloves", "clothes", 16, 34),
  ("1800-Watt Steam Iron", "appliences", 99, 10),
  ("Toaster", "appliences", 10, 12),
  ("Chlorophyll Liquid Drops", "dieting supplements", 7, 23);