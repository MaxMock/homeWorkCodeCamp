insert into employee (firstname,lastname,age) values
('Siam','SilomLine01',50),
('Ratchadamri','SilomLine02',40),
('SalaDaeng','SilomLine03',30),
('ChongNonsi','SilomLine04',20),
('Surasak','SilomLine05',10),
('SaphanTaksin','SilomLine06',15),
('KrungThonBuri','SilomLine07',25),
('WongwianYai','SilomLine08',35),
('PhoNimit','SilomLine09',45),
('TalatPhlu','SilomLine10',55)


delete from employee where id = 5;

alter table employee add column address varchar(255);

update employee
 set address = '55/4'
 where id =2 ;
 update employee
 set address = '785/4'
 where id =5 ;
 update employee
 set address = '985/4'
 where id =9 ;


select count(*) from employee

SELECT id,firstname,lastname,age,created_at FROM employee WHERE age<20
