create table trigger_test (
	message varchar(100)
);

DELIMITER $$
	create trigger employee_trigger before insert
		on employee
        for each row begin
			insert into trigger_test values ('added new employee');
		END$$
DELIMITER ;

DELIMITER $$
	create trigger employee_trigger_new before insert
		on employee
        for each row begin
			if NEW.sex = 'M' then
				insert into trigger_test values ('added male employee');
			elseif NEW.sex = 'F' then
				insert into trigger_test values ('added female employee');
			else
				insert into trigger_test values ('added new employee');
			end if;
		END$$
DELIMITER ;
select * from employee;
select * from trigger_test;
INSERT INTO employee (first_name,last_name,birth_day,sex,salary,super_id,branch_id)  
	VALUES('Jim', 'Halpert', '1978-10-01', 'M', 71000, NULL, NULL);