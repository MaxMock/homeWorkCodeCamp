INSERT INTO `students` (`name`) VALUES 
('roop'),
('NationalStadium'),
('Ratchadamri'),
('Sala Daeng'),
('Chong Nonsi'),
('Surasak'),
('Saphan Taksin'),
('Krung Thon Buri'),
('Wongwian Yai'),
('Pho Nimit'),
('Talat Phlu'),
('Wutthakat'),
('Bang Wa');

INSERT INTO `enrolls` (`student_id`, `course_id`) VALUES 
('15','2'),
('14','4'),
('14','2'),
('10','4'),
('12','4'),
('13','2'),
('8','15'),
('12','15'),
('13','15'),
('3','15');


select DISTINCT c.name as course_name from enrolls e
inner join courses c on c.id = e.course_id 
ORDER by c.name

SELECT c.name FROM courses c 
LEFT JOIN enrolls e ON c.id = e.course_id 
WHERE e.course_id IS NULL