insert into books (ISBN,books_name, price) values
('1111','Roa',500),
('2222','Go',5000),
('3333','ASP',50000),
('4444','VB',20),
('5555','C++',200),
('6666','OOP',2000),
('7777','PHP',30),
('8888','JAVASCRIPT',300),
('9999','JAVA',3000),
('7878','C# for Bginner',3500);


SELECT books_name FROM books where books_name like '%Script'

SELECT * FROM books where books_name like '%a%' limit 4

insert into selllist (ISBN_book,employee_sell, price, book_amount) values
('1111','2',500,2),
('2222','3',5000,2),
('3333','1',50000,2),
('4444','6',20,2),
('4444','1',20,3),
('6666','2',2000,3),
('7777','3',30,3),
('8888','7',300,2),
('9999','8',3000,1),
('7878','1',3500,1),
('1111','2',500,2),
('2222','3',5000,2),
('3333','1',50000,2),
('4444','6',20,2),
('4444','1',20,3),
('6666','2',2000,3),
('7777','3',30,3),
('8888','7',300,2),
('9999','8',3000,1),
('7878','1',3500,1);

SELECT sum(book_amount) FROM selllist
select distinct ISBN_book from selllist;
SELECT SUM(book_price*book_amount) FROM selllist