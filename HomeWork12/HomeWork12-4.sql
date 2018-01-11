

--  SELECT MAX(sal.salary) FROM `employees` e 
-- inner join dept_manager dm on dm.emp_no = e.emp_no
-- inner join salaries sal on sal.emp_no = e.emp_no
--  WHERE  sal.to_date='9999-01-01' and ORDER by e.emp_no

-- SELECT * FROM `employees` e 
-- inner join salaries sal on sal.emp_no = e.emp_no
--  WHERE  sal.to_date='9999-01-01'  ORDER by e.emp_no LIMIT 100
SELECT e.emp_no ,e.first_name FROM `employees` e 
inner join dept_manager dm on dm.emp_no = e.emp_no
ORDER by e.emp_no ASC


SELECT * FROM `employees` e 
inner join salaries sal on sal.emp_no = e.emp_no 
WHERE sal.to_date='9999-01-01' and 
sal.salary >(
    SELECT MAX(sal.salary) FROM `employees` e 
    inner join dept_manager dm on dm.emp_no = e.emp_no 
    inner join salaries sal on sal.emp_no = e.emp_no 
    WHERE sal.to_date='9999-01-01'
     ORDER by e.emp_no) 
     ORDER by e.emp_no ASC