select s.name, sum(c.price) as courses_price,count(c.name) as courses_count
from courses c
inner join enrolls e on e.course_id = c.id
inner join students s on s.id = e.student_id 
group by s.id

select s.id,s.name,c.price as courses_price
from courses c
inner join enrolls e on c.id = e.course_id
inner join students s on e.student_id  = s.id 
inner join (select s.id,s.name,max(c.price) as courses_price
from courses c
inner join enrolls e on c.id = e.course_id
inner join students s on e.student_id  = s.id 
group by s.id,s.name
) as max on max.id=s.id
where c.price =max.courses_price