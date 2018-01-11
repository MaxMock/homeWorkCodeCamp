MariaDB [(none)]> show databases
    -> ;
+--------------------+
| Database           |
+--------------------+
| bd2                |
| bookshop           |
| codecamp           |
| db1                |
| employees          |
| information_schema |
| mysql              |
| performance_schema |
| phpmyadmin         |
+--------------------+

show tables
MariaDB [employees]> show tables
    -> ;
+----------------------+
| Tables_in_employees  |
+----------------------+
| current_dept_emp     |
| departments          |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employees            |
| salaries             |
| titles               |
+----------------------+
8 rows in set (0.00 sec)

describe current_dept_emp
describe departments 
describe dept_emp 
describe dept_emp_latest_date 
describe dept_manager        
describe employees            
describe salaries             
describe titles  

MariaDB [employees]> describe current_dept_emp
    -> ;
+-----------+---------+------+-----+---------+-------+
| Field     | Type    | Null | Key | Default | Extra |
+-----------+---------+------+-----+---------+-------+
| emp_no    | int(11) | NO   |     | NULL    |       |
| dept_no   | char(4) | NO   |     | NULL    |       |
| from_date | date    | YES  |     | NULL    |       |
| to_date   | date    | YES  |     | NULL    |       |
+-----------+---------+------+-----+---------+-------+
4 rows in set (0.01 sec)
SELECT DISTINCT title FROM `titles`
SELECT COUNT(*) FROM `employees`
SELECT COUNT(*) FROM `employees` WHERE gender = 'M'
SELECT COUNT(*) FROM `employees` WHERE gender = 'F'
SELECT COUNT(DISTINCT last_name) FROM `employees`