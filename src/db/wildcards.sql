-- wildcards
-- find client with client name ends with LLC
select * from client where client_name like '%LLC';
-- find client with clent name containing 'daly'
select * from client where client_name like '%daly%';
-- find employee born in oct
select * from employee where birth_day like '____-10%';