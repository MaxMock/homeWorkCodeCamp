create database BookShop;

create table employee (
id int auto_increment,
firstname varchar(100),
lastname varchar(100),
age int(3),
created_at timestamp default now(),
primary key (id)
);

create table books (
    id_books int auto_increment,
ISBN int(13) NOT NULL ,
books_name varchar(100),
price int(10),
created_at timestamp default now(),
primary key (id_books)
);

create table selllist (
id_selllist int auto_increment,
ISBN_book int(13) NOT NULL,
employee_sell varchar(100),
book_price int(10),
book_amount int(10),
created_at timestamp default now(),
primary key (id_selllist)
);