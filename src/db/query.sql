-- find sales by employee
select sum(total_sales),emp_id from works_with 
	group by emp_id;

-- find employee order by max salary
select * from employee
	order by salary desc;
-- find employee order by sex and name
select * from employee
	order by sex,first_name,last_name;
-- find first five employee
select * from employee limit 5;
-- find first and last name of employee
select first_name as a,last_name as b from employee;
-- find unique genders
select distinct SEX from employee;
-- find female employee born after date
select * from employee
	where sex='F' and birth_day > '1972-01-01'