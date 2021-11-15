-- joins

INSERT INTO branch (branch_name,mgr_id,mgr_start_date) 
	VALUES('Buffalo', NULL, NULL);
    
-- find all branch and name of manager
select e.emp_id,e.first_name,b.branch_name from 
branch b
join employee e
on b.mgr_id=e.emp_id;

select e.emp_id,e.first_name,b.branch_name from 
employee e
left join branch b
on b.mgr_id=e.emp_id;



select e.emp_id,e.first_name,b.branch_name from 
branch b
join employee e
on b.mgr_id=e.emp_id;

select b.branch_name,e.first_name,bs.supplier_name from 
branch b
join employee e
join branch_supplier bs
on b.mgr_id=e.emp_id and b.branch_id=bs.branch_id;