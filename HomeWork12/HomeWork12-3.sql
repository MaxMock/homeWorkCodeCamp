select DISTINCT c.name as course_name,i.name,c.price from enrolls e
inner join courses c on c.id = e.course_id 
inner join instructors as i on  i.id = c.teach_by 
ORDER by c.name

SELECT c.name ,c.price,i.name as teacher_name FROM courses c 
LEFT JOIN enrolls e ON c.id = e.course_id 
left  join instructors as i on  i.id = c.teach_by 
WHERE e.course_id IS  NULL

SELECT c.name ,c.price,i.name as teacher_name FROM courses c 
LEFT JOIN enrolls e ON c.id = e.course_id 
inner  join instructors as i on  i.id = c.teach_by 
WHERE e.course_id IS NULL

