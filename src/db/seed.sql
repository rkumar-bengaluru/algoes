-- Corporate
INSERT INTO employee(first_name,last_name,birth_day,sex,salary,super_id,branch_id) 
	VALUES('David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Michael', 'Scott', '1964-03-15', 'M', 75000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Angela', 'Martin', '1971-06-25', 'F', 63000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Kelly', 'Kapoor', '1980-02-05', 'F', 55000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Stanley', 'Hudson', '1958-02-19', 'M', 69000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Josh', 'Porter', '1969-09-05', 'M', 78000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Andy', 'Bernard', '1973-07-22', 'M', 65000, NULL, NULL);
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Jim', 'Halpert', '1978-10-01', 'M', 71000, NULL, NULL);

INSERT INTO branch (branch_name,mgr_id,mgr_start_date) 
	VALUES('Corporate', 1, '2006-02-09');
INSERT INTO branch (branch_name,mgr_id,mgr_start_date)  
	VALUES('Scranton', 3, '1992-04-06');
INSERT INTO branch (branch_name,mgr_id,mgr_start_date) 
	VALUES('Stamford', 6, '1998-02-13');

UPDATE employee SET super_id= NULL,branch_id = 1 WHERE emp_id = 1;
UPDATE employee SET super_id= 1, branch_id = 2 WHERE emp_id = 2;
UPDATE employee SET super_id= 2, branch_id = 2 WHERE emp_id = 3;
UPDATE employee SET super_id= 2, branch_id = 2 WHERE emp_id = 4;
UPDATE employee SET super_id= 2, branch_id = 2 WHERE emp_id = 5;
UPDATE employee SET super_id= NULL, branch_id = 3 WHERE emp_id = 6;
UPDATE employee SET super_id= 6, branch_id = 3 WHERE emp_id = 7;
UPDATE employee SET super_id= 6, branch_id = 3 WHERE emp_id = 8;

-- BRANCH SUPPLIER
INSERT INTO branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'J.T. Forms & Labels', 'Custom Forms');
INSERT INTO branch_supplier VALUES(3, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');

-- CLIENT
INSERT INTO client (client_name,branch_id) VALUES( 'Dunmore Highschool', 2);
INSERT INTO client (client_name,branch_id) VALUES( 'Lackawana Country', 2);
INSERT INTO client (client_name,branch_id) VALUES( 'FedEx', 3);
INSERT INTO client (client_name,branch_id) VALUES( 'John Daly Law, LLC', 3);
INSERT INTO client (client_name,branch_id) VALUES( 'Scranton Whitepages', 2);
INSERT INTO client (client_name,branch_id) VALUES( 'Times Newspaper', 3);
INSERT INTO client (client_name,branch_id) VALUES( 'FedEx', 2);

-- WORKS_WITH
INSERT INTO works_with VALUES(5, 1, 55000);
INSERT INTO works_with VALUES(2, 2, 267000);
INSERT INTO works_with VALUES(8, 3, 22500);
INSERT INTO works_with VALUES(7, 4, 5000);
INSERT INTO works_with VALUES(8, 4, 12000);
INSERT INTO works_with VALUES(5, 5, 33000);
INSERT INTO works_with VALUES(7, 6, 26000);
INSERT INTO works_with VALUES(2, 7, 15000);
INSERT INTO works_with VALUES(5, 7, 130000);