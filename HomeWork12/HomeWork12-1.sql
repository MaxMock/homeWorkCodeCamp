select i.name as instructor_name
from courses as c
right join instructors as i on i.id = c.teach_by
where c.id is null
order by c.id;

select c.id, c.name as course_name ,i.name 
from courses as c
left join instructors as i on i.id = c.teach_by
where i.id is null
order by c.id;



