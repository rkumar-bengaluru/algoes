-- find sales by employee
select sum(total_sales),emp_id from works_with 
	group by emp_id;
-- find how many male & female employee.
select count(sex), sex from employee 
	group by sex;
-- find average salary
select avg(salary) from employee;
-- find sum of salary
select sum(salary) from employee;
-- find number of employees
select count(super_id) from employee;