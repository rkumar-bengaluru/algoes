-- find all employee who has sold
-- over 30000 dollars to clients.

select employee.emp_id,employee.first_name from employee where emp_id in (
	select works_with.emp_id from works_with
		where works_with.total_sales > 30000 
);
select emp_id,sum(total_sales) from works_with 
where total_sales > 30000 group by emp_id;