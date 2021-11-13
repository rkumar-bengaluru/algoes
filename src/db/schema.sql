use vlocalshop;
SET FOREIGN_KEY_CHECKS=0;
drop table if exists works_with;
drop table if exists branch_supplier;
drop table if exists client;
drop table if exists branch;
drop table if exists employee;
SET FOREIGN_KEY_CHECKS=1;


CREATE TABLE employee (
  emp_id INT PRIMARY KEY auto_increment,
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  birth_day DATE,
  sex VARCHAR(1),
  salary INT,
  super_id INT,
  branch_id INT
);

CREATE TABLE branch (
  branch_id INT PRIMARY KEY auto_increment,
  branch_name VARCHAR(40),
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

ALTER TABLE employee ADD FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL;
ALTER TABLE employee ADD FOREIGN KEY(super_id) REFERENCES employee(emp_id) ON DELETE SET NULL;

CREATE TABLE client (
  client_id INT PRIMARY KEY auto_increment,
  client_name VARCHAR(40),
  branch_id INT,
  FOREIGN KEY(branch_id) 
  REFERENCES branch(branch_id) 
  ON DELETE SET NULL
);

CREATE TABLE works_with (
  emp_id INT,
  client_id INT,
  total_sales INT,
  PRIMARY KEY(emp_id, client_id),
  FOREIGN KEY(emp_id) 
  REFERENCES employee(emp_id) 
  ON DELETE CASCADE,
  FOREIGN KEY(client_id) 
  REFERENCES client(client_id) 
  ON DELETE CASCADE
);

CREATE TABLE branch_supplier (
  branch_id INT,
  supplier_name VARCHAR(40),
  supply_type VARCHAR(40),
  PRIMARY KEY(branch_id, supplier_name),
  FOREIGN KEY(branch_id) 
  REFERENCES branch(branch_id) 
  ON DELETE CASCADE
);