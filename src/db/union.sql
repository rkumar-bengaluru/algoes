-- union

--  find list of employee and branch name.s
select first_name from employee
union
select branch_name from branch;