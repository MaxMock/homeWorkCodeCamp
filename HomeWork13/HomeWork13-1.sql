select DISTINCT c.name,s.name,c.price as course_price from enrolls e
inner join students s on s.id = e.student_id 
inner join courses c on c.id = e.course_id 
union select '','',sum(c.price) from enrolls e
inner join students s on s.id = e.student_id 
inner join courses c on c.id = e.course_id

select s.name, sum(price) from courses c 
inner join enrolls e on e.course_id = c.id 
inner join students s on s.id = e.student_id 
group by s.id



